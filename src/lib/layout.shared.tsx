import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image src="/Website/profile.webp" alt="Fumadocs Logo" width={24} height={24} />
          <span className="font-medium">RulerChen</span>
        </>
      ),
    },
    githubUrl: 'https://github.com/RulerChen',
  };
}
