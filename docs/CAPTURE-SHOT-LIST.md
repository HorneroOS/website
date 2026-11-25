# Capture shot list

> Generated from `src/data/capture-slots.json` by `node scripts/gen-shot-list.mjs`. Do not edit by hand:
> change the data file and regenerate. `npm run check:captures` fails when this file is stale.

The site shows a curated selection of real captures (46 distinct images placed by
`src/data/editorial.json`). Inventory: **104 slots** — 56 captured,
40 archived (asset kept, never rendered), 8 pending. Pending slots
never render publicly; this file is the definitive list of the **8 deferred captures**
(5 P0, 3 P1, 0 P2) still worth shooting, in 5 sessions.
Cancelled slot declarations and every keep/archive decision are recorded in docs/IMAGE_CURATION.md.

| Priority | Meaning | Slots |
| --- | --- | --- |
| P0 | Launch-critical: a page looks broken or dishonest without it | 5 |
| P1 | Important: makes the page convincing | 3 |
| P2 | Complementary: depth for people who keep reading | 0 |

## How to deliver a capture

1. Prepare the machine with the rules below, then shoot a session with `scripts/capture-helper.sh`.
2. Verify: `scripts/capture-helper.sh verify CAP-ID file`.
3. Fill the slot: `node scripts/capture-ingest.mjs CAP-ID file` (copies the file into `src/assets/captures/`,
   records its checksum and flips `status` to `captured`). By hand it is exactly two edits: drop the file
   in `src/assets/captures/` and set `status` and `file` on the slot.
4. Add an editorial placement in `src/data/editorial.json`, then `npm run build`.

Send the files to the maintainer who runs the ingest, or open a PR containing the ingest result.

## Global rules

### Capture environment

- **Demo user.** Create a clean Linux user (for example `demo`, hostname `hornero`) with only HorneroOS-shipped
  applications, or use the QA VM (`uv run hornero-qa`). Never capture from a personal account.
- **Fixed output.** One output at 1920x1080, scale 1, 60 Hz. For P0 desktop slots marked "2x master" also
  capture a 3840x2160 output at scale 2 (logical size stays 1920x1080). `scripts/capture-helper.sh headless`
  creates a throw-away headless output so the physical monitor and its windows never appear.
- **Release pins.** Capture on the released composition (hornero-shell 1.3.0, hornero-config 0.4.0, hornero-greeter 1.1.0
  at the time of writing), not a dev checkout. Record the shell and config short SHAs with `--pins`.
- **Wallpapers.** Only HorneroOS-shipped, credited wallpapers (the Argentina collection). Each slot names its
  wallpaper; do not use personal or third-party images.
- **Clean desktop.** No popups unless the slot is about one, no stale notifications, do-not-disturb on while
  staging, Num Lock as found, cursor parked off the subject.
- **Shell safety.** Only restart the shell when `qs ipc call lock isLocked` is false; do not hot-reload.

### Privacy rules (apply to every slot)

- No personal names, e-mail addresses, hostnames, account avatars, process lists with personal paths, git remotes,
  browser tabs, chat or mail tray badges, calendar entries, Wi-Fi or Bluetooth device names, or location (weather).
- Editor, terminal and file-manager content must be a demo repository and demo files created for the shoot.
- Media must be CC0, CC BY with credit recorded, or made by the project. No copyrighted video, music or album art.
- Games and apps shown must be free software or freely redistributable demos. No storefront account visible.
- Review every file at 100 % before ingesting. If in doubt, retake.

### Format, naming and export

- Masters: PNG (lossless) at the slot size or larger with the exact aspect ratio; photographs as AVIF or JPG
  (sRGB, 3000x2000). The site builds AVIF and WebP from the master; do not pre-compress.
- Clips: 6 to 12 s, no audio, 1280x720, a seamless loop where possible, WebM (VP9) plus MP4 (H.264) and a PNG
  poster of the best frame, each file under 2.5 MB. They never autoplay for visitors who prefer reduced motion.
- Name files `CAP-ID.png` (suffix `-a`, `-b` for multi-part slots). Day and Night are separate slots.
- Alt text below is the planned text; adjust it to what the final frame really shows before ingesting.

## Sessions

