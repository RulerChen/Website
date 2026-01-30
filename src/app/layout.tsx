import { DM_Sans, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import './global.css';
import 'katex/dist/katex.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rulerchen.github.io/Website'),
  title: {
    default: 'RulerChen',
    template: '%s | RulerChen',
  },
  description: 'Software Engineer passionate about building scalable systems and elegant solutions.',
  icons: {
    icon: './favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'RulerChen',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
