# Hornero OS website

Official website for Hornero OS: what it is, what it looks like, how to
install it, and where it comes from.

An Astro static site (content-first, zero client JS by default), built
the same way as
[ulises-jeremias/website](https://github.com/ulises-jeremias/website):
file-based routing, content collections, shared layout. Scaffolded from
the `astro-starter` template (`create-awesome-node-app`); the sample
blog was replaced with HorneroOS pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Gates

```bash
npm run lint
npm run type-check
npm run build
```

## Pages

- `/` — what Hornero OS is
- `/layouts`, `/themes`, `/releases` — generated from pinned product sources
  (see `docs/PRODUCT_DATA.md`)
- `/showroom` — real captures with provenance plates
- `/docs/` — HorneroOS/docs rendered at its pinned commit; `/search/`
- `/roots` — heritage, credits, comparison table
- `/install` — package availability and provisional installer acceptance status

Technical documentation is written in
[HorneroOS/docs](https://github.com/HorneroOS/docs) and published under `/docs/`.
