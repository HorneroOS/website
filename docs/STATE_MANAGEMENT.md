# Site state and content flow

The website is static-first. Most product content is resolved at build time
from versioned data and Markdown; browser state is limited to the few
interactions that benefit from it.

## Build-time product data

`src/data/product/pins.json` pins the Config, Shell, Hornero CLI and docs
commits. `scripts/sync-product-data.mjs` reads those sources and generates
theme, layout, edition, palette-variant and release data. Pages import the
typed catalogue through `src/data/product/index.ts`; they do not make
client-side API calls for product facts. The generated JSON must match its
pins (`npm run data:check`). See [`PRODUCT_DATA.md`](./PRODUCT_DATA.md).

The docs collection reads the pinned HorneroOS/docs checkout from `.cache/`
during the Astro build. Search indexes the rendered static pages with Pagefind.
Its search script is included only on `/search/`.

## Authored content

`src/content/showroom/` contains Markdown entries for real captures. The Zod
schema in `src/content.config.ts` validates image, alt text, order and
provenance before pages can render them. Add new product facts to their
authoritative HorneroOS source first, then refresh the pins and generated data;
do not create a second catalogue in page frontmatter.

## Browser state

The global color selector uses the native radio group in `SiteLayout.astro`.
The saved key `hornero-color-mode` stores only explicit `light` or `dark`
choices; `system` follows the operating system's `prefers-color-scheme` value.
The head script applies the saved mode before the page body is rendered; the
choice persists between routes and reacts to system preference changes while
System is selected. The `storage` event synchronizes choices across tabs. Keep
this behavior small and avoid adding a global client store for it.

Navigation disclosures use native `<details>` and local script for Escape and
outside-pointer behavior. Search is a separate static route with Pagefind.
Other pages should keep state in the URL or native HTML controls where
possible.

## Rules for new interaction

- Render content at build time unless it depends on live user input or a
  browser API.
- Prefer anchors, forms, radio groups and `<details>` over custom widgets.
- Keep JavaScript progressive and isolated to the interaction that needs it.
- Verify keyboard operation, focus restoration, reduced motion and both color
  modes when changing a shared interaction.
- Do not add hydration or a state library without a concrete need and a small
  blast radius.
