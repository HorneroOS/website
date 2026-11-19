# Hornero OS website

Official website for HorneroOS, the Arch-based workstation operating-system
family (Desktop · Studio · Gaming): what it is, what it looks like, how to
install it, and where it comes from.

An Astro static site with shared layouts and validated content collections.
Product data and technical documentation are generated from pinned HorneroOS
repositories. The site uses the
[Hornero Signal](https://github.com/HorneroOS/docs/blob/main/development/rfc-0001-hornero-signal.md)
roles in Signal Night and Signal Day and self-hosts IBM Plex Sans, Mono and
Sans Condensed through Fontsource (see `docs/DESIGN_SYSTEM_SIGNAL.md`).

## Captures and imagery

Real desktop captures carry source provenance and an appearance label:
captures taken before Hornero Signal are shown as *Preview — previous
appearance*, and Signal specimens from HorneroOS/docs are shown as *Concept
render — not a screenshot*. Replace captures through the slots in
`src/data/captures.ts` as described in `docs/CAPTURES.md`; never present a
concept or browser recreation as a desktop capture.

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

- `/` — what HorneroOS is
- `/editions` — the composed product family and maturity
- `/layouts`, `/themes`, `/releases` — generated from pinned product sources
  (see `docs/PRODUCT_DATA.md`)
- `/wallpapers` — location, theme, photographer and license gallery generated
  from HorneroOS/config's pinned photo provenance, with local responsive previews
- `/showroom` — real captures with provenance plates
- `/greeter` — the original Hornero Signal SDDM greeter (generative horizon,
  accounts as channels), its planned real captures, and the scene credits of
  the still-published landscape release
- `/docs/` — HorneroOS/docs rendered at its pinned commit
- `/search/` — Pagefind search over site content
- `/roots` — project history, contributor credits and repository ownership map
- `/install` — package availability and provisional installer acceptance status
- `/companion` — the Hornero Companion experience

Technical documentation is written in
[HorneroOS/docs](https://github.com/HorneroOS/docs) and published under `/docs/`.
