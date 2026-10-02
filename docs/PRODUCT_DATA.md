# Product data

Facts about the product (layouts, theme packs, releases) are generated from
pinned Hornero sources, never typed into pages.

| File | Generated from |
| --- | --- |
| `src/data/product/layouts.json` | HorneroOS/shell `presets/*.json` |
| `src/data/product/themes.json` | HorneroOS/config `profiles/themes/*/theme.json`; the official trio from HorneroOS/hornero `official_theme_ids()` |
| `src/data/product/releases.json` | HorneroOS/hornero `releases/`, `manifests/` and the candidate pointer; tagged status from git tags |

## Documentation pages

`/docs/` renders HorneroOS/docs at the `docs` pin. `npm run build` first
checks out every pinned source into `.cache/product-src/`
(`--fetch-only`), so the pages always match one reviewed docs commit and no
copy of the docs lives in this repository. Routes mirror the docs
repository: `desktop/appearance.md` is `/docs/desktop/appearance/` and a
directory's `README.md` is its index. `src/lib/remark-docs-links.mjs`
rewrites relative `.md` links to those routes and sends other repository
files to GitHub at the pinned commit; the area order lives in
`src/data/docs-nav.ts`. After the build, `scripts/check-links.mjs` fails on
any internal link that does not resolve, and Pagefind indexes the site for
`/search/` (its script loads only on that page).

## Pins

`src/data/product/pins.json` names one full commit SHA per source plus a
snapshot of the release tags. `src/data/product/index.ts` types the data
for pages.

## Commands

```sh
npm run data:sync    # regenerate from the pins (refreshes the tag snapshot)
npm run data:bump    # move every pin to its repository's current main, then regenerate
npm run data:check   # CI: committed data must equal data generated from the pins
```

The sync fetches each pinned commit shallowly into `.cache/` (git and
network, no token). It refuses abbreviated SHAs and release records whose
name, version and manifest disagree.

## Updating

The `product-data` workflow runs daily (and on demand), bumps the pins and
opens a pull request; nothing reaches the site unreviewed. To update by
hand, run `npm run data:bump`, review the diff and open a PR. Never edit the
generated JSON: `data:check` fails the build when it drifts from the pins.
