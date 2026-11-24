// Message catalog for DesktopPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  desktopLaBaseDeHorneroos: 'Desktop: la base de HorneroOS | HorneroOS',
  horneroosDesktopConElEstado:
    'HorneroOS Desktop con el estado de cada función (layouts, temas, modos, Chromatic y PluginKit) tomado del registro del proyecto.',
  horneroosDesktopEsLaEdicion:
    'HorneroOS Desktop es la edición base: un escritorio Wayland sobre Arch con Hyprland, shell propio, layouts, temas y extensiones, pensado para trabajar horas sin estorbar.',
  edicionDesktop: 'Edición Desktop',
  laBaseDeLasTres: 'La base de las tres',
  tuEscritorioATuManera: 'Tu escritorio, a tu manera.',
  desktopEsElEscritorioSobre:
    'Desktop es el escritorio sobre el que se apoyan Studio y Gaming: shell propio sobre Quickshell, un launcher, un Dashboard, un Centro de control y un compositor Wayland. Todo lo que ves tiene un ajuste, con vista previa y vuelta atrás.',
  descargaLaIsoActual: 'Descargá la ISO actual',
  verElShowroom: 'Ver el showroom',
  elEscritorioTrabajando: 'El escritorio trabajando',
  ajustesDelEscritorio: 'Ajustes del escritorio',
  horneroosTraeValoresPorDefecto:
    'HorneroOS trae valores por defecto para el escritorio y cada ajuste de esta lista se puede cambiar. Cada palanca muestra su estado: lo lanzado, lo que está en main sin lanzar y lo experimental salen del registro del proyecto, no de este texto.',
  unDiaDeTrabajoCon: 'Un día de trabajo, con el teclado',
  losAtajosDeLaConfiguracion:
    'Los atajos de la configuración por defecto de Hyprland. Pueden variar con tu versión y tu configuración.',
  todosLosAtajos: 'Todos los atajos',
  cambiaLaFormaNoEl: 'Cambiá la forma, no el sistema',
  elSelectorDeLayoutsReordena:
    'El selector de layouts reordena barras y rieles sin tocar tus aplicaciones ni tu tema. ',
  compositores: 'Compositores',
  elegirOResolverProblemasCon: 'Elegir o resolver problemas con un compositor',
  yDespuesStudioOGaming: 'Y después, Studio o Gaming',
  studioYGamingSonDesktop: 'Studio y Gaming son Desktop con un oficio: se eligen al instalar desde la misma ISO.',
  todasLasEdiciones: 'Todas las ediciones',
  defaultCompositor: 'El compositor por defecto.',
  experimentalCompositor: 'Disponible para quien quiera probarlo; todavía experimental.',
};

export type Messages = typeof es;

const en: Messages = {
  desktopLaBaseDeHorneroos: 'Desktop: the HorneroOS base | HorneroOS',
  horneroosDesktopConElEstado:
    'HorneroOS Desktop with the status of each feature (layouts, themes, modes, Chromatic and PluginKit) taken from the project ledger.',
  horneroosDesktopEsLaEdicion:
    'HorneroOS Desktop is the base edition: a Wayland desktop on Arch with Hyprland, its own shell, layouts, themes and extensions, made for working long hours without getting in the way.',
  edicionDesktop: 'Desktop edition',
  laBaseDeLasTres: 'The base of all three',
  tuEscritorioATuManera: 'Your desktop, your way.',
  desktopEsElEscritorioSobre:
    'Desktop is the desktop that Studio and Gaming build on: its own shell on Quickshell, a launcher, a Dashboard, a Control Center and a Wayland compositor. Everything you see has a setting, with a preview and a way back.',
  descargaLaIsoActual: 'Download the current ISO',
  verElShowroom: 'See the showroom',
  elEscritorioTrabajando: 'The desktop at work',
  ajustesDelEscritorio: 'Desktop settings',
  horneroosTraeValoresPorDefecto:
    'HorneroOS ships defaults for the desktop and every setting in this list can be changed. Each lever shows its status: what is released, what is on main but unreleased and what is experimental come from the project ledger, not from this text.',
  unDiaDeTrabajoCon: 'A working day, from the keyboard',
  losAtajosDeLaConfiguracion:
    'The default Hyprland configuration’s shortcuts. They can vary with your version and configuration.',
  todosLosAtajos: 'All shortcuts',
  cambiaLaFormaNoEl: 'Change the shape, not the system',
  elSelectorDeLayoutsReordena:
    'The layout picker rearranges bars and rails without touching your applications or theme. ',
  compositores: 'Compositors',
  elegirOResolverProblemasCon: 'Choose or troubleshoot a compositor',
  yDespuesStudioOGaming: 'And then Studio or Gaming',
  studioYGamingSonDesktop:
    'Studio and Gaming are Desktop with a craft: you choose them when installing from the same ISO.',
  todasLasEdiciones: 'All editions',
  defaultCompositor: 'The default compositor.',
  experimentalCompositor: 'Available for those who want to try it; still experimental.',
};

export const messages: Record<Locale, Messages> = { es, en };
