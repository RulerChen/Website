import { Github, Linkedin, ArrowRight, MapPin, Briefcase, BookOpen, FileText } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] bg-[var(--bg-primary)] text-[var(--text-primary)] lg:overflow-hidden relative grain-overlay">
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orb - Top Right */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full animate-pulse-glow"
          style={{
            background:
              'radial-gradient(circle, rgba(224, 122, 95, 0.15) 0%, rgba(224, 122, 95, 0.05) 40%, transparent 70%)',
          }}
        />
        {/* Gradient Orb - Bottom Left */}
        <div
          className="absolute -bottom-[30%] -left-[15%] w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] rounded-full animate-pulse-glow delay-500"
          style={{
            background:
              'radial-gradient(circle, rgba(61, 90, 128, 0.12) 0%, rgba(61, 90, 128, 0.04) 40%, transparent 70%)',
          }}
        />
        {/* Subtle Grid */}
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

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center py-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-4 lg:space-y-6">
              {/* Headline */}
              <div className="space-y-2 lg:space-y-3">
                <p
                  className="animate-fade-up delay-100 text-xs sm:text-sm lg:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[var(--text-muted)]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Software Engineer
                </p>
                <h1
                  className="animate-fade-up delay-200 text-[clamp(2.5rem,10vw,7rem)] leading-[0.9] tracking-[-0.03em]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span className="block">RulerChen</span>
                </h1>
              </div>

              {/* Tagline */}
              <p className="animate-fade-up delay-300 text-[clamp(1rem,2.5vw,1.5rem)] leading-relaxed text-[var(--text-secondary)] max-w-[540px]">
                I want to become a better engineer !
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-up delay-400 flex flex-wrap gap-3 pt-1 lg:pt-2">
                <Link
                  href="/docs"
                  className="group inline-flex items-center gap-2 lg:gap-3 px-5 lg:px-6 py-2.5 lg:py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-medium text-sm lg:text-base transition-all duration-300 hover:gap-3 lg:hover:gap-4 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/5"
                >
                  <BookOpen className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                  <span>Read Documentation</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 lg:gap-3 px-5 lg:px-6 py-2.5 lg:py-3.5 rounded-full font-medium text-sm lg:text-base border border-[var(--border-subtle)] hover:border-[var(--text-muted)] transition-all duration-300 hover:bg-[var(--bg-secondary)]"
                >
                  <FileText className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                  <span>View Blog</span>
                </Link>
              </div>
            </div>

            {/* Right Side - Info Cards */}
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative">
                {/* Decorative Element - Hidden on mobile */}
                <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 opacity-20 dark:opacity-10 animate-float">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--accent-warm)]">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Info Cards Stack */}
                <div className="space-y-3 lg:space-y-4">
                  {/* Location Card */}
                  <div className="animate-scale-in delay-300 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-5 hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div className="p-2 lg:p-3 rounded-lg lg:rounded-xl bg-[var(--accent-cool)]/10 flex-shrink-0">
                        <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-[var(--accent-cool)]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-[10px] lg:text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-0.5 lg:mb-1"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          Location
                        </p>
                        <p className="text-sm lg:text-lg font-medium">Taipei, Taiwan</p>
                        <p className="text-xs lg:text-sm text-[var(--text-secondary)]">UTC+8 · Available for remote</p>
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="animate-scale-in delay-400 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-5 hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div className="p-2 lg:p-3 rounded-lg lg:rounded-xl bg-[var(--accent-warm)]/10 flex-shrink-0">
                        <Briefcase className="w-4 h-4 lg:w-5 lg:h-5 text-[var(--accent-warm)]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-[10px] lg:text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2 lg:mb-3"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          Experience
                        </p>
                        <div className="space-y-2.5 lg:space-y-3">
                          <div className="border-l-2 border-[var(--accent-warm)]/30 pl-3 lg:pl-4">
                            <p className="text-sm lg:text-base font-medium">Software Engineer Intern</p>
                            <p className="text-xs lg:text-sm text-[var(--text-secondary)]">Netskope</p>
                            <p className="text-[10px] lg:text-xs text-[var(--text-muted)]">2025.6 - 2025.9</p>
                          </div>
                          <div className="border-l-2 border-[var(--border-subtle)] pl-3 lg:pl-4">
                            <p className="text-sm lg:text-base font-medium">Software Engineering Intern</p>
                            <p className="text-xs lg:text-sm text-[var(--text-secondary)]">Carousell</p>
                            <p className="text-[10px] lg:text-xs text-[var(--text-muted)]">2023.1 - 2025.6</p>
                          </div>
                          <div className="border-l-2 border-[var(--border-subtle)] pl-3 lg:pl-4">
                            <p className="text-sm lg:text-base font-medium">Frontend Intern</p>
                            <p className="text-xs lg:text-sm text-[var(--text-secondary)]">PChome</p>
                            <p className="text-[10px] lg:text-xs text-[var(--text-muted)]">2023.7 - 2023.8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Accent Line */}
        <div className="animate-fade-in delay-700 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
      </div>
    </div>
  );
}
