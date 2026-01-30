'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export function Comments() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="mt-12 border-(--border-subtle)">
      <Giscus
        repo="RulerChen/Website"
        repoId="R_kgDORC0Qrg"
        category="General"
        categoryId="DIC_kwDORC0Qrs4C1mKL"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
