import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="h-screen overflow-hidden bg-[#fafaf9] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100">
      {/* Grid Overlay - Subtle Guide */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 0.5px, transparent 0.5px), linear-gradient(to bottom, currentColor 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero Section - Typography Driven */}
        <section className="h-screen flex flex-col justify-start pt-20 md:pt-24">
          <div className="grid grid-cols-12 gap-6">
            {/* Main Statement - Asymmetric Layout */}
            <div className="col-span-12 lg:col-span-8 lg:col-start-1 space-y-8">
              <div className="space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500 font-mono">
                  Software Engineer
                </p>
                <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] font-bold">
                  RulerChen
                </h1>
              </div>

              <div className="max-w-[600px] space-y-8">
                <p className="text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.5] text-neutral-600 dark:text-neutral-400 font-light">
                  I want to become a better engineer!
                </p>
              </div>
            </div>

            {/* Metadata Column - Right Aligned */}
            <div className="col-span-12 lg:col-span-3 lg:col-start-10 space-y-6 text-sm">
              <div className="space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 font-mono">
                  Location
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">Taiwan, Taipei</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 font-mono">
                  Status
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">Open to opportunities</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 font-mono">
                  Connect
                </p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/rulerchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group"
                  >
                    <Github className="w-4 h-4" />
                    <span className="border-b border-transparent group-hover:border-current transition-colors">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com/in/rulerchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="border-b border-transparent group-hover:border-current transition-colors">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
