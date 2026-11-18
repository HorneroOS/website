# Captured showcase images

Real host captures live here, one file per slot, named after the slot
(`cap-hero-01.png`). Clips go in `public/captures/` with their poster here.
Do not add a file by hand: run `node scripts/capture-ingest.mjs <SLOT-ID> <file>`
so the size, aspect ratio and checksum are validated and the slot in
`src/data/capture-slots.json` is flipped to `captured`. See `docs/CAPTURES.md`.
