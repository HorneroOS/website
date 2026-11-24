// Message catalog for SourcePlate.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  losDatosDeEstaLista: 'Los datos de esta lista se generan desde',
  enElCommit: 'en el commit',
  nadaDeEstaListaEsta: 'Nada de esta lista está escrito a mano.',
};

export type Messages = typeof es;

const en: Messages = {
  losDatosDeEstaLista: 'The data in this list is generated from',
  enElCommit: 'at commit',
  nadaDeEstaListaEsta: 'Nothing in this list is typed by hand.',
};

export const messages: Record<Locale, Messages> = { es, en };
