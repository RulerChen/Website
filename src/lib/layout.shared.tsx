import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'RulerChen',
    },
    links: [
      {
        text: 'Docs',
        url: '/docs',
      },
      {
        text: 'Blog',
        url: '/blog',
      },
    ],
  };
}
