'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  src: string;
  alt?: string;
  caption?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
}

// Get basePath from Next.js config
const basePath = '/Website';

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showIndicators = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Prepend basePath to image src
  const processedItems = items.map((item) => ({
    ...item,
    src: item.src.startsWith('/') ? `${basePath}${item.src}` : item.src,
  }));

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? processedItems.length - 1 : prev - 1));
  }, [processedItems.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === processedItems.length - 1 ? 0 : prev + 1));
  }, [processedItems.length]);

  useEffect(() => {
    if (!autoPlay || isHovered || processedItems.length <= 1) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, processedItems.length, goToNext]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    else if (e.key === 'ArrowRight') goToNext();
  };

  if (!processedItems || processedItems.length === 0) return null;

  return (
    <div
      className="relative w-full rounded-lg sm:rounded-xl overflow-hidden animate-fade-up border border-[var(--border-subtle)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden group bg-[var(--bg-secondary)]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {processedItems.map((item, index) => (
            <div key={index} className="relative min-w-full">
              <img
                src={item.src}
                alt={item.alt || `Slide ${index + 1}`}
                className="w-full h-auto max-h-[500px] sm:max-h-[600px] object-contain transition-all duration-300"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white px-4 sm:px-6 py-6 sm:py-8 pt-12 text-sm sm:text-base text-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
                  {item.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {(showIndicators || showArrows) && processedItems.length > 1 && (
        <div className="flex items-center justify-center gap-3 sm:gap-4 p-3 sm:p-3.5 bg-[var(--bg-tertiary)] border-t border-[var(--border-subtle)]">
          {showArrows && (
            <button
              onClick={goToPrevious}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent-warm)]/10 text-[var(--text-primary)] hover:bg-[var(--accent-warm)] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {showIndicators && (
            <div className="flex items-center gap-2">
              {processedItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-[var(--accent-warm)] scale-110'
                      : 'bg-[var(--text-muted)]/60 hover:bg-[var(--accent-warm)]/60 hover:scale-105'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {showArrows && (
            <button
              onClick={goToNext}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent-warm)]/10 text-[var(--text-primary)] hover:bg-[var(--accent-warm)] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
