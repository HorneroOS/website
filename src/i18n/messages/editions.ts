// Message catalog for EditionsPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  maturityLabels: { planned: 'Planificado', experimental: 'Experimental', preview: 'Preview', supported: 'Soportado' },
  copy: (layoutsCount: number, themesCount: number) => ({
    desktop: {
      channel: 'CH 01',
      tagline: 'Construí tu mundo',
      body: `La base de todas las ediciones de escritorio: Hornero Shell con ${layoutsCount} layouts y ${themesCount} temas, Centro de control, lanzador, dashboard, horneroctl y extensiones.`,
      href: '/showroom',
      link: 'Mirá el escritorio',
    },
    studio: {
      channel: 'CH 02',
      tagline: 'Hacé algo real',
      body: 'Desktop más aplicaciones y política de audio para música, video, streaming, diseño, foto y 3D, elegidas por especialización al instalar.',
      href: '/studio',
      link: 'Conocé Studio',
    },
    gaming: {
      channel: 'CH 03',
      tagline: 'Jugá a tu manera',
      body: 'Desktop más una capa de juego combinable: Steam con Proton, Gamescope, GameMode y MangoHud, todo a elección.',
      href: '/gaming',
      link: 'Conocé Gaming',
    },
    server: {
      channel: 'CH 04',
      tagline: 'Sistema sin pantalla',
      body: 'Para homelabs, máquinas virtuales y servicios autoalojados. Se opera de forma remota y no tiene sesión gráfica.',
      href: 'https://github.com/HorneroOS/hornero/tree/main/editions',
      link: 'Leé el modelo de composición',
    },
    agents: {
      channel: 'CH 05',
      tagline: 'Alojamiento de agentes',
      body: 'Basado en Server, con identidades aisladas, servicios restringidos y ciclos de vida de agentes inspeccionables.',
      href: 'https://github.com/HorneroOS/hornero/tree/main/editions',
      link: 'Leé el modelo de composición',
    },
  }),
  si: 'Sí',
  baseHorneroosYHorneroctl: 'Base HorneroOS y horneroctl',
  horneroShellYCentroDe: 'Hornero Shell y Centro de control',
  especializacionesCreativas: 'Especializaciones creativas',
  perfilesDeJuego: 'Perfiles de juego',
  seInstalaHoyDesdeLa: 'Se instala hoy desde la ISO',
  lasEdicionesDeHorneroosCon:
    'Las ediciones de HorneroOS con su madurez: Desktop, Studio y Gaming para uso diario (Supported); Server y Agents planificadas.',
  edicionesDesktopStudioYGaming: 'Ediciones: Desktop, Studio y Gaming | HorneroOS',
  horneroosEsUnaBaseCon:
    'HorneroOS es una base con ediciones para cada oficio: Desktop, Studio y Gaming para uso diario desde la misma ISO actual firmada, y Server y Agents planificadas. La madurez sale del catálogo de ediciones fijado.',
  ediciones: 'Ediciones',
  madurezDesdeElCatalogoFijado: 'Madurez desde el catálogo fijado',
  unaBaseUnOficioPor: 'Una base. Un oficio por edición.',
  desktopStudioYGamingSon:
    'Desktop, Studio y Gaming son perfiles del mismo sistema operativo, no distribuciones separadas. Se instalan desde la misma ISO firmada: elegís la edición, las especializaciones y el compositor durante la instalación.',
  descargaLaIsoActual: 'Descargá la ISO actual',
  comparaLasEdiciones: 'Compará las ediciones',
  lasEdicionesDeHorneroos: 'Las ediciones de HorneroOS',
  seBasaEn: 'Se basa en ',
  compositoresWayland: 'Compositores Wayland',
  queTraeCadaEdicion: 'Qué trae cada edición',
  composicionDeLasEdicionesSegun: 'Composición de las ediciones según el catálogo fijado de HorneroOS.',
  capacidad: 'Capacidad',
  madurez: 'Madurez',
  comoSeRelacionanLasEdiciones: 'Cómo se relacionan las ediciones',
  studioYGamingSeBasan:
    'Studio y Gaming se basan en Desktop; Agents se basa en Server. El compositor es una elección de backend de Desktop: tanto Hyprland como Niri están soportados y probados en uso diario sobre equipos físicos.',
  losEstadosDeEstaPagina:
    'Los estados de esta página vienen del catálogo de composición fijado de Hornero, el mismo modelo que usan la CLI, el instalador y las herramientas de aceptación. La ISO actual se instala mediante el camino provisorio con Calamares; el instalador a medida de Panda Foss sigue siendo el camino oficial futuro.',
};

