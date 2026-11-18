// Feature ledger: one place that says what is released, experimental,
// unreleased (on main) or planned. Page copy asks this module for a status; it
// never asserts one itself. Edition and compositor stages are derived from the
// pinned catalogue; the rest come from features.json and are validated by
// scripts/check-feature-ledger.mjs.
import ledger from './features.json';
import isoRecord from './download.json';
import { editionCatalogue, latestTagged, releasedVersions, releases } from './product';
import type { Maturity } from './product';

/**
 * released: in the published install ISO (and its packages).
 * packaged: released as packages after that ISO; existing installs get it by
 *           updating, a fresh install from the ISO needs the same update.
 */
export type Stage = 'released' | 'packaged' | 'experimental' | 'unreleased' | 'planned';
type Localized = { es: string; en: string };

export interface Feature {
  id: string;
  stage: Stage;
  releasedIn: string | null;
  title: Localized;
  summary: Localized;
  evidence: { label: string; href: string }[];
}

interface LedgerEntry {
  id: string;
  stage: 'shipping' | 'main' | 'experimental' | 'planned';
  releasedIn: string | null;
  title: Localized;
  summary: Localized;
  evidence: { label: string; href: string }[];
}

// releases is newest first, so a lower index is a newer release.
const order = (version: string) => releases.findIndex((r) => r.version === version);
const isoOrder = order(isoRecord.version);

const stageOf = (entry: LedgerEntry): Stage => {
  if (entry.stage === 'shipping') {
    // A shipping claim only stands while its release is a published one.
    if (!entry.releasedIn || !releasedVersions.has(entry.releasedIn)) return 'unreleased';
    return order(entry.releasedIn) < isoOrder ? 'packaged' : 'released';
  }
  return entry.stage === 'main' ? 'unreleased' : entry.stage;
};

export const features: Feature[] = (ledger.features as LedgerEntry[]).map((entry) => ({
  ...entry,
  stage: stageOf(entry),
}));

export const feature = (id: string): Feature => {
  const hit = features.find((f) => f.id === id);
  if (!hit) throw new Error(`feature ledger has no entry '${id}'`);
  return hit;
};

/** Catalogue maturity (editions, compositors) as a ledger stage. */
export const stageFromMaturity = (maturity: Maturity): Stage =>
  maturity === 'planned' ? 'planned' : maturity === 'experimental' ? 'experimental' : 'released';

export const editionStage = (id: string): Stage => {
  const edition = editionCatalogue.editions.find((e) => e.id === id);
  if (!edition) throw new Error(`edition '${id}' is not in the pinned catalogue`);
  return stageFromMaturity(edition.maturity);
};

export const latestRelease = latestTagged ?? null;
