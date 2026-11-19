# Image curation

How the 144-slot capture inventory became a curated public selection.
Inventory and provenance live in `src/data/capture-slots.json`; public
placement is decided only by `src/data/editorial.json`. This file is the
decision record for every slot (it legitimately names cancelled ids).

## Counts

- Archive total (assets kept on disk): 96 captured files — nothing was deleted.
- Distinct public images (editorial pages + showroom): 46.
- Public placeholders removed: every one — pending slots no longer render plates.
- Pending declarations cancelled (DROP): 40; deferred (DEFER, shot-list only): 8.
- Slot decisions: FEATURE 22, SUPPORT 24, DOCS 10, ARCHIVE 40 (status counts: captured 56, archived 40, pending 8).
- Showroom: 45 of the 46 public images (CAP-COMPARE-02 appears only in the home compare wipe).

ARCHIVE always means: keep the file in `src/assets/captures/` (clips in
`public/captures/`) and the slot record, set `status: archived`, and stop
rendering. DROP applies only to pending declarations, which were removed
from `capture-slots.json` after every reference was scrubbed.

## Open risks (not blockers for this record)

- Wallpaper provenance: the cyberpunk and anime wallpapers in many kept
  frames carry no credit in any slot; photo Originals credits must be
  confirmed before any wider reuse. Do not add FEATURE placements of
  uncredited wallpaper art without that check.
- Privacy holds: `CAP-CC-15` (hardware model in frame) and `CAP-MODE-04`
  (personal prompt) are ARCHIVEd — masters kept in `src/assets/captures/`,
  no public copy is served, and docs do not embed them. Recapture clean
  before any use; prefer `CAP-CC-14` for gaming docs. Note `docsOnly`
  means a stable public `/captures/` URL is served (that is how docs
  embed), so it must never be used as a privacy hold.
- Gaming, the real SDDM greeter and the Calamares installer remain image
  gaps by design (DEFER): `/gaming` shows readiness only, `/greeter` the
  lock screen (labelled as such), `/install` updates/rollback only.

## Every slot decision

