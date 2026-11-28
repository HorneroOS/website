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
  verPerfilesEnApps: 'Ver perfil en Hornero Apps',
  verAplicaciones: 'Ver aplicaciones',
  seccionesDeStudio: 'Secciones de Studio',
  especializaciones: 'Especializaciones',
  aplicaciones: 'Aplicaciones',
  audioYRendimiento: 'Audio y rendimiento',
  perfilesYSnapshots: 'Perfiles y snapshots',
  estado: 'Estado',
  studioYaEstaDisponiblePara: 'Studio está disponible hoy para uso diario en hardware físico y VM.',
  seInstalaDesdeLaMisma:
    'Se instala desde la misma ISO actual firmada que Desktop y Gaming, y elegís tus especializaciones durante la instalación. Después del primer inicio, ',
  chequeaTuStackCreativoCuando: ' chequea tu stack creativo cuando quieras. Mirá ',
  instalar: 'Instalar',
  paraDescargarlaLimitacionConcretaLa:
    ' para descargarla (o probá el QCOW2 v0.2.0-preview42 en /try). Studio se usa a diario en equipos físicos reales; revisá la compatibilidad de tu interfaz de audio o GPU específica antes de producir.',
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
  ruteoDeAudioEnVivo: 'Ruteo en vivo (DAW + llamadas)',
  perfilesYSnapshotsEyebrow: 'Espacio de usuario · 5 dominios',
  espacioDeUsuarioReversible: '100 % reversible, sin root',
  perfilesYSnapshotsDeTrabajo: 'Perfiles y snapshots de trabajo',
  perfilesYSnapshotsIntro:
    'Capturá el estado vivo de tu escritorio en cinco dominios y alterná entre configuraciones como Everyday, Guitar + Calls o Recording con vista previa de diferencias, confirmación Keep/Revert de 15 segundos y reversión instantánea al baseline.',
  cincoDominiosYSnapshotBaseline: '5 dominios composables y red de seguridad',
  capturaTuEstadoEnVivo:
    'horneroctl profile guarda solo configuración en espacio de usuario, sin requerir root, sin kernel de tiempo real personalizado y sin tocar bases de datos privadas de tus apps.',
  profileDomains: [
    { name: 'Experiencia', detail: 'Modo visual, variantes Signal, layouts de Hyprland y perfiles de animación.' },
    { name: 'Audio y ruteo PipeWire', detail: 'Modo de Studio, quantum, dispositivos por defecto con aviso si falta hardware, drop-ins y reglas por app.' },
    { name: 'Energía', detail: 'Perfil de energía activo (balanced, performance, power-saver) y reglas de inhibición o caffeine.' },
    { name: 'Extensiones', detail: 'Extensiones de Hornero PluginKit y plugins de Hyprland habilitados.' },
    { name: 'Companion Apps', detail: 'Apps de usuario detectadas al capturar, con oferta opt-in de 1 clic para lanzar las faltantes.' },
  ],
  baselineInmutableYRespaldoPrevio:
    'Snapshot baseline inmutable automático en la primera captura o aplicación, más respaldo previous antes de cada cambio.',
  cambioConDiffYConfirmacion15s:
    'Vista previa de diferencias contra el estado vivo y barra de seguridad de 15 segundos (Keep / Revert) en el Centro de Control.',
  lanzamientoOpcionalDeCompanionApps:
    'Exportación e importación portátil en JSON (--portable) para guardar tus setups en dotfiles o moverlos entre máquinas.',
  profileCliCommands: `horneroctl profile capture guitar-calls --name "Guitar + Calls" --yes\nhorneroctl profile diff guitar-calls\nhorneroctl profile revert --to baseline --yes`,
  kitsDeRuteoDeAudioEnVivo: 'Kits de ruteo en vivo y audio por app',
  desdeCentroDeControlStudioYAudio:
    'Activá kits virtuales reversibles de PipeWire/WirePlumber en 1 clic desde Control Center → Studio o desde la CLI, y enrutá flujos individuales desde Control Center → Audio.',
  routingKits: [
    { id: 'live-call', detail: 'Ruteo sin eco para Discord/Zoom con retornos aislados (REAPER Lesson Mic y Discord Call).' },
    { id: 'browser-backing', detail: 'Sink aislado Browser Backing para mandar audio del navegador a las entradas de tu DAW.' },
    { id: 'reaper-low-latency', detail: 'Regla JACK por aplicación a 256 frames para REAPER manteniendo Balanced como base.' },
  ],
  selectorPorAppYCeroVolumen:
    'Selector de salida por flujo en Control Center → Audio (sin necesitar pavucontrol) y alerta de volumen en 0 % o mute con Restaurar 100 % en 1 clic.',
  qpwgraphYControlCenterEnUnClic:
    'Botón directo para abrir qpwgraph y volver al estado previo cuando terminás la sesión.',
  routingCliCommands: `horneroctl studio routing enable live-call --yes\nhorneroctl studio routing status --json`,
  verGuiaDePerfilesYSnapshots: 'Guía de perfiles y snapshots',
  verGuiaDeRuteoEnVivo: 'Guía de ruteo de audio en vivo',
  todaviaNoDisponible: 'Alcance de hardware y certificación',
  validacionDeHardwareLasInterfaces:
    'HorneroOS Studio se usa a diario en al menos 3 computadoras físicas reales y en VM.',
  cualquierAfirmacionDeCertificacionDe:
    'No emitimos certificaciones formales por modelo de interfaz de audio, MIDI o GPU de terceros: verificá tu stack con horneroctl studio doctor en tu equipo.',
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
  verPerfilesEnApps: 'See profile in Hornero Apps',
  verAplicaciones: 'Browse applications',
  seccionesDeStudio: 'Studio sections',
  especializaciones: 'Specializations',
  aplicaciones: 'Applications',
  audioYRendimiento: 'Audio & performance',
  perfilesYSnapshots: 'Profiles & snapshots',
  estado: 'Status',
  studioYaEstaDisponiblePara: 'Studio is available today for everyday use on physical hardware and VMs.',
  seInstalaDesdeLaMisma:
    'It installs from the same signed current ISO as Desktop and Gaming, and you choose your specializations during installation. After first boot, ',
  chequeaTuStackCreativoCuando: ' checks your creative stack whenever you want. See ',
  instalar: 'Install',
  paraDescargarlaLimitacionConcretaLa:
    ' to download it (or try the v0.2.0-preview42 QCOW2 on /try). Studio is daily-driven on real physical computers; verify your specific audio interface and GPU drivers before production work.',
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
  ruteoDeAudioEnVivo: 'Live audio routing (DAW + calls)',
  perfilesYSnapshotsEyebrow: 'User-space · 5 domains',
  espacioDeUsuarioReversible: '100% reversible, no root',
  perfilesYSnapshotsDeTrabajo: 'Workspace profiles & snapshots',
  perfilesYSnapshotsIntro:
    'Capture your live desktop state across five domains and switch between setups like Everyday, Guitar + Calls, or Recording with diff preview, 15-second Keep/Revert confirmation, and instant rollback to baseline.',
  cincoDominiosYSnapshotBaseline: '5 composable domains & safety net',
  capturaTuEstadoEnVivo:
    'horneroctl profile stores user-space configuration only—requiring no root privileges, no custom realtime kernel, and never touching private application databases.',
  profileDomains: [
    { name: 'Experience', detail: 'Visual mode, Signal theme variants, Hyprland window layouts, and animation profiles.' },
    { name: 'Audio & PipeWire routing', detail: 'Studio audio mode, PipeWire quantum, default devices with missing-hardware warnings, drop-ins, and per-app stream rules.' },
    { name: 'Power', detail: 'Active power profile (balanced, performance, power-saver) and idle inhibitor / keep-awake rules.' },
    { name: 'Extensions', detail: 'Enabled Hornero PluginKit extensions and Hyprland plugin states.' },
    { name: 'Companion Apps', detail: 'Auto-detected user apps during capture, with an opt-in 1-click launch prompt for missing apps.' },
  ],
  baselineInmutableYRespaldoPrevio:
    'Automatic immutable baseline snapshot on first capture or apply, plus an automatic previous snapshot before every switch.',
  cambioConDiffYConfirmacion15s:
    'Live-state diff preview and a 15-second Keep/Revert confirmation banner in Control Center with automatic rollback on timeout.',
  lanzamientoOpcionalDeCompanionApps:
    'Portable JSON bundle export and import (--portable) to commit setups to dotfiles or share across machines.',
  profileCliCommands: `horneroctl profile capture guitar-calls --name "Guitar + Calls" --yes\nhorneroctl profile diff guitar-calls\nhorneroctl profile revert --to baseline --yes`,
  kitsDeRuteoDeAudioEnVivo: '1-click Live Audio Routing Kits & per-app routing',
  desdeCentroDeControlStudioYAudio:
    'Enable reversible user-space PipeWire/WirePlumber routing kits in 1 click from Control Center → Studio or the CLI, and route individual streams from Control Center → Audio.',
  routingKits: [
    { id: 'live-call', detail: 'Discord/Zoom zero-feedback routing with isolated hardware loopbacks (REAPER Lesson Mic & Discord Call).' },
    { id: 'browser-backing', detail: 'Isolated Browser Backing sink to feed browser audio straight into your DAW inputs.' },
    { id: 'reaper-low-latency', detail: 'Scoped 256-frame JACK scheduling rule for REAPER while keeping Balanced as baseline.' },
  ],
  selectorPorAppYCeroVolumen:
    'Per-app stream sink selector in Control Center → Audio (no pavucontrol needed) and muted/0% volume alert with 1-click Restore 100%.',
  qpwgraphYControlCenterEnUnClic:
    'One-click qpwgraph launch to inspect links visually and full rollback when your session wraps up.',
  routingCliCommands: `horneroctl studio routing enable live-call --yes\nhorneroctl studio routing status --json`,
  verGuiaDePerfilesYSnapshots: 'Profiles & snapshots guide',
  verGuiaDeRuteoEnVivo: 'Live audio routing guide',
  todaviaNoDisponible: 'Hardware & certification scope',
  validacionDeHardwareLasInterfaces:
    'HorneroOS Studio is daily-driven on 3+ real physical computers as well as virtual machines.',
  cualquierAfirmacionDeCertificacionDe:
    'We do not issue formal vendor certification per third-party audio interface, MIDI controller, or GPU model: verify your own stack with horneroctl studio doctor.',
  seguiLaHojaDeRuta: 'Follow the Studio readiness roadmap',
};

export const messages: Record<Locale, Messages> = { es, en };
