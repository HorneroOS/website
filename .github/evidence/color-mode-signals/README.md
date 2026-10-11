# Cyberpunk Argentina color-mode review

Captured from the production static build with headless Chromium on
2026-10-11. The site-wide city grid and Buenos Aires signal colors carry
through informational pages, while the home page keeps its original night
scene in either mode.

- `homepage-dark.png` — 1440×1000, Dark mode on the home page.
- `themes-light.png` — 1440×1000, Light mode on the Themes page.
- `homepage-mobile.png` — 390×844, System mode on the home page with the
  emulated system preference set to Light.

Browser checks exercised all three options with pointer and keyboard input,
verified saved preference after reload, and confirmed System follows a
mid-session `prefers-color-scheme` change. The mobile page had no horizontal
overflow. These show the website, not HorneroOS desktop captures. Product
media retains its own capture provenance in the rendered pages.
