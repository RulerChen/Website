import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blog } from '@/lib/source';

export default function BlogPage() {
  const posts = blog.getPages().sort((a, b) => {
    const dateA = new Date(a.data.date as string);
    const dateB = new Date(b.data.date as string);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative grain-overlay">
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full animate-pulse-glow"
          style={{
            background:
              'radial-gradient(circle, rgba(224, 122, 95, 0.15) 0%, rgba(224, 122, 95, 0.05) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-[30%] -left-[15%] w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] rounded-full animate-pulse-glow delay-500"
          style={{
            background:
              'radial-gradient(circle, rgba(61, 90, 128, 0.12) 0%, rgba(61, 90, 128, 0.04) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p
            className="animate-fade-up text-xs sm:text-sm tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Blog
          </p>
          <h1
            className="animate-fade-up delay-100 text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-[-0.03em] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Articles & Thoughts
          </h1>
        </div>

        {/* Posts Grid */}
        <div className="space-y-6 sm:space-y-8">
          {posts.map((post, index) => (
            <Link
              key={post.url}
              href={post.url}
              className="animate-fade-up group block glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:translate-y-[-2px] transition-all duration-300"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2
                    className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-[var(--accent-warm)] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {post.data.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 line-clamp-2">
                    {post.data.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {post.data.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.data.date as string).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-[var(--text-muted)] group-hover:text-[var(--accent-warm)] transition-colors">
                  <span className="text-sm mr-2 hidden sm:inline">Read more</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[var(--text-secondary)]">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'Blog | RulerChen',
    description: 'Articles and thoughts on software engineering and technology.',
  };
}
