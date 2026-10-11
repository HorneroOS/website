# Contributing to the HorneroOS website

Thanks for helping improve HorneroOS's public product experience. The website
is an Astro static site; product facts and technical documentation stay owned
by their respective HorneroOS repositories.

## Local setup

Use Node `v24.17.0` from `.node-version` and install from the lockfile:

```sh
fnm use
npm ci
npm run dev
```

Open `http://localhost:4321`.

## Project boundaries

- Route composition lives in `src/pages/`; shared shell and interactions live
  in `src/layouts/SiteLayout.astro` and focused components in `src/components/`.
- Real showroom captures and their provenance live in `src/content/showroom/`.
- Theme, layout, edition and release facts are generated from full-SHA pins in
  `src/data/product/pins.json`. Do not edit generated catalogue JSON by hand.
- User and technical documentation is authored in `HorneroOS/docs`; the site
  renders that repository's pinned commit under `/docs/`.
- Keep the public copy declarative and aligned with the maturity data. Do not
  claim an ISO, installer path, supported compositor or release that has not
  passed its documented acceptance gates.

## Validation

Run the same checks as CI:

```sh
npm run data:check
npm run lint
npm run type-check
npm run build
```

The build fetches pinned sources, renders static pages, generates the Pagefind
index and checks internal links. If dependencies are already installed, these
checks need no local virtual machine.

For visual or interaction changes, also inspect the rendered route at desktop
and narrow mobile widths. Exercise keyboard navigation, focus visibility,
System/Light/Dark behavior and reduced motion when those areas change. Use
real Hornero captures with provenance; do not replace them with interface
mockups.

## Change workflow

- Branch from `main` using `feat/…` or `fix/…` prefixes (the push workflows
  cover these prefixes and pull requests).
- Keep each pull request focused and describe the user-facing result.
- Include relevant command results and visual evidence for presentation
  changes; do not commit `node_modules/`, `.cache/`, `.astro/` or `dist/`.
- Use Conventional Commit messages, for example `docs: refresh contributor guide`.
- Update the owning product repository before bumping website data pins.
