import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkDocsLinks from './src/lib/remark-docs-links.mjs';

// HorneroOS/docs is checked out at its pinned commit before every build
// (scripts/sync-product-data.mjs --fetch-only); see docs/PRODUCT_DATA.md.
const pins = JSON.parse(readFileSync(new URL('./src/data/product/pins.json', import.meta.url), 'utf8'));

// Canonical origin used for <link rel="canonical">, OpenGraph URLs and the
// sitemap. The apex domain redirects to this www hostname.
export default defineConfig({
  site: 'https://www.horneroos.com',
  output: 'static',
  // The single global stylesheet is small; inline it to avoid a render-blocking request.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [
      [
        remarkDocsLinks,
        { docsRoot: './.cache/product-src/docs', repo: pins.sources.docs.repo, sha: pins.sources.docs.sha },
      ],
    ],
  },
});
