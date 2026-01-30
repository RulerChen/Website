import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';
import lastModified from 'fumadocs-mdx/plugins/last-modified';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema.extend({
      tabIcon: z.string().optional(),
    }),
  },
});

export const blogPosts = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: frontmatterSchema.extend({
      author: z.string(),
      date: z.string().date().or(z.date()),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [remarkMath],
    // Place it at first, it should be executed before the syntax highlighter
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
  plugins: [lastModified()],
});
