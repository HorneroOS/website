# Product data

Facts about the product (layouts, theme packs, releases) are generated from
pinned Hornero sources, never typed into pages.

| File | Generated from |
|---|---|
| `src/data/product/layouts.json` | HorneroOS/shell `presets/*.json` |
| `src/data/product/themes.json` | HorneroOS/config `profiles/themes/*/theme.json`; the official trio from HorneroOS/hornero `official_theme_ids()` |
| `src/data/product/releases.json` | HorneroOS/hornero `releases/`, `manifests/` and the candidate pointer; tagged status from git tags |

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
