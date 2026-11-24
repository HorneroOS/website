// Message catalog for IndexPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  plannedPlanificadoExperimentalExperimentalPrevie: {
    planned: 'Planificado',
    experimental: 'Experimental',
    preview: 'Preview',
    supported: 'Soportado',
  },
  usoDiario: 'Uso diario',
  construiTuMundo: 'Construí tu mundo',
  laBaseDeTodasLas: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
  ): string =>
    `La base de todas las ediciones: Hyprland por defecto (Niri ${v0}), Hornero Shell con ${v1} layouts y ${v2} temas, un Centro de control propio y horneroctl.`,
  workflows: (layoutsCount: number, pluginsCount: number) => [
    { lead: 'Programá', text: 'en kitty, con yazi y btop, en espacios de trabajo por proyecto.' },
    { lead: 'Ordená', text: `el escritorio con uno de ${layoutsCount} layouts, desde el selector o con horneroctl.` },
    { lead: 'Extendé', text: `la shell con ${pluginsCount} extensiones oficiales que declaran sus permisos.` },
  ],
  haceAlgoReal: 'Hacé algo real',
  jugaATuManera: 'Jugá a tu manera',
  desktopMasUnaCapaDe:
    'Desktop más una capa de juego combinable: Mesa y Vulkan, GameMode, Gamescope y MangoHud. Steam es propietario y se instala solo si lo elegís; nada se instala en silencio.',
  seleccionPorDefecto: ' · selección por defecto',
  version: 'Versión',
  ediciones: 'Ediciones',
  paraUsoDiarioPlanificadas: (v0: string | number | null | undefined, v1: string | number | null | undefined): string =>
    `${v0} para uso diario · ${v1} planificadas`,
  compositor: 'Compositor',
  unaHerramientaDeSistemaPara:
    'Una herramienta de sistema para el escritorio, los temas, los paquetes y el diagnóstico. Salida --json para scripts; todo cambio muestra un --dry-run antes de pedir --yes.',
  actualizaciones: 'Actualizaciones',
  lasConsultasDeActualizacionSolo:
    'Las consultas de actualización solo miran: listan repositorios y AUR por separado y no instalan nada. Actualizar el sistema es un paso explícito.',
  configuracion: 'Configuración',
  elCentroDeControlY:
    'El Centro de control y la CLI cambian la misma configuración. Lo que instala un paquete es de solo lectura; tus cambios viven en tu usuario y las actualizaciones no los pisan.',
  confiabilidad: 'Confiabilidad',
  cadaVersionFijaLosCommits:
    'Cada versión fija los commits exactos de la shell y la configuración, la ISO llega firmada con su checksum, y un laboratorio de QA instala en máquinas virtuales desechables antes de publicar.',
  journey: (isoVersion: string) => [
    { title: 'Descargá', text: `La ISO ${isoVersion} para x86_64 trae Desktop, Studio y Gaming en una sola imagen.` },
    {
      title: 'Verificá',
      text: 'Compará el checksum SHA-256 y la firma GPG publicados en la release antes de grabarla.',
    },
    { title: 'Instalá', text: 'Elegí la edición, las especializaciones y el compositor durante la instalación.' },
  ],
  horneroosUnaEstacionDeTrabajo: 'HorneroOS | Una estación de trabajo basada en Arch para construir, crear y jugar',
  horneroosEsUnaEstacionDe: (v0: string | number | null | undefined): string =>
    `HorneroOS es una estación de trabajo basada en Arch para construir, crear y jugar: ediciones Desktop, Studio y Gaming, Hornero Shell y horneroctl, en una ISO firmada (${v0}).`,
  unaEstacionDeTrabajoPara: 'Una estación de trabajo para construir, crear y jugar.',
  horneroosEsUnSistemaOperativo:
    'HorneroOS es un sistema operativo basado en Arch: tres ediciones, una herramienta de sistema (horneroctl) y Hornero Shell para el escritorio.',
  descargaLaIsoActual: 'Descargá la ISO actual',
  elegiTuEdicion: 'Elegí tu edición',
  estadoActualDesdeLosDatos: 'Estado actual, desde los datos de producto fijados',
  elEscritorioTrabajando: 'El escritorio trabajando',
  todasLasCapturasSeleccionadas: 'Todas las capturas seleccionadas',
  unaBaseTresOficios: 'Una base, tres oficios',
  elegiParaQueEsTu: 'Elegí para qué es tu computadora.',
  lasTresEdicionesCompartenBase:
    'Las tres ediciones comparten base, shell y herramientas, y se arman al instalar desde la misma ISO. La madurez sale del catálogo de ediciones fijado, no de este texto.',
  flujosDeTrabajo: 'Flujos de trabajo',
  conoce: (v0: string | number | null | undefined): string => `Conocé ${v0}`,
  comparaTodasLasEdiciones: 'Compará todas las ediciones',
  sistema: 'Sistema',
  debajoDelEscritorio: 'Debajo del escritorio',
  elSistemaOperativo: 'El sistema operativo',
  loQueHaceConfiableA:
    'Lo que hace confiable a una estación de trabajo pasa lejos de los colores: cómo se configura, cómo se actualiza y qué se verifica antes de publicar.',
  leeLaGuiaDeHorneroctl: 'Leé la guía de horneroctl',
  comoSeEntreganLosPaquetes: 'Cómo se entregan los paquetes',
  experiencia: 'Experiencia',
  unEscritorioPropioQueSe: 'Un escritorio propio, que se adapta a vos.',
  horneroShellEsLaCapa: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
  ): string =>
    `Hornero Shell es la capa visible: ${v0} layouts, ${v1} temas, ${v2} extensiones oficiales y el Companion, un hornero que vive en tu escritorio. Hornero Left y Hornero Right se inspiran en el layout de Caelestia Shell, de donde se adaptó la shell, con crédito y licencia.`,
  laDireccionSignalBezelTal: 'La dirección Signal Bezel, tal como se ve en un escritorio real. ',
  leeElLenguajeVisualSignal: 'Leé el lenguaje visual Signal',
  layouts: 'Layouts',
  temas: 'Temas',
  extensionesOficiales: 'Extensiones oficiales',
  atmosferasModosDeExperiencia: 'Atmósferas: modos de experiencia',
  cincoModosQueCambianComo:
    'Cinco modos que cambian cómo se comporta el escritorio ahora mismo, sin tocar tu layout ni tu tema. Los activás vos; nada cambia solo.',
  conoceLasCincoAtmosferas: 'Conocé las cinco atmósferas',
  javiElHorneroDelEscritorio: 'Javi, el hornero del escritorio, saludando.',
  javiElHorneroDelEscritorio2: 'Javi, el hornero del escritorio',
  extensionesYPluginkit: 'Extensiones y PluginKit',
  instalacion: 'Instalación',
  deLaDescargaAlPrimer: 'De la descarga al primer arranque.',
  leeLaGuiaDeInicio: 'Leé la guía de inicio',
  codigoAbierto: 'Código abierto',
  evidenciaEHistoria: 'Evidencia e historia',
  deDotfilesAHorneroosEn: 'De dotfiles a HorneroOS, en público.',
  horneroEmpezoEn2018Como:
    'Hornero empezó en 2018 como el escritorio diario de una persona, se publicó como dotfiles en 2019 y hoy son proyectos separados con su propio instalador, QA y documentación. Cada paso después del primero enlaza al commit o tag que lo fecha.',
  lineaDeTiempoDeHorneroos: 'Línea de tiempo de HorneroOS, 2018 a 2026',
  evidencia: 'Evidencia',
  elSitioMuestraUnaSeleccion: (v0: string | number | null | undefined): string =>
    `El sitio muestra una selección curada de ${v0} capturas de un host real, cada una con su fuente; el `,
  showroom: 'showroom',
  muestraLaSeleccionCompleta: ' muestra la selección completa',
  losDatosDeProductoSalen: '. Los datos de producto salen de shell ',
  yConfig: ' y config ',
  usoDiario2: 'Uso diario',
  segunCuentaSuMaintainerSu:
    'Según cuenta su maintainer, su computadora de todos los días corre HorneroOS: una ASUS ROG Strix G16 y una Lenovo Legion con Studio, y un desktop AMD Ryzen 9 con RTX 3060. Es el relato del maintainer, no una medición.',
  personas: 'Personas',
  mantieneElProyecto: ' mantiene el proyecto; ',
  mantenedorDe: ', mantenedor de ',
  desarrollaElInstaladorLaShell: ', desarrolla el instalador. La shell se adaptó de ',
  su: '; su ',
  creditoYLicencia: 'crédito y licencia',
  quedanEnElRepositorio: ' quedan en el repositorio.',
  leeLaHistoriaCompleta: 'Leé la historia completa',
  exploraElCodigoFuente: 'Explorá el código fuente',
  contribui: 'Contribuí',
  preguntasFrecuentes: 'Preguntas frecuentes',
  todasLasPreguntasLaComparacion: 'Todas las preguntas, la comparación y los límites están en Por qué HorneroOS',
  studioSummary: (count: number, audioDefault: string, audioOptIn: string[]): string =>
    `Desktop más ${count} especializaciones creativas que elegís al instalar. Audio en modo ${audioDefault} por defecto; ${audioOptIn.join(' y ')} solo si los activás.`,
  plannedNote: (names: string[]): string =>
    `${names.join(' y ')} están planificadas: todavía no tienen imagen instalable.`,
  limitsNote: (candidateVersion: string | null | undefined): string =>
    `Es un sistema para uso diario, con limitaciones concretas y declaradas: LUKS, BIOS heredado y Niri no están validados en la ISO actual y el rollback de SO sigue planificado${candidateVersion ? `; ${candidateVersion} se está preparando` : ''}. Si ya usás Arch, el escritorio también se instala como paquetes.`,
};

