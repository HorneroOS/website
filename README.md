# Hornero OS website

Official website for Hornero OS: what it is, what it looks like, how to
install it, and where it comes from.

An Astro static site with shared layouts and validated content collections.
Product data and technical documentation are generated from pinned HorneroOS
repositories; real desktop captures carry source provenance.

## Develop

```bash
fnm use          # Node v24.17.0 from .node-version
npm ci
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
- `/editions` — the composed product family and maturity
- `/layouts`, `/themes`, `/releases` — generated from pinned product sources
  (see `docs/PRODUCT_DATA.md`)
- `/showroom` — real captures with provenance plates
- `/docs/` — HorneroOS/docs rendered at its pinned commit
- `/search/` — Pagefind search over site content
- `/roots` — heritage, credits, comparison table
- `/install` — package availability and provisional installer acceptance status
- `/companion` — the Hornero Companion experience

Technical documentation is written in
[HorneroOS/docs](https://github.com/HorneroOS/docs) and published under `/docs/`.
