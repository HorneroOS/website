// Message catalog for InstallPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  packages: [
    { name: 'horneroctl-bin', what: 'la CLI del sistema (binario nativo)' },
    { name: 'hornero-shell', what: 'la shell de escritorio Quickshell y sus presets de layout' },
    { name: 'hornero-config', what: 'los defaults del escritorio y los packs de temas' },
    { name: 'hornero-greeter', what: 'la pantalla de login de SDDM' },
  ],
  plannedPlanificadoExperimentalExperimentalPrevie: {
    planned: 'Planificado',
    experimental: 'Experimental',
    preview: 'Preview',
    supported: 'Soportado',
  },
  descargaHorneroosTresPasosDescargar:
    'Descargá HorneroOS: tres pasos (descargar la ISO de 3.3 GB, verificar SHA-256 y firma, elegir edición y compositor).',
  descargaHorneroosIsoActualFirmada: 'Descargá HorneroOS | ISO actual firmada para x86_64',
  descargaHorneroosUnaIsoX86:
    'Descargá HorneroOS: una ISO x86_64 firmada con las ediciones Desktop, Studio y Gaming para uso diario, con checksum SHA-256 y firma GPG. Si ya usás Arch, el escritorio también se instala como paquetes.',
  descarga: 'Descarga',
  descargaHorneroos: 'Descargá HorneroOS',
  unaIsoX8664Instala:
    'Una ISO x86_64 instala HorneroOS Desktop, la edición Studio con especializaciones creativas a elección, o la edición Gaming. La ISO instalable vigente es 0.2.0-preview42 (3.3 GB, firmada, con Signal Flight, Hornero Apps, hornero-shell 1.6.0-2, hornero-config 0.6.0-1 y horneroctl-bin 0.2.0_preview63-1 integrados; LUKS y BIOS heredado siguen sin validación en esta ISO). HorneroOS se usa a diario y está probado en al menos 3 computadoras físicas y en KVM, junto al QCOW2 Desktop preinstalado v0.2.0-preview42 (2.6 GB) y los paquetes AUR.',
  appleSiliconNoticeTitle: 'Solo x86_64 · Aviso para Apple Silicon (Macs M1–M4)',
  appleSiliconNoticeBody:
    'Esta ISO de 3.3 GB funciona únicamente en procesadores x86_64. En Macs con Apple Silicon (M1–M4), Hypervisor.framework no virtualiza x86_64 por hardware (UTM cae a emulación CPU QEMU TCG lenta; ARM64 nativo y Parallels FEX no están soportados). Si querés evaluar antes de descargar, mirá las opciones de VM y QCOW2.',
  appleSiliconNoticeTryLink: 'Ver compatibilidad en Probar HorneroOS (/try)',
  windowsHintTitle: '¿Venís desde Windows? USB, checksum y Secure Boot',
  windowsHintBody:
    'Verificá el SHA-256 en PowerShell/CMD con CertUtil, grabá el pendrive con Rufus en modo Imagen DD (nunca ISO Image) o balenaEtcher, y desactivá Secure Boot en UEFI (respaldando antes tu clave de BitLocker y desactivando Fast Startup si pensás hacer dual-boot). Si solo querés probar en VM Linux/QEMU, también publicamos el QCOW2 Desktop preinstalado v0.2.0-preview42 (2.6 GB).',
  windowsHintCmd: 'CertUtil -hashfile horneroos-2026.11-preview42-x86_64.iso SHA256',
  launchGuideLabel: 'Guía de lanzamiento externa (Windows, Mac y Arch)',
  tryQcow2Cta: 'Descargar QCOW2 v0.2.0-preview42 en /try',
  descargarLaIsoActual: (v0: string | number | null | undefined): string => `Descargar la ISO actual (${v0})`,
  probarAntesEnPlayground: 'Probar en VM, browser o Live USB',
  comparaLasEdiciones: 'Compará las ediciones',
  yaUsasArchInstalaLos: 'Ya usás Arch? Instalá los paquetes',
  tambienAnunciadaEnLa: 'También anunciada en la ',
  paginaDeLaRelease: (v0: string | number | null | undefined): string => `página de la release ${v0}`,
  verificaCadaCopiaConEl: 'Verificá cada copia con el ',
  checksumSha256: 'checksum SHA-256',
  yLa: 'y la ',
  firmaGpgDesacoplada: 'firma GPG desacoplada',
  laImagenDeInstalacionActual: 'la imagen de instalación actual (Desktop + Studio + Gaming)',
  firma: 'Firma',
  paquetesMasNuevosQueLa: (v0: string | number | null | undefined): string => `Paquetes más nuevos que la ISO: ${v0}`,
  laIsoDeArribaSigue: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
  ): string =>
    `La ISO de arriba sigue siendo la ${v0}: no hay ISO nueva. La ${v1}${v2} es una release de paquetes del AUR que trae Hornero Signal. Una instalación hecha con la ISO, o una existente, la recibe actualizando esos paquetes:`,
  registroDeLaRelease: 'Registro de la release',
  checklistYEvidencia: 'Checklist y evidencia',
  enElHistorialDeReleases: 'En el historial de releases',
  lasReleasesHastaAhoraSon:
    'Las releases hasta ahora son composiciones: commits exactos de shell y config probados en conjunto.',
  laUltimaEtiquetadaEs: 'La última etiquetada es ',
  y: ', y ',
  seEstaPreparando: 'se está preparando',
  delArchivoAlEscritorioY: 'Del archivo al escritorio, y después',
  verifica: 'Verificá',
  antesDeGrabarLaIso:
    'Antes de grabar la ISO, compará el resultado de sha256sum con el checksum publicado y verificá la firma.',
  instala: 'Instalá',
  elegiLaEdicionLasEspecializaciones:
    'Elegí la edición, las especializaciones y el compositor (Hyprland o Niri). Tené en cuenta que LUKS y BIOS heredado no están validados sobre esta ISO: si tu setup depende de eso, probalo primero en VM o en un equipo que puedas reinstalar.',
  actualiza: 'Actualizá',
  despuesDeInstalarLasNovedades:
    'Después de instalar, las novedades llegan como paquetes, no como una ISO nueva. Los paquetes de HorneroOS vienen del AUR, así que se actualizan con un ayudante de AUR como yay (la ISO no instala ninguno). Antes, guardá tu configuración y mirá qué hay pendiente:',
  horneroctlPackageUpgradeCorrePacman:
    'horneroctl package upgrade corre pacman -Syu: actualiza los repositorios de Arch, no los paquetes del AUR. Ningún comando hace rollback del sistema; el snapshot guarda solo la configuración de Hornero.',
  leeLaGuiaDeActualizaciones: 'Leé la guía de actualizaciones y rollback (el rollback de SO sigue planificado)',
  guiasOficiales: 'Guías oficiales: ',
  instalacionPasoAPaso: 'instalación paso a paso',
  primerosPasosTrasInstalar: 'primeros pasos tras instalar',
  y2: ' y ',
  problemasPorSintoma: 'problemas por síntoma',
  laActualizacionEnElLugar: (v0: string | number | null | undefined): string =>
    `La actualización en el lugar a la ${v0} todavía figura como pendiente de verificación en su checklist.`,
  loQueTodaviaNoEsta: 'Lo que todavía no está en esta ISO',
  laIsoEsLaUltima: (v0: string | number | null | undefined): string =>
    `La ISO ${v0} es la última publicada. Lo que sigue no está en esa imagen.`,
  loLanzadoComoPaquetesSe: 'Lo lanzado como paquetes se obtiene actualizando (paso 03). ',
  loQueEstaEnMain:
    'Lo que está en main llega con una release futura, cuando el registro del proyecto lo marque como lanzado; lo planificado todavía no existe.',
  comoSeVeInstalarHorneroos: 'Cómo se ve instalar HorneroOS',
  todaviaNoPublicamosCapturasDel:
    'Todavía no publicamos capturas del instalador: los pasos quedan en texto hasta que exista una captura real de Calamares. Lo que sí se ve es el día después: actualizaciones y rollback.',
  comoEstaLaInstalacion: 'Cómo está la instalación',
  imagenDeInstalacion: 'Imagen de instalación',
  instalador: 'Instalador',
  provisorio: 'Provisorio',
  laBuildDeCalamaresPaso:
    'La build de Calamares pasó la validación de esta ISO (Desktop, Studio y Gaming, UEFI); LUKS y BIOS heredado no se ejecutaron sobre esta ISO. El instalador a medida de Panda Foss sigue siendo el camino oficial futuro.',
  paquetesDeEscritorio: 'Paquetes de escritorio',
  disponible: 'Disponible',
  cuatroPaquetesDeAurPara: 'Cuatro paquetes de AUR, para quienes ya corren Arch Linux.',
  queExisteHoy: 'Qué existe hoy',
  hoyHorneroosSeInstalaDe:
    'Hoy HorneroOS se instala de dos maneras: la ISO actual firmada de arriba (Desktop, Studio o Gaming), o los componentes de Desktop como paquetes del Arch User Repository sobre un Arch ya instalado. Los paquetes son los componentes de un escritorio Wayland-first. Hyprland es el compositor por defecto y Niri está soportado como alternativa Wayland. Quickshell es el runtime de la shell, no el sistema operativo en sí.',
  elPaqueteDelGreeterEs:
    'Los paquetes del greeter son opcionales: hornero-greeter es el tema Signal para SDDM (Qt 6 Multimedia solo hace falta para un video que elija quien administra el equipo) y hornero-greeter-greetd es el mismo diseño como programa nativo para greetd. Otros compositores no están soportados salvo que el catálogo de ediciones diga lo contrario.',
  estadoDeLasEdiciones: 'Estado de las ediciones',
  lasEdicionesCompartenUnSolo:
    'Las ediciones comparten un solo modelo de composición. Desktop, Studio y Gaming están probadas en uso diario sobre hardware físico; Server y Agents siguen planificadas.',
  desktopEsLaEdicionBase:
    'Desktop es la edición base para uso diario. Studio y Gaming se instalan desde la misma ISO actual con especializaciones y perfiles a elección, y se usan a diario en hardware real; su estado hoy es ',
  laEvidenciaDeHardwareDe: '. Server y Agents tienen definiciones de composición pero aún no tienen imagen booteable. Hyprland y Niri están soportados dentro de Desktop.',
  todaviaEstaPendienteAsiQue: '',
  comoEncajanLasEdiciones: 'Cómo encajan las ediciones.',
  pruebasYReportes: 'Pruebas y reportes',
  siAlgoSaleMalEn:
    'Si algo sale mal en tu computadora, los reportes desde hardware real son lo más útil que podés enviar. Incluí el nombre de la ISO, tu tipo de firmware, si el disco está cifrado y el paso donde falló.',
  reportarUnProblemaDeInstalacion: 'Reportar un problema de instalación',
  notasDeLaReleaseY: 'Notas de la release y checksums',
  elInstalador: 'El instalador',
  laBuildDeCalamaresEn: 'La build de Calamares en ',
  esUnPuenteProvisorioPara: ' es un puente provisorio para probar composiciones y flujos de instalación. ',
  estaDesarrollandoElInstaladorA:
    ' está desarrollando el instalador a medida de HorneroOS que debería convertirse en el camino oficial, y va a ser suyo. La build de Calamares no es ese instalador y sigue siendo provisoria hasta que el instalador a medida esté listo para publicar y pase la aceptación. Usa el contrato de ediciones y compositores en vez de definir su propio modelo de paquetes. La ISO actual de arriba ya instala Desktop, Studio y Gaming con este Calamares.',
  quienesContribuyenPuedenSeguirEl: 'Quienes contribuyen pueden seguir el ',
  lenguajeDeDisenoDeHorneroos: 'lenguaje de diseño de HorneroOS',
  queApuntaALasFuentes:
    ', que apunta a las fuentes de diseño autoritativas para el escritorio, el sitio web, el greeter y el instalador.',
  paraSeguirLasComposicionesEtiquetadas: 'Para seguir las composiciones etiquetadas, mirá ',
  oLa: ' o la ',
  organizacionHorneroos: 'organización HorneroOS',
  enGithub: ' en GitHub.',
  releasesKey: (fingerprint: string): string =>
    `Clave de releases de HorneroOS ${fingerprint}; verificá con la clave pública en el repositorio hornero (`,
  currentIsoNote: (tag: string): string =>
    `ISO actual publicada como pre-release firmada (${tag}), verificada en guest y en host; una copia alterada falla la verificación de checksum y de firma.`,
};

