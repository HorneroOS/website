// Message catalog for WhyHorneroosPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  edicionesPorOficio: 'Ediciones por oficio',
  horneroosSeComponeAlInstalar:
    'HorneroOS se compone al instalar: Desktop para el trabajo diario, Studio para crear y Gaming para jugar, sobre la misma base y la misma ISO. Server y Agents están planificadas y todavía no tienen imagen.',
  verLasEdiciones: 'Ver las ediciones',
  horneroSignalModosYChromatic: 'Hornero Signal, modos y Chromatic opcional',
  elEscritorioTieneUnLenguaje:
    'El escritorio tiene un lenguaje visual propio (Signal Night y Day), cinco modos que cambian cómo se comporta sin tocar tu layout ni tu tema, y color dinámico opcional desde el fondo de pantalla. La idea del color dinámico viene de Caelestia (GPL-3.0) y la implementación es nueva; la página de Chromatic lo documenta.',
  verLosModos: 'Ver los modos',
  ajustesEnElCentroDe: 'Ajustes en el Centro de control',
  layoutsTemasExtensionesYEl:
    'Layouts, temas, extensiones y el companion se ajustan desde el Centro de control y desde horneroctl, con el estado de cada cosa salido del registro del proyecto. Cambiar archivos a mano sigue siendo posible, pero no hace falta para los ajustes del escritorio.',
  verElDesktop: 'Ver el Desktop',
  espanolRioplatenseEIngles: 'Español rioplatense e inglés',
  esteSitioSeEscribePrimero:
    'Este sitio se escribe primero en español rioplatense y después en inglés. La documentación técnica de /docs/ se escribe en inglés en HorneroOS/docs; las páginas en español lo avisan en vez de esconderlo.',
  leerLaDocumentacion: 'Leer la documentación',
  tarjetaDeHorneroosPorQue:
    'Tarjeta de HorneroOS: por qué HorneroOS, con el estado de sus ediciones desde el catálogo fijado.',
  porQueHorneroosHorneroos: 'Por qué HorneroOS | HorneroOS',
  queHaceHorneroosEnQue:
    'Qué hace HorneroOS, en qué estado está, cómo se compara con otros sistemas operativos y shells, y las preguntas frecuentes, con fuentes y fecha de verificación.',
  porQueHorneroos: 'Por qué HorneroOS',
  usoDiario: 'Uso diario',
  horneroosEsUnSistemaOperativo:
    'HorneroOS es un sistema operativo basado en Arch que se compone por oficio (Desktop, Studio y Gaming), con una shell propia adaptada de Caelestia Shell y ajustes en el Centro de control. Es un sistema para uso diario: esta página dice qué hace hoy, qué limitaciones concretas tiene y en qué se diferencia de otros proyectos, sin cifras de rendimiento ni testimonios.',
  descargaLaIsoActual: 'Descargá la ISO actual',
  comparaLasEdiciones: 'Compará las ediciones',
  queHaceHorneroos: 'Qué hace HorneroOS',
  comparacionSistemasOperativosYShells: 'Comparación: sistemas operativos y shells',
  losProyectosDeEstaTabla:
    'Los proyectos de esta tabla no son todos la misma clase de cosa. Omarchy, CachyOS y Ryoku son sistemas operativos; Caelestia Shell y Dux Modular Shell son shells de escritorio que corren sobre un sistema ya instalado. Cada fila enlaza a su fuente primaria.',
  limitesYEstado: 'Límites y estado',
  laIsoActualEsLa:
    'La versión actual es la 0.2.0-preview42 tanto para la ISO instalable firmada (3.3 GB) como para el QCOW2 Desktop preinstalado (2.6 GB) y los paquetes AUR, probados en uso diario sobre al menos 3 computadoras físicas y en KVM. Desktop, Studio, Gaming, Hyprland y Niri están soportados; LUKS y BIOS heredado no están validados en la ISO actual y el rollback de SO sigue planificado.',
  elSitioMuestraUnaSeleccion: (v0: string | number | null | undefined): string =>
    `El sitio muestra una selección curada de ${v0} capturas tomadas de un host real; el resto del archivo queda guardado sin mostrarse.`,
  verElShowroom: 'Ver el showroom',
  horneroosNoPublicaBenchmarksLas:
    'HorneroOS no publica benchmarks. Las afirmaciones de rendimiento de otros proyectos se atribuyen a su fuente y no se comparan acá.',
  elRollbackDelSistemaEsta:
    'El rollback del sistema está planificado en el registro del proyecto; no se anuncia como una capacidad actual.',
  preguntasFrecuentes: 'Preguntas frecuentes',
};

