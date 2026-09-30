import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical origin used for <link rel="canonical">, OpenGraph URLs and the
// sitemap. This is the live Vercel deployment (no custom domain yet).
export default defineConfig({
  site: 'https://website-zcra.vercel.app',
  output: 'static',
  // The single global stylesheet is small; inline it to avoid a render-blocking request.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