export type Messages = typeof es;

const en: Messages = {
  packages: [
    { name: 'horneroctl-bin', what: 'the system CLI (native binary)' },
    { name: 'hornero-shell', what: 'the Quickshell desktop shell and its layout presets' },
    { name: 'hornero-config', what: 'the desktop defaults and theme packs' },
    { name: 'hornero-greeter', what: 'the SDDM login screen' },
  ],
  plannedPlanificadoExperimentalExperimentalPrevie: {
    planned: 'Planned',
    experimental: 'Experimental',
    preview: 'Preview',
    supported: 'Supported',
  },
  descargaHorneroosTresPasosDescargar:
    'Download HorneroOS: three steps (download the 3.3 GB ISO, verify SHA-256 and signature, pick edition and compositor).',
  descargaHorneroosIsoActualFirmada: 'Download HorneroOS | Signed current x86_64 ISO',
  descargaHorneroosUnaIsoX86:
    'Download HorneroOS: one signed x86_64 ISO with the Desktop, Studio and Gaming everyday-use editions, with a SHA-256 checksum and GPG signature. If you already run Arch, the desktop also installs as packages.',
  descarga: 'Download',
  descargaHorneroos: 'Download HorneroOS',
  unaIsoX8664Instala:
    'One x86_64 ISO installs HorneroOS Desktop, the Studio edition with selectable creative specializations, or the Gaming edition. The current signed install ISO is 0.2.0-preview42 (3.3 GB, bundling Signal Flight, Hornero Apps, hornero-shell 1.6.0-2, hornero-config 0.6.0-1, and horneroctl-bin 0.2.0_preview63-1; LUKS and legacy BIOS remain uncovered on this ISO). HorneroOS is daily-driven and tested on 3+ physical computers and in KVM, alongside the signed v0.2.0-preview42 preinstalled Desktop QCOW2 (2.6 GB) and AUR packages.',
  appleSiliconNoticeTitle: 'x86_64 only · Apple Silicon (M1–M4 Macs) notice',
  appleSiliconNoticeBody:
    'This 3.3 GB ISO targets x86_64 PCs only. On Apple Silicon Macs (M1–M4), Hypervisor.framework cannot hardware-virtualize x86_64 (UTM falls back to slow QEMU TCG CPU emulation; native ARM64 and Parallels FEX are unsupported). Read the compatibility notes before downloading.',
  appleSiliconNoticeTryLink: 'Check VM compatibility on Try HorneroOS (/try)',
  windowsHintTitle: 'Coming from Windows? USB writer, checksum & Secure Boot',
  windowsHintBody:
    'Verify SHA-256 with CertUtil in PowerShell/CMD, flash with Rufus in DD Image mode (not ISO Image mode) or balenaEtcher, and disable Secure Boot in UEFI (back up your BitLocker recovery key and turn off Fast Startup before dual-booting). For a fast QEMU/KVM VM trial, a signed v0.2.0-preview42 preinstalled Desktop QCOW2 (2.6 GB) is also published.',
  windowsHintCmd: 'CertUtil -hashfile horneroos-2026.11-preview42-x86_64.iso SHA256',
  launchGuideLabel: 'Public Preview Launch Guide (Windows, Mac & Arch)',
  tryQcow2Cta: 'Download v0.2.0-preview42 QCOW2 on /try',
  descargarLaIsoActual: (v0: string | number | null | undefined): string => `Download the current ISO (${v0})`,
  probarAntesEnPlayground: 'Try in VM, browser, or Live USB',
  comparaLasEdiciones: 'Compare the editions',
  yaUsasArchInstalaLos: 'Already run Arch? Install the packages',
  tambienAnunciadaEnLa: 'Also announced on the ',
  paginaDeLaRelease: (v0: string | number | null | undefined): string => `${v0} release page`,
  verificaCadaCopiaConEl: 'Verify every copy with the ',
  checksumSha256: 'SHA-256 checksum',
  yLa: 'and the ',
  firmaGpgDesacoplada: 'detached GPG signature',
  laImagenDeInstalacionActual: 'the current install image (Desktop + Studio + Gaming)',
  firma: 'Signature',
  paquetesMasNuevosQueLa: (v0: string | number | null | undefined): string => `Packages newer than the ISO: ${v0}`,
  laIsoDeArribaSigue: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
  ): string =>
    `The ISO above is still ${v0}: there is no new ISO. ${v1}${v2} is an AUR package release that brings Hornero Signal. An install made from the ISO, or an existing one, gets it by updating those packages:`,
  registroDeLaRelease: 'Release record',
  checklistYEvidencia: 'Checklist and evidence',
  enElHistorialDeReleases: 'In the release history',
  lasReleasesHastaAhoraSon: 'Releases so far are compositions: exact shell and config commits tested together.',
  laUltimaEtiquetadaEs: 'The latest tagged one is ',
  y: ', and ',
  seEstaPreparando: 'is being prepared',
  delArchivoAlEscritorioY: 'From file to desktop, and after',
  verifica: 'Verify',
  antesDeGrabarLaIso:
    'Before you write the ISO, compare the sha256sum output with the published checksum and verify the signature.',
  instala: 'Install',
  elegiLaEdicionLasEspecializaciones:
    'Pick the edition, specializations, and compositor (Hyprland or Niri). Note that LUKS and legacy BIOS were not validated on this ISO: if your setup depends on them, test in a virtual machine or on a system you can reinstall.',
  actualiza: 'Update',
  despuesDeInstalarLasNovedades:
    'After installing, new work arrives as packages, not as a new ISO. HorneroOS packages come from the AUR, so you update them with an AUR helper such as yay (the ISO does not install one). First save your configuration and see what is pending:',
  horneroctlPackageUpgradeCorrePacman:
    'horneroctl package upgrade runs pacman -Syu: it updates the Arch repositories, not AUR packages. No command rolls the system back; the snapshot keeps Hornero configuration only.',
  leeLaGuiaDeActualizaciones: 'Read the updates and rollback guide (OS rollback is still planned)',
  guiasOficiales: 'Official guides: ',
  instalacionPasoAPaso: 'step-by-step installation',
  primerosPasosTrasInstalar: 'first steps after installing',
  y2: ' and ',
  problemasPorSintoma: 'troubleshooting by symptom',
  laActualizacionEnElLugar: (v0: string | number | null | undefined): string =>
    `The in-place upgrade to ${v0} is still listed as pending verification in its checklist.`,
  loQueTodaviaNoEsta: 'What is not in this ISO yet',
  laIsoEsLaUltima: (v0: string | number | null | undefined): string =>
    `The ${v0} ISO is the latest published. What follows is not in that image.`,
  loLanzadoComoPaquetesSe: 'What was released as packages arrives by updating (step 03). ',
  loQueEstaEnMain:
    'What is on main arrives with a future release, when the project ledger marks it as released; what is planned does not exist yet.',
  comoSeVeInstalarHorneroos: 'What installing HorneroOS looks like',
  todaviaNoPublicamosCapturasDel:
    'We do not publish installer captures yet: the steps stay as text until a real Calamares capture exists. What you can see is the day after: updates and rollback.',
  comoEstaLaInstalacion: 'Where installation stands',
  imagenDeInstalacion: 'Install image',
  instalador: 'Installer',
  provisorio: 'Provisional',
  laBuildDeCalamaresPaso:
    "The Calamares build passed validation for this ISO (Desktop, Studio and Gaming, UEFI); LUKS and legacy BIOS were not run on this ISO. Panda Foss's custom installer remains the future official path.",
  paquetesDeEscritorio: 'Desktop packages',
  disponible: 'Available',
  cuatroPaquetesDeAurPara: 'Four AUR packages, for people who already run Arch Linux.',
  queExisteHoy: 'What exists today',
  hoyHorneroosSeInstalaDe:
    'Today HorneroOS installs two ways: the signed current ISO above (Desktop, Studio or Gaming), or the Desktop components as Arch User Repository packages on an existing Arch system. The packages are the components of a Wayland-first desktop. Hyprland is the default compositor and Niri is supported as an alternative Wayland compositor. Quickshell is the shell runtime, not the operating system itself.',
  elPaqueteDelGreeterEs:
    'The greeter packages are optional: hornero-greeter is the Signal theme for SDDM (Qt 6 Multimedia is only needed for an administrator-chosen video) and hornero-greeter-greetd is the same design as a native greetd program. Other compositors are not supported unless the edition catalogue says so.',
  estadoDeLasEdiciones: 'Edition readiness',
  lasEdicionesCompartenUnSolo:
    'Editions share one composition model. Desktop, Studio, and Gaming are daily-driven and tested on physical hardware; Server and Agents remain planned.',
  desktopEsLaEdicionBase:
    'Desktop is the everyday-use base edition. Studio and Gaming install from the same current ISO with selectable specializations and profiles, and are daily-driven on physical hardware; their status today is ',
  laEvidenciaDeHardwareDe: '. Server and Agents have composition definitions but no bootable image yet. Both Hyprland and Niri are supported within Desktop.',
  todaviaEstaPendienteAsiQue: '',
  comoEncajanLasEdiciones: 'How the editions fit together.',
  pruebasYReportes: 'Testing and reports',
  siAlgoSaleMalEn:
    'If something goes wrong on your machine, reports from real hardware are the most useful thing you can send. Include the ISO name, your firmware type, whether the disk is encrypted, and the step where it failed.',
  reportarUnProblemaDeInstalacion: 'Report an install problem',
  notasDeLaReleaseY: 'Release notes and checksums',
  elInstalador: 'The installer',
  laBuildDeCalamaresEn: 'The Calamares build in ',
  esUnPuenteProvisorioPara: ' is a provisional bridge for testing compositions and install flows. ',
  estaDesarrollandoElInstaladorA:
    ' is developing the custom HorneroOS installer that is meant to become the official path, and will own it. The Calamares build is not that installer and stays provisional until the custom one is ready to publish and passes acceptance. It uses the edition and compositor contract instead of defining its own package model. The current ISO above already installs Desktop, Studio and Gaming with this Calamares build.',
  quienesContribuyenPuedenSeguirEl: 'Contributors can follow the ',
  lenguajeDeDisenoDeHorneroos: 'HorneroOS design language',
  queApuntaALasFuentes:
    ', which points to the authoritative design sources for the desktop, website, greeter and installer.',
  paraSeguirLasComposicionesEtiquetadas: 'To follow tagged compositions, see ',
  oLa: ' or the ',
  organizacionHorneroos: 'HorneroOS organization',
  enGithub: ' on GitHub.',
  releasesKey: (fingerprint: string): string =>
    `HorneroOS releases key ${fingerprint}; verify with the public key in the hornero repository (`,
  currentIsoNote: (tag: string): string =>
    `Current ISO published as a signed pre-release (${tag}), verified in guest and on host; a tampered copy fails checksum and signature verification.`,
};

export const messages: Record<Locale, Messages> = { es, en };
