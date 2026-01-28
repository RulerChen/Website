# Copilot Instructions

This is a Next.js documentation site built with [Fumadocs](https://fumadocs.dev), configured for static export.

## Build, Test, and Lint

```bash
# Development server (http://localhost:3000)
npm run dev

# Build for production (outputs to ./out)
npm run build

# Serve static build
npm run start

# Type checking (includes MDX processing and Next.js type generation)
npm run types:check

# Linting
npm run lint          # Lint all files
npm run lint -- <file>  # Lint specific file
```

**Note:** `fumadocs-mdx` runs automatically on `postinstall` to generate MDX collections from content.

## Architecture

### Content System

- **Content Location**: MDX files in `content/docs/`
- **Configuration**: `source.config.ts` defines docs collection with frontmatter/meta schemas
- **Collections Import**: `fumadocs-mdx:collections/server` provides type-safe access to MDX
- **Source Adapter**: `src/lib/source.ts` exports `source` loader with base URL `/docs`
- **Generated Files**: `.source/` directory (gitignored) contains processed MDX collections

### Route Structure

| Path                            | Purpose                                                   |
| ------------------------------- | --------------------------------------------------------- |
| `app/(home)`                    | Landing page route group                                  |
| `app/docs/[[...slug]]/page.tsx` | Catch-all docs pages using `source.getPage()`             |
| `app/docs/layout.tsx`           | Docs layout with sidebar tree from `source.getPageTree()` |
| `app/api/search/route.ts`       | Search API endpoint using Orama search                    |

### Key Patterns

**1. Content Source Flow:**

```
content/docs/*.mdx → source.config.ts → fumadocs-mdx → .source/* → source.ts loader
```

**2. Page Rendering:**

- Use `source.getPage(params.slug)` to fetch page data
- Access MDX content via `page.data.body` (it's a React component)
- Generate static paths with `source.generateParams()`

**3. Path Aliases:**

- `@/*` → `src/*`
- `fumadocs-mdx:collections/*` → `.source/*`

### Layout Configuration

Shared layout options (nav title, etc.) are centralized in `src/lib/layout.shared.tsx` and used by both home and docs layouts.

### Static Export

- Configured with `output: 'export'` in `next.config.mjs`
- Search uses `staticGET` export with `revalidate: false`
- Build generates static HTML to `out/` directory

## Conventions

- **MDX Components**: Customize in `mdx-components.tsx` at root
- **Relative Links**: Use `createRelativeLink(source, page)` for the `<a>` component to enable relative file path linking between docs
- **Page Images**: Use `getPageImage(page)` helper for OG image URLs
- **LLM Text**: Use `getLLMText(page)` to get processed markdown for AI consumption
- **TypeScript**: Strict mode enabled, use Next.js-generated types from `.next/types/`
