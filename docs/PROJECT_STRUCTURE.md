# Website project structure

The HorneroOS website is a static Astro site. Product facts and documentation
are generated from pinned HorneroOS repositories; authored pages explain and
show that product without duplicating its catalogues.

## Source tree

```text
src/
├── assets/brand/          # Optimized brand marks imported by Astro
├── components/            # Capture frames, provenance plates, diagrams
├── content/
│   └── showroom/          # Real captures with validated provenance metadata
├── assets/                # Optimized images and brand assets processed by Astro
├── data/
│   ├── docs-nav.ts        # Documentation navigation groups
│   └── product/           # Generated data and full-SHA source pins
├── layouts/
│   └── SiteLayout.astro   # Shared navigation, color mode, footer, page shell
├── lib/                   # Markdown link rewriting and build helpers
├── pages/                 # Public routes (listed below)
└── styles/                # Global tokens, color modes, shared site styling

public/
├── images/                # Locally served product imagery
├── media/greeter/         # Small browser-preview derivatives and posters
└── wallpapers/            # Responsive licensed photography previews

scripts/
├── sync-product-data.mjs  # Fetches pins and generates/checks product data
└── check-links.mjs        # Fails builds on unresolved internal links
```

Astro's generated `.astro/`, fetched `.cache/`, `dist/`, and Pagefind output
are build artifacts. Do not commit them.

## Public routes

| Source                           | Route          | Role                                             |
| -------------------------------- | -------------- | ------------------------------------------------ |
| `src/pages/index.astro`          | `/`            | Product introduction and real desktop capture    |
| `src/pages/editions.astro`       | `/editions/`   | Edition composition and maturity                 |
| `src/pages/layouts.astro`        | `/layouts/`    | Shell layout catalogue                           |
| `src/pages/themes.astro`         | `/themes/`     | Themes, wallpapers and palette generation        |
| `src/pages/wallpapers.astro`     | `/wallpapers/` | Licensed Argentina photography and credits       |
| `src/pages/showroom.astro`       | `/showroom/`   | Curated visual stories using real captures       |
| `src/pages/greeter.astro`        | `/greeter/`    | Interactive browser recreation and scene credits |
| `src/pages/companion.astro`      | `/companion/`  | Companion experience                             |
| `src/pages/install.astro`        | `/install/`    | Current installation availability and caveats    |
| `src/pages/releases.astro`       | `/releases/`   | Product releases from pinned metadata            |
| `src/pages/roots.astro`          | `/roots/`      | Project history, people and provenance           |
| `src/pages/404.astro`            | `/404.html`    | Branded not-found page                           |
| `src/pages/search.astro`         | `/search/`     | Pagefind-powered site search                     |
| `src/pages/docs/[...slug].astro` | `/docs/**`     | HorneroOS/docs rendered at its pinned commit     |

The 404 page is `src/pages/404.astro`.

## Product data and documentation

`src/data/product/pins.json` pins complete commits for Config, Shell, Hornero
CLI and docs. `scripts/sync-product-data.mjs` reads those sources and
generates the JSON consumed by product pages. Never edit generated catalogue
JSON by hand. Use `npm run data:sync`, `npm run data:bump`, or
`npm run data:check` according to [`PRODUCT_DATA.md`](./PRODUCT_DATA.md).

The documentation route reads the pinned docs checkout under `.cache/` at
build time. `src/lib/remark-docs-links.mjs` rewrites relative Markdown links
to website routes or pinned GitHub source links. `src/data/docs-nav.ts`
controls the documentation sidebar. Pagefind indexes the generated site and
its client script is loaded on `/search/` only.

## Real captures

Showroom entries live in `src/content/showroom/*.md`. The collection schema in
`src/content.config.ts` requires a real image, meaningful alt text, display
order and provenance. Keep the source commit, scenario/context, theme,
resolution and date with each capture where available. `ArchFrame.astro` and
`KilnStamp.astro` render the image and its provenance; do not substitute
concept mockups for product evidence.

## Shared presentation

`SiteLayout.astro` provides the header, navigation, three-way System/Light/Dark
color control and footer. `src/styles/global.css` owns role-based design
tokens and both color modes. `BaseHead.astro` owns shared metadata. Keep
static content in Astro components and avoid hydrating a framework for content
that can be rendered at build time.

See [`COMPONENTS_AND_STYLING.md`](./COMPONENTS_AND_STYLING.md),
[`STATE_MANAGEMENT.md`](./STATE_MANAGEMENT.md),
[`PROJECT_CONFIGURATION.md`](./PROJECT_CONFIGURATION.md), and
[`PRODUCT_DATA.md`](./PRODUCT_DATA.md) for the corresponding contracts.
