# Capture slots and the Hornero Signal capture handoff

Every product image on the site is a real capture with provenance. Hornero
Signal (RFC 0001) changed the desktop's appearance after most captures were
taken, so each capture records which appearance it shows and the site labels
older ones honestly.

## Capture entries

A capture is a Markdown entry in `src/content/showroom/<id>.md` whose
frontmatter is validated by `src/content.config.ts`:

```yaml
---
title:
  es: 'Cockpit en Signal Night · 20 de noviembre de 2026'
  en: 'Cockpit in Signal Night · 20 November 2026'
image: '../../../assets/screenshots/signal/cockpit-night-2026-11-20.png'
alt:
  es: 'Descripción literal de lo que se ve, al menos 20 caracteres.'
  en: 'A literal description of what is visible, at least 20 characters.'
order: 30
provenance:
  appearance: signal # signal | pre-signal
  source:
    es: 'Hornero QA · host real'
    en: 'Hornero QA · real host'
  context: # optional
    es: 'Escenario, preset y ventanas abiertas'
    en: 'Scenario, preset and open windows'
  pins: # optional, short SHAs
    shell: 'abc1234'
    config: 'def5678'
  resolution: 1920×1080
  theme: 'Signal Night'
  date: '2026-11-20'
---
```

- `provenance.appearance` is required. `pre-signal` renders a visible
  "Preview — previous appearance" label next to the image (through
  `CaptureLabel` and `KilnStamp`); `signal` renders "Real capture · Hornero
  Signal".
- Put the image under `assets/screenshots/` with a sibling JSON record
  (`hornero.website.capture/1`: file, sha256, captured date, source,
  resolution, visible surfaces), like the existing curated captures.
- Never use a render, mock-up or composited image. If an image is a
  concept, it does not belong in this collection.

## Concept renders

The homepage shows two Signal Bezel concept specimens from HorneroOS/docs
(`development/assets/signal-visual-language/`, vendored under
`src/assets/concepts/`). They are not captures: they render only with
`<CaptureLabel appearance="concept" />` ("Concept render — not a
screenshot"), keep their own baked-in "CONCEPT RENDER" label, credit their
wallpapers, and never fill a capture slot.

## Capture slots

`src/data/captures.ts` maps each place that shows a capture to the showroom
entry that fills it, plus a `wanted` brief for its Signal replacement:

| Slot | Used on | Wanted |
| --- | --- | --- |
| `home-workstation` | `/` hero, `/editions` Desktop | Signal Night, Cockpit, 1920×1080, real host, two or more windows doing real work, no popouts |
| `home-shell-dark` | `/` shell comparison (dark) | Signal Night, Hornero Left, 1920×1080 |
| `home-shell-light` | `/` shell comparison (light) | Signal Day, Hornero Left, same arrangement as the dark half |

To replace a capture: add the new entry with `appearance: signal`, change
the slot's `capture` id, run `npm run build`, and check the page. The
pre-Signal label disappears on its own. Keep the old entry; the showroom
ledger keeps the project's visual history.

## Current pre-Signal captures

All captures in `src/content/showroom/` predate Hornero Signal and carry
`appearance: pre-signal`. They stay published, labelled, until W9 (QA)
supplies Signal captures from the real host.