export type Messages = typeof es;

const en: Messages = {
  edicionesPorOficio: 'Editions by craft',
  horneroosSeComponeAlInstalar:
    'HorneroOS is composed at install time: Desktop for daily work, Studio for creating and Gaming for playing, on the same base and the same ISO. Server and Agents are planned and have no image yet.',
  verLasEdiciones: 'See the editions',
  horneroSignalModosYChromatic: 'Hornero Signal, modes and optional Chromatic',
  elEscritorioTieneUnLenguaje:
    'The desktop has a visual language of its own (Signal Night and Day), five modes that change how it behaves without touching your layout or theme, and optional dynamic colour from the wallpaper. The dynamic-colour idea comes from Caelestia (GPL-3.0) and the implementation is new; the Chromatic page documents it.',
  verLosModos: 'See the modes',
  ajustesEnElCentroDe: 'Settings in the Control Center',
  layoutsTemasExtensionesYEl:
    'Layouts, themes, extensions and the companion are adjusted from the Control Center and from horneroctl, with each status taken from the project ledger. Editing files by hand stays possible, but the desktop settings do not require it.',
  verElDesktop: 'See the Desktop',
  espanolRioplatenseEIngles: 'Rioplatense Spanish and English',
  esteSitioSeEscribePrimero:
    'This site is written in Rioplatense Spanish first and English second. The technical documentation under /docs/ is written in English in HorneroOS/docs; the Spanish pages say so instead of hiding it.',
  leerLaDocumentacion: 'Read the documentation',
  tarjetaDeHorneroosPorQue: 'HorneroOS card: why HorneroOS, with the status of its editions from the pinned catalogue.',
  porQueHorneroosHorneroos: 'Why HorneroOS | HorneroOS',
  queHaceHorneroosEnQue:
    'What HorneroOS does, what state it is in, how it compares with other operating systems and shells, and frequently asked questions, with sources and a verification date.',
  porQueHorneroos: 'Why HorneroOS',
  usoDiario: 'Everyday use',
  horneroosEsUnSistemaOperativo:
    'HorneroOS is an Arch-based operating system composed by craft (Desktop, Studio and Gaming), with a shell of its own adapted from Caelestia Shell and settings in the Control Center. It is an everyday-use system: this page says what it does today, which concrete limitations it has and how it differs from other projects, with no performance figures and no testimonials.',
  descargaLaIsoActual: 'Download the current ISO',
  comparaLasEdiciones: 'Compare the editions',
  queHaceHorneroos: 'What HorneroOS does',
  comparacionSistemasOperativosYShells: 'Comparison: operating systems and shells',
  losProyectosDeEstaTabla:
    'The projects in this table are not all the same kind of thing. Omarchy, CachyOS and Ryoku are operating systems; Caelestia Shell and Dux Modular Shell are desktop shells that run on an already installed system. Every row links to its primary source.',
  limitesYEstado: 'Limits and status',
  laIsoActualEsLa:
    'The current release is 0.2.0-preview42 across the signed installable ISO (3.3 GB), the signed preinstalled Desktop QCOW2 (2.6 GB), and AUR packages, daily-driven and tested on 3+ physical computers and in KVM. Desktop, Studio, Gaming, Hyprland, and Niri are supported; LUKS and legacy BIOS are not validated on the current ISO and OS rollback is still planned.',
  elSitioMuestraUnaSeleccion: (v0: string | number | null | undefined): string =>
    `The site shows a curated selection of ${v0} captures taken on a real host; the rest of the archive stays kept, unshown.`,
  verElShowroom: 'See the showroom',
  horneroosNoPublicaBenchmarksLas:
    'HorneroOS publishes no benchmarks. Other projects’ performance claims are attributed to their source and are not compared here.',
  elRollbackDelSistemaEsta:
    'System rollback is planned in the project ledger; it is not announced as a current capability.',
  preguntasFrecuentes: 'Frequently asked questions',
};

export const messages: Record<Locale, Messages> = { es, en };
