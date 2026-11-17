// Feature ledger: one place that says what is released, experimental,
// unreleased (on main) or planned. Page copy asks this module for a status; it
// never asserts one itself. Edition and compositor stages are derived from the
// pinned catalogue; the rest come from features.json and are validated by
// scripts/check-feature-ledger.mjs.
import ledger from './features.json';
import { editionCatalogue, latestTagged, releases } from './product';
import type { Maturity } from './product';

export type Stage = 'released' | 'experimental' | 'unreleased' | 'planned';
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

const taggedVersions = new Set(releases.filter((r) => r.status === 'tagged').map((r) => r.version));

const stageOf = (entry: LedgerEntry): Stage => {
  if (entry.stage === 'shipping') {
    // A shipping claim only stands while its release is a tagged, published one.
    return entry.releasedIn && taggedVersions.has(entry.releasedIn) ? 'released' : 'unreleased';
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
