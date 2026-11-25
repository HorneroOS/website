// Message catalog for StudioPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  soloDeReferencia: 'Solo de referencia',
  propietarioAEleccion: 'Propietario · a elección',
  codigoAbierto: 'Código abierto',
  opcional: 'Opcional',
  catalogado: 'Catalogado',
  stats: (specializations: number, applications: number, audioModes: number) => [
    { value: String(specializations), label: 'especializaciones en el catálogo' },
    { value: String(applications), label: 'aplicaciones en el catálogo' },
    { value: String(audioModes), label: 'modos de audio, todos reversibles' },
  ],
  studioHaceAlgoRealHorneroos: 'Studio: hacé algo real | HorneroOS',
  lasAplicacionesInsigniaDeHorneroos:
    'Las aplicaciones insignia de HorneroOS Studio (Ardour, OBS Studio, Blender, Krita y Godot) listadas por nombre, junto a la frase sobre la edición creativa para uso diario.',
  horneroosStudioEsUnaEdicion:
    'HorneroOS Studio es una edición para uso diario y trabajo creativo: audio, video, streaming, diseño, foto y 3D. Se instala desde la ISO actual de HorneroOS con especializaciones a elección.',
  edicionStudio: 'Edición Studio',
  estacionDeTrabajoCreativa: 'Estación de trabajo creativa',
  haceAlgoReal: 'Hacé algo real.',
  horneroosStudioEsUnaEdicion2:
    'HorneroOS Studio es una edición creativa para uso diario construida sobre Desktop, y hoy se instala desde la ISO actual de HorneroOS. Elegís especializaciones (audio, video, streaming, diseño, fotografía, 3D) y el sistema configura las aplicaciones, la política de audio y el espacio de trabajo para ellas.',
  aplicacionesInsigniaDeStudio: 'Aplicaciones insignia de Studio',
  descargaLaIsoActual: 'Descargá la ISO actual',
  verAplicaciones: 'Ver aplicaciones',
  seccionesDeStudio: 'Secciones de Studio',
  especializaciones: 'Especializaciones',
  aplicaciones: 'Aplicaciones',
  audioYRendimiento: 'Audio y rendimiento',
  estado: 'Estado',
  studioYaEstaDisponiblePara: 'Studio está disponible hoy con madurez Preview: para uso diario, con las limitaciones declaradas.',
  seInstalaDesdeLaMisma:
    'Se instala desde la misma ISO actual firmada que Desktop y Gaming, y elegís tus especializaciones durante la instalación. Después del primer inicio, ',
  chequeaTuStackCreativoCuando: ' chequea tu stack creativo cuando quieras. Mirá ',
  instalar: 'Instalar',
  paraDescargarlaLimitacionConcretaLa:
    ' para descargarla. Limitación concreta: la validación en hardware físico (interfaces de audio, MIDI, codificación por GPU) todavía está pendiente; eso no es una certificación para tu hardware.',
  unaSesionReal: 'Una sesión real',
  lasEspecializacionesYLasAplicaciones:
    'Las especializaciones y las aplicaciones individuales se eligen desde un único catálogo canónico, el mismo modelo que usan el diseño del instalador, ',
  yElCentroDeControl:
    ' y el Centro de Control. Las selecciones pueden cambiar después de la instalación; registrar una selección nunca borra proyectos, configuraciones ni archivos.',
  empezaVacioYAgregaAplicaciones: 'Empezá vacío y agregá aplicaciones individuales.',
  aplicacionesFuentesYLicencias: 'Aplicaciones, fuentes y licencias',
  esteCatalogoSeGeneraDesde: (v0: string | number | null | undefined): string =>
    `Este catálogo se genera desde el catálogo pineado de Hornero (HorneroOS/hornero en ${v0}); los logos son los íconos oficiales de cada proyecto, mostrados a modo de identificación. El software propietario nunca se instala en silencio: REAPER es una opción explícita bajo la EULA de su proveedor, Penpot es solo de referencia (herramienta de navegador, sin paquete), y las entradas experimentales están marcadas. ArtCraft Launcher es experimental y de instalación manual con opt-in explícito: ninguna especialización lo instala. yabridge, Graphite, Penpot y ArtCraft Launcher no tienen un ícono oficial incorporado, así que llevan una insignia de texto propia del sitio (iniciales), nunca presentada como su logo.`,
  paquetes: 'Paquetes',
  fuente: 'Fuente',
  licencia: 'Licencia',
  verElPaquete: 'Ver el paquete',
  modosDeAudioYRendimiento: 'Modos de audio y rendimiento',
  losModosDeAudioDe:
    'Los modos de audio de Studio son reversibles y responden a un solo contrato: Balanced mantiene los valores por defecto del dispositivo; los demás son opciones explícitas, y el estado anterior queda registrado para poder restaurarlo exactamente. Quantum es un período de planificación, no una latencia de ida y vuelta medida, y ningún modo fuerza kernels de tiempo real, ajustes de IRQ ni cambios de privilegios.',
  predeterminadoTasaYQuantumDel: 'Predeterminado — tasa y quantum del dispositivo.',
  optInExplicitoReversible: 'Opt-in explícito, reversible.',
  predeterminado: 'Predeterminado',
  aEleccion: 'A elección',
  optInExplicitoViaPower: 'Opt-in explícito vía power-profiles-daemon; el perfil anterior se restaura cuando lo pedís.',
  enLosRepositorios: 'En los repositorios',
  catalogoCanonicoDeEdicionesResolver: 'Catálogo canónico de ediciones, resolver y matriz de aplicaciones y licencias.',
  contratosDeSeleccionModoTrabajos: 'contratos de selección, modo, trabajos de render y doctor, con tests.',
  panelStudioDelCentroDe:
    'Panel Studio del Centro de Control: cargas de trabajo, audio, rendimiento y trabajos de render.',
  politicasDePipewirePresetsY:
    'Políticas de PipeWire, presets y almacenamiento a cargo de la configuración; definiciones de escenarios de QA.',
  documentacionDeStudio: 'Documentación de Studio',
  configuracionYRecuperacionDeAudio: 'Configuración y recuperación de audio',
  guiaDeInicio: 'Guía de inicio',
  todaviaNoDisponible: 'Todavía no disponible',
  validacionDeHardwareLasInterfaces:
    'Validación de hardware: las interfaces de audio, MIDI, la codificación por GPU y las pantallas esperan fixtures físicos de QA.',
  cualquierAfirmacionDeCertificacionDe:
    'Cualquier afirmación de certificación de hardware: la validación física sigue pendiente, así que no se afirma soporte para hardware concreto hasta que la evidencia pase la puerta de QA.',
  seguiLaHojaDeRuta: 'Seguí la hoja de ruta de preparación de Studio',
};

