// Message catalog for StoryTimeline.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  esAr: 'es-AR',
  relatoDelMaintainerNingunCommit: 'Relato del maintainer · ningún commit público es anterior a 2019',
};

export type Messages = typeof es;

const en: Messages = {
  esAr: 'en-US',
  relatoDelMaintainerNingunCommit: 'Maintainer’s account · no public commit predates 2019',
};

export const messages: Record<Locale, Messages> = { es, en };