export type Messages = typeof es;

const en: Messages = {
  plannedPlanificadoExperimentalExperimentalPrevie: {
    planned: 'Planned',
    experimental: 'Experimental',
    preview: 'Preview',
    supported: 'Supported',
  },
  usoDiario: 'Everyday use',
  construiTuMundo: 'Build your world',
  laBaseDeTodasLas: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
  ): string =>
    `The base of every edition: Hyprland by default (Niri ${v0}), Hornero Shell with ${v1} layouts and ${v2} themes, its own Control Center and horneroctl.`,
  workflows: (layoutsCount: number, pluginsCount: number) => [
    { lead: 'Code', text: 'in kitty, with yazi and btop, in a workspace per project.' },
    { lead: 'Arrange', text: `the desktop with one of ${layoutsCount} layouts, from the picker or with horneroctl.` },
    { lead: 'Extend', text: `the shell with ${pluginsCount} official extensions that declare their permissions.` },
  ],
  haceAlgoReal: 'Make something real',
  jugaATuManera: 'Play on your terms',
  desktopMasUnaCapaDe:
    'Desktop plus a composable gaming layer: Mesa and Vulkan, GameMode, Gamescope and MangoHud. Steam is proprietary and installs only if you choose it; nothing installs silently.',
  seleccionPorDefecto: ' · default selection',
  version: 'Release',
  ediciones: 'Editions',
  paraUsoDiarioPlanificadas: (v0: string | number | null | undefined, v1: string | number | null | undefined): string =>
    `${v0} for everyday use · ${v1} planned`,
  compositor: 'Compositor',
  unaHerramientaDeSistemaPara:
    'One system tool for the desktop, themes, packages and diagnostics. --json output for scripts; every change shows a --dry-run before it asks for --yes.',
  actualizaciones: 'Updates',
  lasConsultasDeActualizacionSolo:
    'Update checks only look: they list repository and AUR packages separately and install nothing. Upgrading the system is an explicit step.',
  configuracion: 'Configuration',
  elCentroDeControlY:
    'Control Center and the CLI change the same configuration. Package-shipped defaults are read-only; your changes live in your user configuration and updates do not overwrite them.',
  confiabilidad: 'Reliability',
  cadaVersionFijaLosCommits:
    'Every release pins the exact shell and configuration commits, the ISO ships signed with its checksum, and a QA lab installs into disposable virtual machines before anything is published.',
  journey: (isoVersion: string) => [
    { title: 'Download', text: `The ${isoVersion} x86_64 ISO carries Desktop, Studio and Gaming in one image.` },
    {
      title: 'Verify',
      text: 'Check the SHA-256 checksum and GPG signature published on the release before you write it.',
    },
    { title: 'Install', text: 'Pick the edition, the specializations and the compositor during installation.' },
  ],
  horneroosUnaEstacionDeTrabajo: 'HorneroOS | An Arch-based workstation for building, creating and playing',
  horneroosEsUnaEstacionDe: (v0: string | number | null | undefined): string =>
    `HorneroOS is an Arch-based workstation for building, creating and playing: Desktop, Studio and Gaming editions, Hornero Shell and horneroctl, on one signed ISO (${v0}).`,
  unaEstacionDeTrabajoPara: 'A workstation for building, creating and playing.',
  horneroosEsUnSistemaOperativo:
    'HorneroOS is an Arch-based operating system: three editions, one system tool (horneroctl) and Hornero Shell for the desktop.',
  descargaLaIsoActual: 'Download the current ISO',
  elegiTuEdicion: 'Choose your edition',
  estadoActualDesdeLosDatos: 'Current status, from the pinned product data',
  elEscritorioTrabajando: 'The desktop at work',
  todasLasCapturasSeleccionadas: 'Every selected capture',
  unaBaseTresOficios: 'One base, three crafts',
  elegiParaQueEsTu: 'Choose what your computer is for.',
  lasTresEdicionesCompartenBase:
    'All three editions share the base, the shell and the tools, and are composed at install time from the same ISO. Maturity comes from the pinned edition catalogue, not from this copy.',
  flujosDeTrabajo: 'Workflows',
  conoce: (v0: string | number | null | undefined): string => `Explore ${v0}`,
  comparaTodasLasEdiciones: 'Compare every edition',
  sistema: 'System',
  debajoDelEscritorio: 'Beneath the desktop',
  elSistemaOperativo: 'The operating system',
  loQueHaceConfiableA:
    'What makes a workstation dependable happens far from its colours: how it is configured, how it updates and what is verified before anything ships.',
  leeLaGuiaDeHorneroctl: 'Read the horneroctl guide',
  comoSeEntreganLosPaquetes: 'How packages are delivered',
  experiencia: 'Experience',
  unEscritorioPropioQueSe: 'A desktop of its own, shaped around you.',
  horneroShellEsLaCapa: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
  ): string =>
    `Hornero Shell is the visible layer: ${v0} layouts, ${v1} themes, ${v2} official extensions and the Companion, a hornero that lives on your desktop. The shell was adapted from Caelestia Shell (GPL-3.0); Hornero Left and Hornero Right follow its layout, with the upstream credit and licence kept in the repository.`,
  laDireccionSignalBezelTal: 'The Signal Bezel direction as it looks on a real desktop. ',
  leeElLenguajeVisualSignal: 'Read the Signal visual language',
  layouts: 'Layouts',
  temas: 'Themes',
  extensionesOficiales: 'Official extensions',
  atmosferasModosDeExperiencia: 'Atmospheres: experience modes',
  cincoModosQueCambianComo:
    'Five modes that change how the desktop behaves right now, without touching your layout or theme. You switch them; nothing changes on its own.',
  conoceLasCincoAtmosferas: 'Meet the five atmospheres',
  javiElHorneroDelEscritorio: 'Javi, the desktop hornero, waving hello.',
  javiElHorneroDelEscritorio2: 'Javi, the desktop hornero',
  extensionesYPluginkit: 'Extensions and PluginKit',
  instalacion: 'Install',
  deLaDescargaAlPrimer: 'From download to first boot.',
  leeLaGuiaDeInicio: 'Read the getting-started guide',
  codigoAbierto: 'Open source',
  evidenciaEHistoria: 'Evidence and history',
  deDotfilesAHorneroosEn: 'From dotfiles to HorneroOS, in public.',
  horneroEmpezoEn2018Como:
    'Hornero began in 2018 as one person’s daily desktop, went public as dotfiles in 2019 and is now separate projects with their own installer, QA and documentation. Every step after the first links to the commit or tag that dates it.',
  lineaDeTiempoDeHorneroos: 'HorneroOS timeline, 2018 to 2026',
  evidencia: 'Evidence',
  elSitioMuestraUnaSeleccion: (v0: string | number | null | undefined): string =>
    `The site shows a curated selection of ${v0} captures from a real host, each listing its source; the `,
  showroom: 'showroom',
  muestraLaSeleccionCompleta: ' shows the full selection',
  losDatosDeProductoSalen: '. Product data comes from shell ',
  yConfig: ' and config ',
  usoDiario2: 'Daily use',
  segunCuentaSuMaintainerSu:
    'By the maintainer’s account, their everyday computers run HorneroOS: an ASUS ROG Strix G16 and a Lenovo Legion running Studio, and an AMD Ryzen 9 desktop with an RTX 3060. That is the maintainer’s account, not a measurement.',
  personas: 'People',
  mantieneElProyecto: ' maintains the project; ',
  mantenedorDe: ', a maintainer of ',
  desarrollaElInstaladorLaShell: ', is developing the installer. The shell is adapted from ',
  su: '; its ',
  creditoYLicencia: 'credit and licence',
  quedanEnElRepositorio: ' stay in the repository.',
  leeLaHistoriaCompleta: 'Read the whole story',
  exploraElCodigoFuente: 'Browse the source',
  contribui: 'Contribute',
  preguntasFrecuentes: 'Frequently asked questions',
  todasLasPreguntasLaComparacion: 'Every question, the comparison and the limits are on Why HorneroOS',
  studioSummary: (count: number, audioDefault: string, audioOptIn: string[]): string =>
    `Desktop plus ${count} creative specializations you pick at install time. Audio runs ${audioDefault} by default; ${audioOptIn.join(' and ')} only when you opt in.`,
  plannedNote: (names: string[]): string => `${names.join(' and ')} are planned: they have no installable image yet.`,
  limitsNote: (candidateVersion: string | null | undefined): string =>
    `It is an everyday-use system with concrete, declared limitations: LUKS, legacy BIOS and Niri are not validated on the current ISO and OS rollback is still planned${candidateVersion ? `; ${candidateVersion} is in preparation` : ''}. If you already run Arch, the desktop also installs as packages.`,
};

export const messages: Record<Locale, Messages> = { es, en };
