# Product data

Facts about the product (layouts, theme packs, releases, terminal and palette-app integrations) are generated from
pinned Hornero sources, never typed into pages.

| File | Generated from |
| --- | --- |
| `src/data/product/layouts.json` | HorneroOS/shell `presets/*.json` |
| `src/data/product/themes.json` | HorneroOS/config `profiles/themes/*/theme.json`; the official trio from HorneroOS/hornero `official_theme_ids()` |
| `src/data/product/releases.json` | HorneroOS/hornero `releases/`, `manifests/` and the candidate pointer; tagged status from git tags |
| `src/data/product/editions.json` | HorneroOS/hornero `editions/catalogue.yaml` |
| `src/data/product/greeter-scenes.json` | Pinned HorneroOS/greeter runtime catalog, approved scene manifests, still provenance records, and daypart windows |
| `src/data/product/wallpapers.json` | Pinned HorneroOS/config photo provenance manifest; local website previews are checked against its output hashes |
| `src/data/product/terminals.json` | Pinned HorneroOS/config `profiles/factory.json` terminal integration catalogue |
| `src/data/product/palette-applications.json` | Pinned HorneroOS/config `profiles/factory.json` optional palette application catalogue |

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

The `/greeter` browser recreation uses generated scene metadata and local
preview paths. Do not hand-edit its generated scene catalogue. After greeter
media is reviewed and merged, update the `greeter` pin to the reviewed commit
and run `npm run data:sync`. From the greeter checkout, run
`scripts/media/build.py`, then
`scripts/media/export-web-previews.py --output /path/to/website/public/media/greeter`.
Review the generated metadata and assets, then run `npm run data:check` in the
website checkout. The website previews are short web derivatives and are not
the offline SDDM media pack. They are served locally; no third-party player is
embedded.

## Updating

The `product-data` workflow runs daily (and on demand), bumps the pins and
opens a pull request; nothing reaches the site unreviewed. To update by
hand, run `npm run data:bump`, review the diff and open a PR. Never edit the
generated JSON: `data:check` fails the build when it drifts from the pins.
