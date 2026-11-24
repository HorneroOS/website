// Message catalog for ModesPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  losCincoModosDeHorneroos:
    'Los cinco modos de HorneroOS (Focus, Everyday, Signal, Gaming y Studio) listados como canales, con su estado en el registro del proyecto.',
  atmosferasModosDeExperienciaHorneroos: 'Atmósferas: modos de experiencia | HorneroOS',
  focusEverydaySignalGamingY:
    'Focus, Everyday, Signal, Gaming y Studio: cinco modos que cambian cómo se comporta el escritorio de HorneroOS sin tocar tu layout ni tu tema.',
  atmosferas: 'Atmósferas',
  modosDeExperiencia: 'Modos de experiencia',
  unEscritorioCincoClimas: 'Un escritorio, cinco climas.',
  unModoCambiaComoSe:
    'Un modo cambia cómo se comporta el escritorio ahora mismo: cuánto se mueve, qué tan densa es la barra, qué widgets hay y si las notificaciones te interrumpen. Nunca reemplaza tu layout ni tu tema.',
  losCincoModos: 'Los cinco modos',
  cadaEsquemaDibujaLosCampos:
    'Cada esquema dibuja los campos del modo (movimiento, barra, escritorio) tal como los documenta el proyecto. Son dibujos, no capturas: debajo van las capturas reales de cada modo.',
  layoutPreferido: 'Layout preferido',
  movimiento: 'Movimiento',
  barra: 'Barra',
  escritorio: 'Escritorio',
  comoSeCombinan: 'Cómo se combinan',
  cuatroEleccionesIndependientes: 'Cuatro elecciones independientes',
  eleccion: 'Elección',
  queDecide: 'Qué decide',
  dondeSeCambia: 'Dónde se cambia',
  edicion: 'Edición',
  queSoftwareYCapacidadesHay: 'Qué software y capacidades hay instalados',
  laInstalacion: 'La instalación',
  modoDeExperiencia: 'Modo de experiencia',
  comoSeComportaElSistema: 'Cómo se comporta el sistema ahora',
  ajustesExperienciaLauncherIndicadorDe: 'Ajustes → Experiencia, launcher, indicador de la barra',
  queBarrasYRielesExisten: 'Qué barras y rieles existen',
  selectorDeLayouts: 'Selector de layouts',
  tema: 'Tema',
  coloresYFondo: 'Colores y fondo',
  apariencia: 'Apariencia',
  unModoSoloActivaCapacidades:
    'Un modo solo activa capacidades que tu edición tiene instaladas: si falta una, el ajuste aparece como no disponible, nunca simulado. Cada modo nombra un layout preferido, pero cambiar de modo no reescribe tus barras salvo que actives “Aplicar el layout preferido al cambiar”. Dos reglas no se pueden anular: el brillo y las líneas de barrido siempre están apagados en Focus y Gaming, y Gaming nunca anima.',
  losCincoModosEnUn: 'Los cinco modos, en un escritorio real',
  capturasRealesDelMismoHost:
    'Capturas reales del mismo host: el selector de los cinco modos, Focus y el deck Signal. Los esquemas de arriba están rotulados como esquemas; esto de abajo es el escritorio tal cual.',
  cadaModoEsUnPaquete: 'Cada modo es un paquete de campos que podés inspeccionar y cambiar uno por uno.',
  leeLaDocumentacionDeLos: 'Leé la documentación de los modos',
};

export type Messages = typeof es;

const en: Messages = {
  losCincoModosDeHorneroos:
    'The five HorneroOS modes (Focus, Everyday, Signal, Gaming and Studio) listed as channels, with their status in the project ledger.',
  atmosferasModosDeExperienciaHorneroos: 'Atmospheres: experience modes | HorneroOS',
  focusEverydaySignalGamingY:
    'Focus, Everyday, Signal, Gaming and Studio: five modes that change how the HorneroOS desktop behaves without touching your layout or theme.',
  atmosferas: 'Atmospheres',
  modosDeExperiencia: 'Experience modes',
  unEscritorioCincoClimas: 'One desktop, five atmospheres.',
  unModoCambiaComoSe:
    'A mode changes how the desktop behaves right now: how much it moves, how dense the bar is, which widgets sit on the desktop and whether notifications interrupt you. It never replaces your layout or your theme.',
  losCincoModos: 'The five modes',
  cadaEsquemaDibujaLosCampos:
    'Each schematic draws the mode’s fields (motion, bar, desktop) as the project documents them. They are drawings, not screenshots: real captures of each mode follow below.',
  layoutPreferido: 'Preferred layout',
  movimiento: 'Motion',
  barra: 'Bar',
  escritorio: 'Desktop',
  comoSeCombinan: 'How they compose',
  cuatroEleccionesIndependientes: 'Four independent choices',
  eleccion: 'Choice',
  queDecide: 'What it decides',
  dondeSeCambia: 'Where you change it',
  edicion: 'Edition',
  queSoftwareYCapacidadesHay: 'Which software and capabilities are installed',
  laInstalacion: 'Installation',
  modoDeExperiencia: 'Experience mode',
  comoSeComportaElSistema: 'How the system behaves right now',
  ajustesExperienciaLauncherIndicadorDe: 'Settings → Experience, launcher, bar indicator',
  queBarrasYRielesExisten: 'Which bars and rails exist',
  selectorDeLayouts: 'Layout picker',
  tema: 'Theme',
  coloresYFondo: 'Colours and wallpaper',
  apariencia: 'Appearance',
  unModoSoloActivaCapacidades:
    'A mode only switches on capabilities your edition has installed: a missing one shows as unavailable, never faked. Every mode names a preferred layout, but switching mode does not rewrite your bars unless you turn on “Apply preferred layout on switch”. Two guardrails cannot be overridden: glow and scanlines are always off in Focus and Gaming, and Gaming never animates.',
  losCincoModosEnUn: 'The five modes on a real desktop',
  capturasRealesDelMismoHost:
    'Real captures from the same host: the five-mode switcher, Focus and the Signal deck. The diagrams above are labelled as diagrams; below is the desktop as it is.',
  cadaModoEsUnPaquete: 'Each mode is a bundle of fields you can inspect and change one by one.',
  leeLaDocumentacionDeLos: 'Read the modes documentation',
};

export const messages: Record<Locale, Messages> = { es, en };
