# HorneroOS website agent guide

This repository owns the public HorneroOS website. Human contribution
workflow is in [CONTRIBUTING.md](CONTRIBUTING.md); structure and design
contracts are in [`docs/`](docs/).

## Product truth

- Product facts come from `src/data/product/`, generated from the full commit
  pins in `src/data/product/pins.json`. Never hand-edit generated catalogue
  files or invent product capabilities in page copy.
- Technical and user documentation belongs to
  [HorneroOS/docs](https://github.com/HorneroOS/docs); `/docs/` renders the
  pinned commit.
- Follow maturity labels from the edition catalogue and installation status
  from HorneroOS. Do not imply that a planned or experimental edition is a
  supported release.
- Every product screenshot must be a real capture with truthful alt text and
  provenance. Do not use mock desktop UI or decorative stock screenshots.
- Describe product capabilities in present-tense, factual language. Reserve
  launch/update language for release history.

## Architecture and style

- Astro pages are statically rendered; prefer HTML and CSS over client-side
  state or a new framework.
- Shared navigation, color modes, and document shell are in
  `src/layouts/SiteLayout.astro`. Shared styling tokens are in
  `src/styles/global.css`.
- Use the global role tokens across pages. Preserve the Buenos Aires
  cyberpunk identity in both color modes without sacrificing text contrast or
  turning long-form content into decoration.
- Preserve semantic landmarks, descriptive labels, visible focus, keyboard
  operation, reduced-motion behavior, responsive layouts and image
  alternatives.
- `src/content.config.ts` validates showroom and documentation collections.
  Update schemas and their consumers together.

## Commands

```sh
npm run data:check
npm run lint
npm run type-check
npm run build
```

`npm run build` fetches pinned source repositories, builds static pages,
generates Pagefind search, and checks internal links. CI runs data consistency,
lint, type-check, build, and Markdown lint.

For presentation changes, inspect real rendered pages at desktop and phone
widths, and test keyboard operation and System/Light/Dark behavior. Read
[`docs/COMPONENTS_AND_STYLING.md`](docs/COMPONENTS_AND_STYLING.md) before
changing shared UI.
