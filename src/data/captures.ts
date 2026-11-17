// Capture slots: where the site shows a real desktop capture, and which
// showroom entry fills each slot today. QA replaces a slot by adding a new
// showroom entry (src/content/showroom/<id>.md, with provenance and
// `appearance: signal`) and pointing the slot's `capture` at it — no page
// code changes. See docs/CAPTURES.md for the full contract.
//
// `wanted` is the brief for the replacement capture. It is never shown as if
// it were an image; slots always render a real capture.

export type CaptureAppearance = 'signal' | 'pre-signal';

export interface CaptureSlot {
  /** Showroom entry id (src/content/showroom/<id>.md) that fills the slot. */
  /** Showroom entry id, or null while no authentic capture exists (the page then shows a labelled placeholder). */
  capture: string | null;
  /** Where the slot renders. */
  usedOn: string[];
  /** Brief for QA: what a Hornero Signal replacement capture must show. */
  wanted: string;
}

export const captureSlots = {
  'home-workstation': {
    capture: 'terminal-tools',
    usedOn: ['/ (hero workstation)', '/editions (Desktop)'],
    wanted:
      'Signal Night, Cockpit preset, 1920×1080 at 100 % scale, real host. Two or more application windows doing real work (for example an editor and a terminal running a build, or btop and a file manager). No popouts, no Dashboard over the windows.',
  },
  'home-shell-dark': {
    capture: 'hornero-left',
    usedOn: ['/ (shell, dark half of the comparison)'],
    wanted: 'Signal Night, Hornero Left preset, 1920×1080, same wallpaper and window arrangement as home-shell-light.',
  },
  'home-shell-light': {
    capture: 'hornero-light',
    usedOn: ['/ (shell, light half of the comparison)'],
    wanted: 'Signal Day, Hornero Left preset, 1920×1080, same wallpaper and window arrangement as home-shell-dark.',
  },
  'desktop-signal-night': {
    capture: null,
    usedOn: ['/desktop (hero)'],
    wanted: 'Signal Night, Cockpit, 1920×1080, real host: a working session with an editor, a terminal and the bar visible.',
  },
  'studio-session': {
    capture: null,
    usedOn: ['/studio (hero)'],
    wanted: 'Studio mode on a real host or the QA VM: Ardour or Blender open, the mode indicator on the bar, Studio layout.',
  },
  'gaming-session': {
    capture: null,
    usedOn: ['/gaming (hero)'],
    wanted: 'Gaming mode, Gaming layout: Steam or Heroic open, a game windowed, the mode indicator visible. No fabricated frame rates.',
  },
  'mode-focus': {
    capture: null,
    usedOn: ['/modes (Focus)'],
    wanted: 'Focus mode: icon-only bar, empty desktop, one working window. Same wallpaper as the other mode captures.',
  },
  'mode-signal-deck': {
    capture: null,
    usedOn: ['/modes (Signal)'],
    wanted: 'Signal mode with the instrument deck showing real telemetry widgets from the official plugins.',
  },
  'mode-gaming': {
    capture: null,
    usedOn: ['/modes (Gaming)'],
    wanted: 'Gaming mode: motion off, empty desktop, icon-only bar, fullscreen-adjacent state.',
  },
  'chromatic-pair-a': {
    capture: null,
    usedOn: ['/chromatic (before/after, wallpaper A)'],
    wanted: 'Hornero Chromatic active over wallpaper A: Cockpit with a terminal, the Control Center Appearance section in view.',
  },
  'chromatic-pair-b': {
    capture: null,
    usedOn: ['/chromatic (before/after, wallpaper B)'],
    wanted: 'Same arrangement as chromatic-pair-a with a different wallpaper, showing the palette and terminal colours following it.',
  },
  'javi-desktop': {
    capture: null,
    usedOn: ['/companion', '/ (Javi section)'],
    wanted: 'Javi perched in his desktop corner on a real desktop, not overlapping windows.',
  },
  'pluginkit-deck': {
    capture: null,
    usedOn: ['/extensions (lead)'],
    wanted: 'Three or more official extensions placed on the bar, desktop and Dashboard in one real session (Signal appearance).',
  },
  'customise-control-center': {
    capture: null,
    usedOn: ['/desktop (customisation)'],
    wanted: 'Control Center on the Bars or Layout page with live preview, in Signal.',
  },
} satisfies Record<string, CaptureSlot>;

export type CaptureSlotId = keyof typeof captureSlots;