| Slot | Decision | Placement | Why |
| --- | --- | --- | --- |
| CAP-APPEARANCE-01 | FEATURE | /themes, showroom:Customization | flagship placement |
| CAP-CC-01 | FEATURE | /why-horneroos, showroom:System details | flagship placement |
| CAP-CC-02 | FEATURE | showroom:System details | flagship placement |
| CAP-CC-04 | FEATURE | /why-horneroos, /modes, showroom:System details | flagship placement |
| CAP-CC-07 | FEATURE | /extensions, showroom:System details | flagship placement |
| CAP-CC-14 | FEATURE | /gaming, showroom:Gaming | flagship placement |
| CAP-CHROMA-07 | FEATURE | /chromatic, showroom:Customization | flagship placement |
| CAP-DESKTOP-02 | FEATURE | /desktop, /layouts, showroom:Layouts | flagship placement |
| CAP-EXT-04 | FEATURE | /extensions, showroom:System details | flagship placement |
| CAP-JAVI-08 | FEATURE | /, /companion, showroom:Javi | flagship placement |
| CAP-LAYOUT-01 | FEATURE | /layouts, showroom:Layouts | flagship placement |
| CAP-LAYOUT-02 | FEATURE | /layouts, showroom:Layouts | flagship placement |
| CAP-LAYOUT-04 | FEATURE | /layouts, showroom:Layouts | flagship placement |
| CAP-LAYOUT-05 | FEATURE | /layouts, showroom:Layouts | flagship placement |
| CAP-LAYOUT-12 | FEATURE | /layouts, showroom:Layouts | flagship placement |
| CAP-LOCK-01 | FEATURE | /greeter, showroom:System details | flagship placement |
| CAP-MODE-05 | FEATURE | /studio, showroom:Creative | flagship placement |
| CAP-SHELL-07 | FEATURE | /desktop, showroom:Desktop | flagship placement |
| CAP-SIGNAL-01 | FEATURE | /, showroom:System details | flagship placement |
| CAP-TERM-06 | FEATURE | /terminals, showroom:System details | flagship placement |
| CAP-THEME-05 | FEATURE | /, /themes, showroom:Customization | flagship placement |
| CAP-THEME-06 | FEATURE | /themes, showroom:Customization | flagship placement |
| CAP-CC-09 | SUPPORT | /desktop, showroom:Desktop | supporting placement |
| CAP-CC-10 | SUPPORT | /install, showroom:System details | supporting placement |
| CAP-CHROMA-01 | SUPPORT | /chromatic, showroom:Customization | supporting placement |
| CAP-CHROMA-02 | SUPPORT | /chromatic, showroom:Customization | supporting placement |
| CAP-CLIP-03 | SUPPORT | /modes, showroom:System details | kept: frames show Signal instruments toggling with the mode switch |
| CAP-COMPARE-01 | SUPPORT | /, showroom:System details | supporting placement |
| CAP-COMPARE-02 | SUPPORT | /, showroom:System details | supporting placement |
| CAP-DECK-01 | SUPPORT | /modes, showroom:System details | supporting placement |
| CAP-DESKTOP-01 | SUPPORT | /desktop, showroom:Desktop | supporting placement |
| CAP-EXT-01 | SUPPORT | showroom:System details | supporting placement |
| CAP-HERO-01 | SUPPORT | /editions, showroom:System details | demoted from home/why hero to /editions (top crop): personal fastfetch is only honest as an example machine |
| CAP-JAVI-02 | SUPPORT | /companion, showroom:Javi | supporting placement |
| CAP-JAVI-07 | SUPPORT | /companion, showroom:Javi | supporting placement |
| CAP-LAYOUT-11 | SUPPORT | /layouts, showroom:Layouts | supporting placement |
| CAP-MODE-01 | SUPPORT | /modes, showroom:System details | supporting placement |
| CAP-SHELL-03 | SUPPORT | /desktop, showroom:Desktop | supporting placement |
| CAP-SHELL-08 | SUPPORT | /desktop, showroom:Desktop | supporting placement |
| CAP-SHELL-09 | SUPPORT | /desktop, showroom:Desktop | supporting placement |
| CAP-SIGNAL-02 | SUPPORT | /, showroom:System details | supporting placement |
| CAP-STUDIO-03 | SUPPORT | /studio, showroom:Creative | supporting placement |
| CAP-TERM-05 | SUPPORT | /terminals, showroom:System details | supporting placement |
| CAP-THEME-02 | SUPPORT | /themes, showroom:Customization | supporting placement |
| CAP-THEME-08 | SUPPORT | /themes, showroom:Customization | supporting placement |
| CAP-THEME-10 | SUPPORT | /themes, showroom:Customization | supporting placement |
| CAP-CC-03 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-CC-05 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-CC-06 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-CC-11 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-CC-12 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-CC-13 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-CC-15 | ARCHIVE | — | privacy hold: hardware model in frame; master kept, no public copy served, not embedded in docs |
| CAP-MODE-04 | ARCHIVE | — | privacy hold: personal prompt in frame; master kept, no public copy served, not embedded in docs |
| CAP-STUDIO-02 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-STUDIO-04 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-TERM-01 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-TERM-04 | DOCS | — | documentation only (stable public/captures URL, not placed on the website) |
| CAP-APPEARANCE-03 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-CLIP-01 | ARCHIVE | — | frame extraction showed no recolour transition (static wallpaper frames) |
| CAP-CLIP-02 | ARCHIVE | — | frame extraction showed the Javi panel appearing but no bird flight |
| CAP-CLIP-05 | ARCHIVE | — | frame extraction showed no layout change between frames |
| CAP-CLIP-06 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-DESKTOP-03 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-DESKTOP-04 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-EXT-03 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-HERO-02 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-JAVI-01 | ARCHIVE | — | byte-identical to CAP-SHELL-01; launcher over smoking anime wallpaper |
| CAP-JAVI-06 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-JAVI-10 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-LAYOUT-03 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-LAYOUT-06 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-LAYOUT-07 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-LAYOUT-08 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-LAYOUT-09 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-LAYOUT-10 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-LAYOUT-13 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-LAYOUT-14 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-MODE-02 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-MODE-03 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-MODE-06 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-OG-01 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-SHELL-01 | ARCHIVE | — | byte-identical to CAP-JAVI-01; launcher over smoking anime wallpaper |
| CAP-SHELL-02 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-SHELL-04 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-SHELL-05 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-SHELL-06 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-SHELL-10 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-TERM-02 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-TERM-03 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-THEME-01 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-THEME-03 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-THEME-04 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-THEME-07 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-UPDATE-01 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-UPDATE-02 | ARCHIVE | — | asset + record kept, public rendering stopped (duplicate, privacy leak, illegible purpose, or slot/alt mismatch — see review notes) |
| CAP-CC-08 | DEFER | — | genuinely essential and impossible to fake; stays on the shot list, never renders |
| CAP-CHROMA-09 | DEFER | — | genuinely essential and impossible to fake; stays on the shot list, never renders |
| CAP-DECK-02 | DEFER | — | genuinely essential and impossible to fake; stays on the shot list, never renders |
| CAP-GAMING-01 | DEFER | — | genuinely essential and impossible to fake; stays on the shot list, never renders |
| CAP-GREETER-01 | DEFER | — | genuinely essential and impossible to fake; stays on the shot list, never renders |
| CAP-INSTALL-01 | DEFER | — | genuinely essential and impossible to fake; stays on the shot list, never renders |
| CAP-INSTALL-02 | DEFER | — | genuinely essential and impossible to fake; stays on the shot list, never renders |
| CAP-INSTALL-08 | DEFER | — | genuinely essential and impossible to fake; stays on the shot list, never renders |
| CAP-APPEARANCE-02 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-APPEARANCE-04 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-BOOT-01 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-BOOT-02 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-CHROMA-03 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-CHROMA-04 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-CHROMA-05 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-CHROMA-06 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-CHROMA-08 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-CLIP-04 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-CLIP-07 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-CLIP-08 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-EXT-02 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-GAMING-02 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-GAMING-03 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-GAMING-04 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-GREETER-02 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-GREETER-03 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-GREETER-04 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-INSTALL-03 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-INSTALL-04 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-INSTALL-05 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-INSTALL-06 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-INSTALL-07 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-JAVI-03 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-JAVI-04 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-JAVI-05 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-JAVI-09 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-MULTI-01 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-MULTI-02 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-MULTI-03 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-PHOTO-01 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-PHOTO-02 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-PHOTO-03 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-SHELL-11 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-STUDIO-01 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-THEME-09 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-THEME-11 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-THEME-12 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
| CAP-THEME-13 | DROP | — | pending declaration cancelled: a kept capture already proves the claim, or the surface is text-shaped |
