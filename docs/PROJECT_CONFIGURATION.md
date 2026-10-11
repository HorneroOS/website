# Project configuration

The site is an Astro static build deployed at `www.horneroos.com`. Its
product inputs are pinned HorneroOS repositories, not runtime APIs.

## Node and package scripts

Use Node `v24.17.0`, as recorded in `.node-version`, then install the exact
lockfile dependencies with `npm ci`.

| Command              | Purpose                                                                        |
| -------------------- | ------------------------------------------------------------------------------ |
| `npm run dev`        | Start Astro at `http://localhost:4321`                                         |
| `npm run lint`       | Run ESLint, including Astro files                                              |
| `npm run type-check` | Sync pinned sources and run `astro check`                                      |
| `npm run data:check` | Verify generated product data matches its source pins                          |
| `npm run build`      | Sync pinned sources, build static pages, create Pagefind index and check links |
| `npm run preview`    | Serve the generated `dist/` build locally                                      |
| `npm run format`     | Format source files with Prettier and the Astro plugin                         |

GitHub Actions runs data consistency, lint, type-check and build checks for
pull requests. The build is bounded by the static output; no server adapter or
client framework is configured.

## Astro and TypeScript

`astro.config.mjs` sets static output, the canonical origin, sitemap
generation, inline global styles and the Markdown plugin that rewrites links
to pinned documentation. `tsconfig.json` extends Astro strict mode and maps
`@/` to `src/`.

The content schema lives in `src/content.config.ts`. It validates showroom
capture metadata and loads documentation from the pinned docs checkout. Update
schemas together with their content and run `npm run type-check`.

## Generated product data

The full commit pins live in `src/data/product/pins.json`. Use:

```sh
npm run data:sync   # regenerate data from existing pins
npm run data:check  # verify generated files without changing them
npm run data:bump   # advance pins to upstream main and regenerate
```

Review every generated diff after syncing. A pin bump changes public product
truth, so confirm catalogue changes against their source repositories before
merging. See [`PRODUCT_DATA.md`](./PRODUCT_DATA.md).

## Deployment and environment

`npm run build` writes static files to `dist/`; `vercel.json` configures the
current Vercel deployment and domain routing. `.cache/`, `.astro/`,
`node_modules/` and `dist/` are local or generated state and are ignored by
Git. There is no checked-in `.env.example` and no product facts should be
injected through ad-hoc environment variables.

For layout and component contracts, see [`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md)
and [`COMPONENTS_AND_STYLING.md`](./COMPONENTS_AND_STYLING.md).