export type Messages = typeof es;

const en: Messages = {
  maturityLabels: { planned: 'Planned', experimental: 'Experimental', preview: 'Preview', supported: 'Supported' },
  copy: (layoutsCount: number, themesCount: number) => ({
    desktop: {
      channel: 'CH 01',
      tagline: 'Build your world',
      body: `The base of every desktop edition: Hornero Shell with ${layoutsCount} layouts and ${themesCount} themes, Control Center, launcher, dashboard, horneroctl and extensions.`,
      href: '/showroom',
      link: 'See the desktop',
    },
    studio: {
      channel: 'CH 02',
      tagline: 'Make something real',
      body: 'Desktop plus applications and audio policy for music, video, streaming, design, photo and 3D, picked by specialization at install time.',
      href: '/studio',
      link: 'Explore Studio',
    },
    gaming: {
      channel: 'CH 03',
      tagline: 'Play on your terms',
      body: 'Desktop plus a composable gaming layer: Steam with Proton, Gamescope, GameMode and MangoHud, all opt-in.',
      href: '/gaming',
      link: 'Explore Gaming',
    },
    server: {
      channel: 'CH 04',
      tagline: 'Headless system',
      body: 'For homelabs, virtual machines and self-hosted services. Operated remotely, with no graphical session.',
      href: 'https://github.com/HorneroOS/hornero/tree/main/editions',
      link: 'Read the composition model',
    },
    agents: {
      channel: 'CH 05',
      tagline: 'Agent hosting',
      body: 'Built on Server, with isolated identities, constrained services and inspectable agent lifecycles.',
      href: 'https://github.com/HorneroOS/hornero/tree/main/editions',
      link: 'Read the composition model',
    },
  }),
  si: 'Yes',
  baseHorneroosYHorneroctl: 'HorneroOS base and horneroctl',
  horneroShellYCentroDe: 'Hornero Shell and Control Center',
  especializacionesCreativas: 'Creative specializations',
  perfilesDeJuego: 'Gaming profiles',
  seInstalaHoyDesdeLa: 'Installs today from the ISO',
  lasEdicionesDeHorneroosCon:
    'The HorneroOS editions with their maturity: Desktop, Studio and Gaming for everyday use (Supported); Server and Agents planned.',
  edicionesDesktopStudioYGaming: 'Editions: Desktop, Studio and Gaming | HorneroOS',
  horneroosEsUnaBaseCon:
    'HorneroOS is one base with editions for each craft: Desktop, Studio and Gaming for everyday use from the same signed current ISO, plus Server and Agents planned. Maturity comes from the pinned edition catalogue.',
  ediciones: 'Editions',
  madurezDesdeElCatalogoFijado: 'Maturity from the pinned catalogue',
  unaBaseUnOficioPor: 'One base. One craft per edition.',
  desktopStudioYGamingSon:
    'Desktop, Studio and Gaming are profiles of the same operating system, not separate distributions. They install from the same signed ISO: you pick the edition, the specializations and the compositor during installation.',
  descargaLaIsoActual: 'Download the current ISO',
  comparaLasEdiciones: 'Compare the editions',
  lasEdicionesDeHorneroos: 'The HorneroOS editions',
  seBasaEn: 'Builds on ',
  compositoresWayland: 'Wayland compositors',
  queTraeCadaEdicion: 'What each edition includes',
  composicionDeLasEdicionesSegun: 'Edition composition from the pinned HorneroOS catalogue.',
  capacidad: 'Capability',
  madurez: 'Maturity',
  comoSeRelacionanLasEdiciones: 'How the editions relate',
  studioYGamingSeBasan:
    'Studio and Gaming build on Desktop; Agents builds on Server. The compositor is a Desktop backend choice: both Hyprland and Niri are supported and daily-driven on physical hardware.',
  losEstadosDeEstaPagina:
    'The states on this page come from the pinned Hornero composition catalogue, the same model used by the CLI, the installer and acceptance tooling. The current ISO installs via the provisional Calamares path; Panda Foss’s custom installer remains the future official path.',
};

export const messages: Record<Locale, Messages> = { es, en };
