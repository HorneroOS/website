// Capture slots: the inventory of real host captures (docs/IMAGE_CURATION.md).
//
// src/data/capture-slots.json is the inventory source of truth (provenance,
// pins, checksums, privacy). What renders publicly is decided separately by
// src/data/editorial.json: only `captured` slots listed there appear on the
// site. `archived` slots keep their asset and record but never render;
// `pending` slots are the deferred shot list and never render either — there
// are no public placeholder plates. To fill a pending slot: drop the file in
// src/assets/captures/ (clips in public/captures/), flip `status` to
// `captured` and set `file` (`node scripts/capture-ingest.mjs <ID> <file>`),
// then add an editorial placement. docs/CAPTURES.md has the contract.

import data from './capture-slots.json';
import editorialData from './editorial.json';

export type SlotPriority = 'P0' | 'P1' | 'P2';
export type SlotKind = 'screenshot' | 'clip' | 'photo';
export type SlotStatus = 'pending' | 'captured' | 'archived';
export type Curation = 'FEATURE' | 'SUPPORT' | 'DOCS' | 'ARCHIVE' | 'DEFER';
export type Crop = 'top' | 'bottom' | 'br-quadrant' | 'panel';

export interface Localized {
  en: string;
  es: string;
}

export interface CaptureSlot {
  id: string;
  priority: SlotPriority;
  session: string;
  kind: SlotKind;
  title: Localized;
  description: Localized;
  alt: Localized;
  /** Routes (Spanish, root-relative) where the slot renders inline. Every slot also renders in /showroom. */
  pages: string[];
  section: string;
  aspect: string;
  width: number;
  height: number;
  scale2x: boolean;
  format: string;
  theme: string;
  mode: string;
  layout: string;
  wallpaper: string;
  setup: string[];
  privacy: string;
  status: SlotStatus;
  /** File name under src/assets/captures/ (public/captures/ for clips) once captured. */
  file: string | null;
  /** Poster image (src/assets/captures/) for clips. */
  poster?: string | null;
  capturedAt?: string;
  sha256?: string;
  source?: Localized;
  pins?: Record<string, string>;
  credit?: Localized;
  /** Curation decision (docs/IMAGE_CURATION.md). DOCS slots also set docsOnly. */
  curation?: Curation;
  /** Captured for documentation only; served from public/captures, never placed editorially. */
  docsOnly?: boolean;
}

export interface EditorialSection {
  format: 'hero' | 'pair' | 'compare' | 'selector' | 'support' | 'clip' | 'strip';
  render: 'manual' | 'gallery';
  slots: string[];
  caption: Localized;
  /** Per-slot captions for multi-image sections, so no caption repeats verbatim. */
  captions?: Record<string, Localized>;
  crop?: Crop;
  eager?: boolean;
}

export interface ShowroomGroup {
  group: Localized;
  slots: string[];
  captions?: Record<string, Localized>;
}

export interface CaptureSession {
  id: string;
  title: Localized;
  where: string;
  minutes: number;
}

export const captureSlots = data.slots as CaptureSlot[];
export const captureSessions = data.sessions as CaptureSession[];

const byId = new Map(captureSlots.map((slot) => [slot.id, slot]));

export function getSlot(id: string): CaptureSlot {
  const slot = byId.get(id);
  if (!slot) throw new Error(`Capture slot '${id}' is not declared in src/data/capture-slots.json`);
  return slot;
}

/**
 * @deprecated Inventory metadata only — public rendering is editorial.
 * Kept for non-rendering lookups; pages must use editorialForPage.
 */
export function slotsForPage(route: string): CaptureSlot[] {
  return captureSlots.filter((slot) => slot.pages.includes(route));
}

export const editorial = editorialData as unknown as {
  provenance: Localized;
  pages: Record<string, EditorialSection[]>;
  showroom: ShowroomGroup[];
};

/** Editorial sections for a route, in placement order. */
export function editorialForPage(route: string): EditorialSection[] {
  return editorial.pages[route] ?? [];
}

export function showroomGroups(): ShowroomGroup[] {
  return editorial.showroom;
}

/**
 * The human editorial caption for a slot, wherever it renders (manual page
 * placements and the showroom included). Per-slot captions win, then the
 * caption of a section that places this slot alone, then its first section.
 * Returns undefined when no placement exists (caller falls back to title).
 */
export function editorialCaption(id: string, locale: 'en' | 'es'): string | undefined {
  let sectionCaption: string | undefined;
  for (const sections of Object.values(editorial.pages)) {
    for (const section of sections) {
      if (section.captions?.[id]) return section.captions[id][locale];
      if (section.slots.includes(id)) {
        if (section.slots.length === 1) return section.caption[locale];
        sectionCaption ??= section.caption[locale];
      }
    }
  }
  for (const group of editorial.showroom) {
    if (group.captions?.[id]) return group.captions[id][locale];
  }
  return sectionCaption;
}

/** Distinct slot ids placed anywhere publicly (pages + showroom). */
export function publicSlotIds(): Set<string> {
  const ids = new Set<string>();
  for (const sections of Object.values(editorial.pages)) for (const section of sections) for (const id of section.slots) ids.add(id);
  for (const group of editorial.showroom) for (const id of group.slots) ids.add(id);
  return ids;
}

export const priorityOrder: SlotPriority[] = ['P0', 'P1', 'P2'];

export function slotCounts() {
  const counts = { P0: 0, P1: 0, P2: 0, total: captureSlots.length, captured: 0, archived: 0, pending: 0, public: publicSlotIds().size };
  for (const slot of captureSlots) {
    counts[slot.priority] += 1;
    if (slot.status === 'captured' && !slot.docsOnly) counts.captured += 1;
    if (slot.status === 'archived') counts.archived += 1;
    if (slot.status === 'pending') counts.pending += 1;
  }
  return counts;
}
