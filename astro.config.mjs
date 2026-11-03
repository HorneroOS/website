import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
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
  // Spanish is the default and priority locale (served at the root). English
  // keeps its own tree under /en/. Every page exists in both locales.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  // The single global stylesheet is small; inline it to avoid a render-blocking request.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-AR', en: 'en' } }, filter: (page) => !page.includes('/search') })],
  markdown: {
    // Dual Shiki themes: token colors come from CSS variables so code
    // meets WCAG AA contrast on both the night and newsprint surfaces
    // (see the `pre` rules in src/styles/global.css). The inherited
    // single theme rendered comments at 3.1:1 on the dark surface.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-high-contrast' },
      defaultColor: false,
    },
    processor: unified({
      remarkPlugins: [[
        remarkDocsLinks,
        { docsRoot: './.cache/product-src/docs', repo: pins.sources.docs.repo, sha: pins.sources.docs.sha },
      ]],
    }),
  },
});
