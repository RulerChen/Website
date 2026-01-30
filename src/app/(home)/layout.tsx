import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Book, Linkedin } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          icon: <Book />,
          text: 'Docs',
          url: '/docs',
        },
        {
          icon: <Book />,
          text: 'Blog',
          url: '/blog',
        },
        {
          type: 'icon',
          label: 'LinkedIn',
          icon: <Linkedin />,
          text: 'LinkedIn',
          url: 'https://linkedin.com/in/rulerchen',
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