export type Messages = typeof es;

const en: Messages = {
  soloDeReferencia: 'Reference only',
  propietarioAEleccion: 'Proprietary · opt-in',
  codigoAbierto: 'Open source',
  opcional: 'Optional',
  catalogado: 'Catalogued',
  stats: (specializations: number, applications: number, audioModes: number) => [
    { value: String(specializations), label: 'specializations in the catalogue' },
    { value: String(applications), label: 'applications in the catalogue' },
    { value: String(audioModes), label: 'audio modes, all reversible' },
  ],
  studioHaceAlgoRealHorneroos: 'Studio: make something real | HorneroOS',
  lasAplicacionesInsigniaDeHorneroos:
    'The flagship HorneroOS Studio applications (Ardour, OBS Studio, Blender, Krita and Godot) listed by name, beside the line about the everyday-use creative edition.',
  horneroosStudioEsUnaEdicion:
    'HorneroOS Studio is an everyday-use edition for creative work: audio, video, streaming, design, photo and 3D. It installs from the current HorneroOS ISO with selectable specializations.',
  edicionStudio: 'Studio edition',
  estacionDeTrabajoCreativa: 'Creative workstation',
  haceAlgoReal: 'Make something real.',
  horneroosStudioEsUnaEdicion2:
    'HorneroOS Studio is an everyday-use creative edition built on the Desktop, and it installs today from the current HorneroOS ISO. You pick specializations (audio, video, streaming, design, photography, 3D) and the system sets up the applications, audio policy and workspace for them.',
  aplicacionesInsigniaDeStudio: 'Flagship Studio applications',
  descargaLaIsoActual: 'Download the current ISO',
  verAplicaciones: 'Browse applications',
  seccionesDeStudio: 'Studio sections',
  especializaciones: 'Specializations',
  aplicaciones: 'Applications',
  audioYRendimiento: 'Audio & performance',
  estado: 'Status',
  studioYaEstaDisponiblePara: 'Studio is available today at Preview maturity: everyday use, with the declared limitations.',
  seInstalaDesdeLaMisma:
    'It installs from the same signed current ISO as Desktop and Gaming, and you choose your specializations during installation. After first boot, ',
  chequeaTuStackCreativoCuando: ' checks your creative stack whenever you want. See ',
  instalar: 'Install',
  paraDescargarlaLimitacionConcretaLa:
    ' to download it. Concrete limitation: physical-hardware validation (audio interfaces, MIDI, GPU encode) is still pending; that is not a certification for your hardware.',
  unaSesionReal: 'A real session',
  lasEspecializacionesYLasAplicaciones:
    'Specializations and individual applications are selected from one canonical catalogue, the same model used by the installer design, by ',
  yElCentroDeControl:
    ' and by the Control Center. Selections can change after installation; recording a selection never deletes projects, settings or files.',
  empezaVacioYAgregaAplicaciones: 'Start empty and add individual applications.',
  aplicacionesFuentesYLicencias: 'Applications, sources and licenses',
  esteCatalogoSeGeneraDesde: (v0: string | number | null | undefined): string =>
    `This catalogue is generated from the pinned Hornero catalogue (HorneroOS/hornero at ${v0}); logos are the official upstream icons, shown for identification. Proprietary software is never installed silently: REAPER is an explicit opt-in under its vendor EULA, Penpot is reference-only (browser tool, no package), and experimental entries are marked. ArtCraft Launcher is experimental and manual-install with explicit opt-in only: no specialization installs it. yabridge, Graphite, Penpot and ArtCraft Launcher have no official icon vendored, so they carry an in-house initials text badge, never presented as their logo.`,
  paquetes: 'Packages',
  fuente: 'Source',
  licencia: 'License',
  verElPaquete: 'See package',
  modosDeAudioYRendimiento: 'Audio and performance modes',
  losModosDeAudioDe:
    'Studio audio modes are reversible and owned by one contract: Balanced keeps device defaults; the others are explicit opt-ins, and the previous state is recorded so it can be restored exactly. Quantum is a scheduling period, not a measured round-trip latency, and no mode forces realtime kernels, IRQ tuning or privilege changes.',
  predeterminadoTasaYQuantumDel: 'Default — device rate and quantum.',
  optInExplicitoReversible: 'Explicit opt-in, reversible.',
  predeterminado: 'Default',
  aEleccion: 'Opt-in',
  optInExplicitoViaPower: 'Explicit opt-in via power-profiles-daemon; the previous profile is restored on demand.',
  enLosRepositorios: 'In the repositories',
  catalogoCanonicoDeEdicionesResolver: 'Canonical edition catalogue, resolver and application/license matrix.',
  contratosDeSeleccionModoTrabajos: 'selection, mode, render jobs and doctor contracts, with tests.',
  panelStudioDelCentroDe: 'Control Center Studio pane: workloads, audio, performance and render jobs.',
  politicasDePipewirePresetsY: 'Config-owned PipeWire, preset and storage policies; QA scenario definitions.',
  documentacionDeStudio: 'Studio documentation',
  configuracionYRecuperacionDeAudio: 'Audio setup & recovery',
  guiaDeInicio: 'Getting started guide',
  todaviaNoDisponible: 'Not available yet',
  validacionDeHardwareLasInterfaces:
    'Hardware validation: audio interfaces, MIDI, GPU encode and displays await physical QA fixtures.',
  cualquierAfirmacionDeCertificacionDe:
    'Any hardware-certification claim: physical validation is still pending, so no specific hardware is claimed as certified until hardware evidence passes the QA gate.',
  seguiLaHojaDeRuta: 'Follow the Studio readiness roadmap',
};

export const messages: Record<Locale, Messages> = { es, en };
