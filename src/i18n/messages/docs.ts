// Message catalog for DocsPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  documentacionDeHorneroOs: (v0: string | number | null | undefined): string => `${v0} — Documentación de Hornero OS`,
  documentacionDeHorneroOs2: (v0: string | number | null | undefined): string => `${v0}, documentación de Hornero OS.`,
  documentacion: 'Documentación',
  resumen: 'Resumen',
  buscarEnElSitio: 'Buscar en el sitio',
  herramientasDestacadasEnEstaPagina: 'Herramientas destacadas en esta página',
  herramientasDestacadas: 'Herramientas destacadas',
  desde: 'Desde ',
  enElCommit: 'en el commit ',
  sugeriUnCambioEnGithub: 'Sugerí un cambio en GitHub',
  enEstaPagina: 'En esta página',
  untranslatedDescription: (title: string): string =>
    `Documentación de HorneroOS en inglés: ${title}. Traducción al español pendiente.`,
};

export type Messages = typeof es;

const en: Messages = {
  documentacionDeHorneroOs: (v0: string | number | null | undefined): string => `${v0} — Hornero OS docs`,
  documentacionDeHorneroOs2: (v0: string | number | null | undefined): string => `${v0}, Hornero OS documentation.`,
  documentacion: 'Documentation',
  resumen: 'Overview',
  buscarEnElSitio: 'Search the site',
  herramientasDestacadasEnEstaPagina: 'Featured tools on this page',
  herramientasDestacadas: 'Featured tools',
  desde: 'From ',
  enElCommit: 'at commit ',
  sugeriUnCambioEnGithub: 'Suggest a change on GitHub',
  enEstaPagina: 'On this page',
  untranslatedDescription: (title: string): string =>
    `HorneroOS documentation in English: ${title}. Spanish translation pending.`,
};

export const messages: Record<Locale, Messages> = { es, en };
