// Message catalog for SearchPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  buscarHorneroos: 'Buscar | HorneroOS',
  buscaEnElSitioDe: 'Buscá en el sitio de HorneroOS y en la documentación.',
  buscar: 'Buscar',
  buscaEnEsteSitioY:
    'Buscá en este sitio y en la documentación. El índice se construye con el sitio y corre en tu navegador: nada de lo que escribas sale de esta página.',
  buscarEnHorneroos: 'Buscar en HorneroOS',
  buscaTemasLayoutsComandosY: 'Buscá temas, layouts, comandos y documentación.',
  laBusquedaNecesitaJavascriptExplora: 'La búsqueda necesita JavaScript. Explorá la ',
  documentacion: 'documentación',
  enSuLugar: ' en su lugar.',
};

export type Messages = typeof es;

const en: Messages = {
  buscarHorneroos: 'Search | HorneroOS',
  buscaEnElSitioDe: 'Search the HorneroOS site and documentation.',
  buscar: 'Search',
  buscaEnEsteSitioY:
    'Searches this site and the documentation. The index is built with the site and runs in your browser: nothing you type leaves this page.',
  buscarEnHorneroos: 'Search HorneroOS',
  buscaTemasLayoutsComandosY: 'Search themes, layouts, commands, and documentation.',
  laBusquedaNecesitaJavascriptExplora: 'Search needs JavaScript. Browse the ',
  documentacion: 'documentation',
  enSuLugar: ' instead.',
};

export const messages: Record<Locale, Messages> = { es, en };
