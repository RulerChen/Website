import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blog, source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { createRelativeLink } from 'fumadocs-ui/mdx';

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

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

      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Back Link */}
        <Link
          href="/blog"
          className="animate-fade-up inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-10 sm:mb-12">
          <h1
            className="animate-fade-up delay-100 text-[clamp(2rem,6vw,3.5rem)] leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {page.data.title}
          </h1>
          {page.data.description && (
            <p className="animate-fade-up delay-200 text-lg sm:text-xl text-[var(--text-secondary)] mb-6">
              {page.data.description}
            </p>
          )}
          <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[var(--accent-warm)]/10">
                <User className="w-4 h-4 text-[var(--accent-warm)]" />
              </div>
              <span>{page.data.author}</span>
            </span>
            <span className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[var(--accent-cool)]/10">
                <Calendar className="w-4 h-4 text-[var(--accent-cool)]" />
              </div>
              <span>
                {new Date(page.data.date as string).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </span>
          </div>
        </header>

        {/* Article Content */}
        <article className="animate-fade-up delay-500 prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-[var(--accent-warm)] prose-a:no-underline hover:prose-a:underline prose-code:bg-[var(--bg-secondary)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
          <Mdx
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(source, page),
            })}
          />
        </article>

        {/* Footer */}
        <footer className="animate-fade-up delay-600 mt-12 sm:mt-16 pt-8 border-t border-[var(--border-subtle)]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </footer>
      </div>
    </div>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: `${page.data.title} | RulerChen`,
    description: page.data.description,
  };
}
