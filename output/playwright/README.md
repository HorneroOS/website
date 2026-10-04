# Theme gallery visual review

Captured with an isolated headless Zen profile at 1440×1200 and 390×844.

- `themes-before.png` — the committed `main` build before the gallery redesign.
- `themes-desktop.png` — the redesigned gallery at desktop width.
- `themes-mobile.png` — the redesigned gallery at phone width, including the hero image priority and mobile ordering adjustments.

The before build was served from a clean, read-only `main` worktree. The after build uses the branch's generated static output with the final gallery copy, artwork and layout. For the mobile visual iteration, its generated HTML received an inline prototype of the branch's final hero-loading, image-order and heading-size CSS so the responsive result could be inspected without another resource-heavy image build. The committed source is rebuilt by CI.