| Session | Where | Slots | Time |
| --- | --- | --- | --- |
| [S04 Hornero Chromatic](#session-s04-hornero-chromatic) | Host, demo user | 1 | 60 min |
| [S05 Control Center tour](#session-s05-control-center-tour) | Host, demo user | 1 | 75 min |
| [S07 Extensions and instrument deck](#session-s07-extensions-and-instrument-deck) | Host, demo user | 1 | 45 min |
| [S09 Modes, Studio and Gaming](#session-s09-modes-studio-and-gaming) | Host, demo user, Studio and Gaming installed | 1 | 90 min |
| [S12 Greeter, boot, installer and updates](#session-s12-greeter-boot-installer-and-updates) | QA VM or a fresh install | 4 | 120 min |

Run the sessions in order: S01 sets the arrangement and wallpapers that S02 to S09 reuse.

## Session S04: Hornero Chromatic

Where: Host, demo user. About 60 minutes, 1 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-CHROMA-09 | P1 | screenshot | Showroom only |

### CAP-CHROMA-09 Terminals follow the palette

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Chromatic and terminals.
- **On screen:** kitty, Alacritty and Ghostty tiled side by side, each showing `horneroctl appearance status` in the active Chromatic palette.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper ibera.
- **Setup:**
  1. Install the three terminals on the capture machine only.
  2. Open each running the same command; capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** kitty, Alacritty and Ghostty tiled side by side, each showing `horneroctl appearance status` in the active Chromatic palette.
- **Alt text (ES):** kitty, Alacritty y Ghostty en mosaico, cada una mostrando `horneroctl appearance status` con la paleta Chromatic activa.

## Session S05: Control Center tour

Where: Host, demo user. About 75 minutes, 1 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-CC-08 | P1 | screenshot | Showroom only |

### CAP-CC-08 Control Center: Javi pane

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Javi, customisation.
- **On screen:** Control Center, the Javi pane with skin, habitat and behaviour controls.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane companion`.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-08`), pane id `companion`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Javi pane with skin, habitat and behaviour controls.
- **Alt text (ES):** Centro de control, el panel de Javi con controles de personaje, hábitat y comportamiento.

## Session S07: Extensions and instrument deck

Where: Host, demo user. About 45 minutes, 1 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-DECK-02 | P1 | screenshot | Showroom only |

### CAP-DECK-02 Media deck

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Instrument deck.
- **On screen:** The media deck with a currently playing track from a royalty-free demo file.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Play a CC0 track in a media player; capture the deck.
- **Privacy:** Track title, artist and cover art must be CC0 or HorneroOS-made.
- **Alt text (EN):** The media deck with a currently playing track from a royalty-free demo file.
- **Alt text (ES):** El deck de medios con una pista en reproducción de un archivo de demostración libre de derechos.

## Session S09: Modes, Studio and Gaming

Where: Host, demo user, Studio and Gaming installed. About 90 minutes, 1 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-GAMING-01 | P0 | screenshot | /gaming |

### CAP-GAMING-01 Gaming hero, windowed game

- **Priority:** P0 (launch-critical).
- **Page and section:** /gaming · Gaming, hero.
- **On screen:** Gaming mode with Steam open and a free game running windowed, the Gaming bottom bar and the mode indicator visible; no frame-rate overlay.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Gaming, layout Gaming, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Install the Gaming specialization; switch to Gaming mode.
  2. Run a free, open-licence game (for example SuperTuxKart) windowed.
  3. No MangoHud overlay unless it is truly on in the shipped default.
- **Privacy:** Steam must show a demo account with a neutral name and no friends list.
- **Alt text (EN):** Gaming mode with Steam open and a free game running windowed, the Gaming bottom bar and the mode indicator visible; no frame-rate overlay.
- **Alt text (ES):** Modo Gaming con Steam abierto y un juego gratuito en ventana, la barra inferior de Gaming y el indicador de modo visibles; sin superposición de FPS.

## Session S12: Greeter, boot, installer and updates

Where: QA VM or a fresh install. About 120 minutes, 4 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-GREETER-01 | P0 | screenshot | /greeter |
| CAP-INSTALL-01 | P0 | screenshot | /install |
| CAP-INSTALL-02 | P0 | screenshot | /install |
| CAP-INSTALL-08 | P0 | screenshot | /install |

### CAP-GREETER-01 The Signal greeter, real screen

- **Priority:** P0 (launch-critical).
- **Page and section:** /greeter · Greeter, Signal Night hero.
- **On screen:** The real Hornero Signal greeter on Signal Night: the generative Pampa horizon, the centred clock, Javi's greeting and the sign-in module with accounts as channels and the demo user tuned; no recreation.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night (greeter), mode n/a, layout n/a, wallpaper Generative horizon (no wallpaper).
- **Setup:**
  1. Preferred: the QA VM or a fresh install with the released Signal greeter (`hornero-qa` images), log out to SDDM and capture from the host with the VM screenshot tool.
  2. Leave theme.conf at its defaults (colorScheme=auto on a dark platform, background=horizon, mascot=true); the demo user must be the tuned channel.
  3. On real hardware use a second TTY: `sudo -u sddm` environments differ; prefer the VM.
- **Privacy:** Demo user only.
- **Alt text (EN):** The real Hornero Signal greeter on Signal Night: the generative Pampa horizon, the centred clock, Javi's greeting and the sign-in module with accounts as channels and the demo user tuned; no recreation.
- **Alt text (ES):** El greeter real de Hornero Signal en Signal Night: el horizonte generativo de la pampa, el reloj al centro, el saludo de Javi y el módulo de ingreso con las cuentas como canales y el usuario de demostración sintonizado; sin recreación.

### CAP-INSTALL-01 Installer: welcome

- **Priority:** P0 (launch-critical).
- **Page and section:** /install · Install, steps.
- **On screen:** The installer welcome step in the chosen language.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The installer welcome step in the chosen language.
- **Alt text (ES):** El paso de bienvenida del instalador en el idioma elegido.

### CAP-INSTALL-02 Installer: edition and compositor

- **Priority:** P0 (launch-critical).
- **Page and section:** /install · Install, steps.
- **On screen:** The the edition and compositor picker with Desktop, Studio and Gaming and Hyprland selected.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the edition and compositor picker with Desktop, Studio and Gaming and Hyprland selected.
- **Alt text (ES):** El selector de edición y compositor con Desktop, Studio y Gaming e Hyprland seleccionado.

### CAP-INSTALL-08 Live ISO desktop

- **Priority:** P0 (launch-critical).
- **Page and section:** /install · Install, live session.
- **On screen:** The the live ISO desktop on first boot with the installer launcher visible.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the live ISO desktop on first boot with the installer launcher visible.
- **Alt text (ES):** El escritorio de la ISO en vivo en el primer arranque con el lanzador del instalador visible.

## Notes for the maintainer

- Javi and the nest (S08): shoot after the final Javi and nest art lands (feature ledger `javi-final-art` is planned).
- Greeter and installer (S12) need the QA VM or a fresh install; the greeter cannot be captured from a running session.
- Social cards stay brand-only (`scripts/build-og.mjs`); the archived fastfetch crop must never become an OG image.
