// Message catalog for LayoutsPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  styleNames: {
    attached: 'barra al borde',
    floating: 'barra flotante',
    dock: 'dock',
    islands: 'islas',
    inset: 'barra encajada',
  },
  layoutsHorneroos: 'Layouts | HorneroOS',
  layoutsDeLaShellDe: (v0: string | number | null | undefined): string =>
    `${v0} layouts de la shell de Hornero, cada uno con su captura real del escritorio: rieles laterales, barras de a dos, barras transparentes, islas y docks.`,
  poneLaShellSobreUn:
    'Poné la shell sobre un borde, en un par de barras, como islas flotantes o abajo de todo en la pantalla. El lanzador, las notificaciones y los ajustes son los mismos en todos.',
  miraComoAnda: 'Mirá cómo anda',
  cambiaDesdeElSelectorDe: 'Cambiá desde el selector de layouts con ',
  layoutsDestacadosEnElEscritorio: 'Layouts destacados en el escritorio en uso',
  detallesDelLayout: 'Detalles del layout',
  losLayouts: (v0: string | number | null | undefined): string => `Los ${v0} layouts`,
  todosLosLayoutsSalenDe:
    'Todos los layouts salen de la misma shell. Los mapitas muestran dónde van las barras; cada layout tiene su topología y el nombre de preset que podés usar en scripts.',
  superficie: 'superficie',
  superficies: 'superficies',
  verComoSeOrdena: 'Ver cómo se ordena',
  transparente: ' · transparente',
  sinModulos: 'Sin módulos',
  selected: [
    {
      id: 'hornero-left',
      slot: 'CAP-LAYOUT-01',
      text: 'Un riel lateral con los controles principales a mano y el área de trabajo libre.',
    },
    {
      id: 'cockpit-clear',
      slot: 'CAP-LAYOUT-02',
      text: 'Una línea de borde a borde sin fondo, para que se vea el fondo de pantalla.',
    },
    {
      id: 'studio',
      slot: 'CAP-LAYOUT-12',
      text: 'Una barra superior con un visualizador de audio a todo lo ancho abajo.',
    },
    { id: 'minimal-float', slot: 'CAP-LAYOUT-11', text: 'Una sola píldora flotante, separada de los bordes.' },
    { id: 'islands', slot: 'CAP-LAYOUT-04', text: 'Islas flotantes separadas que agrupan los controles.' },
    { id: 'dock-bottom', slot: 'CAP-LAYOUT-05', text: 'Un dock sobre el borde inferior.' },
  ],
};

export type Messages = typeof es;

const en: Messages = {
  styleNames: { attached: 'edge bar', floating: 'floating bar', dock: 'dock', islands: 'islands', inset: 'inset bar' },
  layoutsHorneroos: 'Layouts | HorneroOS',
  layoutsDeLaShellDe: (v0: string | number | null | undefined): string =>
    `${v0} Hornero shell layouts, each with its real desktop capture: side rails, paired bars, clear bars, islands and docks.`,
  poneLaShellSobreUn:
    'Put the shell along an edge, in a pair of bars, as floating islands or at the bottom of the screen. The launcher, notifications and settings are shared by all of them.',
  miraComoAnda: 'See it running',
  cambiaDesdeElSelectorDe: 'Switch from the Layout Picker with ',
  layoutsDestacadosEnElEscritorio: 'Selected layouts in the running desktop',
  detallesDelLayout: 'Layout details',
  losLayouts: (v0: string | number | null | undefined): string => `All ${v0} layouts`,
  todosLosLayoutsSalenDe:
    'Every layout comes from the same shell. The small maps show bar placement; each layout page has its topology and scriptable preset name.',
  superficie: 'surface',
  superficies: 'surfaces',
  verComoSeOrdena: 'See arrangement',
  transparente: ' · transparent',
  sinModulos: 'No modules',
  selected: [
    {
      id: 'hornero-left',
      slot: 'CAP-LAYOUT-01',
      text: 'A side rail with the main controls close by and the workspace left open.',
    },
    {
      id: 'cockpit-clear',
      slot: 'CAP-LAYOUT-02',
      text: 'A full-width line with no backdrop, so the wallpaper shows through.',
    },
    {
      id: 'studio',
      slot: 'CAP-LAYOUT-12',
      text: 'A top bar with a full-width audio visualiser along the bottom.',
    },
    {
      id: 'minimal-float',
      slot: 'CAP-LAYOUT-11',
      text: 'A single floating pill, inset from the edges.',
    },
    {
      id: 'islands',
      slot: 'CAP-LAYOUT-04',
      text: 'Separate floating islands group the controls.',
    },
    {
      id: 'dock-bottom',
      slot: 'CAP-LAYOUT-05',
      text: 'A dock along the bottom edge.',
    },
  ],
};

export const messages: Record<Locale, Messages> = { es, en };
