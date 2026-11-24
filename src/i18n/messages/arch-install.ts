// Message catalog for ArchInstallPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  instalarHorneroosSobreArchLinux:
    'Instalar HorneroOS sobre Arch Linux: paquetes del AUR, configuración inicial segura y arranque de sesión.',
  horneroosSobreArchLinuxInstalacion: 'HorneroOS sobre Arch Linux | Instalación por paquetes',
  yaUsasArchInstalaEl:
    '¿Ya usás Arch? Instalá el escritorio HorneroOS como paquetes del AUR, sin reinstalar el sistema: requisitos, comandos verificados, configuración inicial que no pisa tus dotfiles y cómo volver atrás.',
  instalacion: 'Instalación',
  yaUsasArchConvertiloEn: '¿Ya usás Arch? Convertilo en tu workstation HorneroOS',
  laIsoNoEsLa:
    'La ISO no es la única puerta de entrada. El escritorio completo —shell, defaults, greeter y la CLI del sistema— se publica como paquetes del AUR y se instala sobre tu Arch actual, sin reinstalar nada y sin tocar los archivos de configuración que ya son tuyos. Esta guía es ese camino, de principio a fin.',
  irALosComandos: 'Ir a los comandos',
  prefieroLaIsoCompleta: 'Prefiero la ISO completa',
  tresCaminosUnMismoEscritorio: 'Tres caminos, un mismo escritorio',
  aIso: 'A · ISO',
  laExperienciaCompletaDesdeCero:
    'La experiencia completa desde cero, con ediciones Desktop, Studio y Gaming y los defaults de fábrica. Es la ruta de la ',
  paginaDeDescarga: 'página de descarga',
  bArch: 'B · Arch',
  estaGuiaPaquetesSobreTu:
    'Esta guía: paquetes sobre tu Arch actual. El escritorio, el Centro de control, los temas, PluginKit y horneroctl, conviviendo con lo que ya tenés.',
  cSoloLaShell: 'C · Solo la shell',
  siYaCorreHyprlandY:
    'Si ya corre Hyprland y solo querés probar la shell: instalás hornero-shell y la arrancás a mano dentro de tu sesión actual, sin adoptar la configuración de HorneroOS. Abajo está la variante.',
  requisitos: 'Requisitos',
  obligatorios: 'Obligatorios',
  archLinuxX8664Actualizado:
    'Arch Linux x86_64 actualizado (`pacman -Syu` al día). Otras distros basadas en Arch no están verificadas oficialmente.',
  unaSesionWaylandConHyprland:
    'Una sesión Wayland con Hyprland para la experiencia completa (la variante C también lo necesita). Si todavía no tenés compositor, el paso de paquetes lo instala.',
  gitYBaseDevelPara: '`git` y `base-devel` para construir paquetes del AUR, y un ayudante como yay (abajo).',
  recomendados: 'Recomendados',
  pipewireWireplumberParaAudioCompleto:
    'PipeWire + WirePlumber para audio completo, xdg-desktop-portal-gtk además del portal de Hyprland, y los drivers de tu GPU según la wiki de Arch (en NVIDIA, el driver propietario y su modeset quedan a tu cargo: HorneroOS no los instala por vos en esta ruta).',
  unRespaldoDeTuConfiguracion:
    'Un respaldo de tu configuración actual. El paso de configuración inicial nunca sobrescribe archivos tuyos, pero un respaldo sigue siendo gratis.',
  siNoTenesYay: 'Si no tenés yay',
  elAurEsMantenidoPor:
    'El AUR es mantenido por la comunidad: antes de instalar cualquier paquete, leé su PKGBUILD. Yay se construye como tu usuario, nunca como root:',
  deArchAHorneroosPaso: 'De Arch a HorneroOS, paso a paso',
  actualizaEInstalaLosPaquetes: 'Actualizá e instalá los paquetes',
  horneroShellTraeComoDependencias:
    '`hornero-shell` trae como dependencias `hornero-config` (los defaults) y `horneroctl-bin` (la CLI firmada). El segundo grupo es el soporte de sesión: salteá lo que ya tengas.',
  elGreeterEsOpcionalY:
    'El greeter es opcional y solo si ya usás SDDM: `yay -S hornero-greeter` instala el tema sin cambiar tu display manager ni activarlo por vos. No hace falta reiniciar todavía.',
  respaldaYSembraTuConfiguracion: 'Respaldá y sembrá tu configuración',
  tuCuentaYaExisteAsi:
    'Tu cuenta ya existe, así que el esqueleto de fábrica (`/etc/skel`) nunca te llegó. El sembrado copia únicamente los archivos que te faltan —nunca sobrescribe uno tuyo— y el `--dry-run` te muestra la lista exacta antes de tocar nada:',
  siTuConfigHyprHyprland:
    'Si tu `~/.config/hypr/hyprland.lua` ya es tuyo, queda intacto: los módulos de fábrica se siembran al lado y el sistema sigue usando tu entrada. Para adoptar la entrada de fábrica con tus overrides en `hyprland.lua.d/*-user.lua`, mové la tuya a un lado y volvé a sembrar; `horneroctl config refresh-hypr` mantiene esa entrada al día sin tocar tus archivos de usuario.',
  entraPorTuSesionHyprland: 'Entrá por tu sesión Hyprland de siempre',
  noHayUnaSesionNueva:
    'No hay una sesión nueva que elegir: HorneroOS vive dentro de Hyprland. Con la configuración sembrada, la shell arranca sola al entrar. Sin sembrar nada, tu Hyprland usa los defaults de sistema de HorneroOS que trae el paquete. Para probar solo la shell (camino C), arrancala a mano en tu sesión actual:',
  personaliza: 'Personalizá',
  elCentroDeControlConcentra:
    'El Centro de control concentra layouts, temas, Hornero Chromatic, modos de experiencia y extensiones de PluginKit desde el catálogo. Los compañeros se instalan desde el mismo catálogo como paquetes de datos. Todo eso ya viene en los paquetes que instalaste: no hay un segundo paso de instalación.',
  primerosPasosTrasInstalar: 'Primeros pasos tras instalar',
  yLa: ' y la ',
  guiaPasoAPasoCompleta: 'guía paso a paso completa',
  quePasaConLoQue: 'Qué pasa con lo que ya tenés',
  tuHyprlandTuHyprlandLua:
    '**Tu Hyprland**: tu `hyprland.lua` (o `.conf`) manda. El sembrado solo agrega los archivos que te faltan y nunca pisa los tuyos; los defaults del paquete viven en `/etc/xdg` como fallback.',
  otrosEscritoriosKdeGnomeU:
    '**Otros escritorios**: KDE, GNOME u otra sesión quedan instalados y elegibles en tu display manager de siempre. Nada se desinstala ni se deshabilita.',
  barrasYNotificacionesSiOtra:
    '**Barras y notificaciones**: si otra shell o daemon de notificaciones ya corre en tu sesión, van a convivir hasta que decidas. La shell de Hornero no mata procesos ajenos; apagá el autostart del otro cuando quieras quedarte con uno.',
  tusDotfilesGtkQtTerminal:
    '**Tus dotfiles**: GTK/Qt, terminal y shell de login solo cambian donde no tenías nada. Lo que el sembrado creó queda listado en su salida; borrar esos archivos te devuelve exactamente al estado anterior.',
  volverAtras: 'Volver atrás',
  desinstalarEsQuitarPaquetesTu:
    'Desinstalar es quitar paquetes: tu configuración y tus datos quedan donde estaban, y tu sesión anterior sigue arrancando como siempre.',
  siSembrasteConfiguracionLosUnicos:
    'Si sembraste configuración, los únicos archivos nuevos son los que el sembrado listó al correr: borrarlos es opcional y seguro si no los editaste.',
  alcanceHonesto: 'Alcance honesto',
  losPaquetesTraenElEscritorio:
    'Los paquetes traen el escritorio completo y los modos de experiencia. Las aplicaciones de cada edición (el stack creativo de Studio, Steam y compañía en Gaming) se instalan con pacman/yay como en cualquier Arch: cambiar de modo no instala aplicaciones por vos. La ISO sigue siendo el camino que provisiona una edición entera.',
  derivadosDeArchCachyosEndeavouros:
    'Derivados de Arch (CachyOS, EndeavourOS y otros) no están verificados oficialmente: los paquetes son los mismos, pero tratá esa ruta como experimental.',
  preguntasFrecuentes: 'Preguntas frecuentes',
  problemasPorSintoma: 'Problemas por síntoma',
  releasesYPaquetesVigentes: 'Releases y paquetes vigentes',
  packagesAhead: (pkg: string | null | undefined): string =>
    `El escritorio por paquetes puede ir por delante de la ISO publicada${pkg ? ` (hoy: paquetes ${pkg})` : ''}: actualizar es el yay -Syu de siempre, con un snapshot antes si querés (horneroctl config snapshot create --yes).`,
};

export type Messages = typeof es;

const en: Messages = {
  instalarHorneroosSobreArchLinux:
    'Install HorneroOS on Arch Linux: AUR packages, safe first-time setup and session start.',
  horneroosSobreArchLinuxInstalacion: 'HorneroOS on Arch Linux | Package installation',
  yaUsasArchInstalaEl:
    'Already running Arch? Install the HorneroOS desktop as AUR packages without reinstalling your system: requirements, verified commands, first-time setup that never overwrites your dotfiles, and how to roll back.',
  instalacion: 'Install',
  yaUsasArchConvertiloEn: 'Already run Arch? Make it your HorneroOS workstation',
  laIsoNoEsLa:
    'The ISO is not the only way in. The full desktop — shell, defaults, greeter and the system CLI — is published as AUR packages and installs on top of your current Arch system, without reinstalling anything and without touching configuration files that are already yours. This guide is that path, end to end.',
  irALosComandos: 'Skip to the commands',
  prefieroLaIsoCompleta: 'I would rather use the full ISO',
  tresCaminosUnMismoEscritorio: 'Three paths, one desktop',
  aIso: 'A · ISO',
  laExperienciaCompletaDesdeCero:
    'The complete from-scratch experience, with the Desktop, Studio and Gaming editions and factory defaults. It lives on the ',
  paginaDeDescarga: 'download page',
  bArch: 'B · Arch',
  estaGuiaPaquetesSobreTu:
    'This guide: packages on your current Arch. The desktop, Control Center, themes, PluginKit and horneroctl, living alongside what you already have.',
  cSoloLaShell: 'C · Shell only',
  siYaCorreHyprlandY:
    'If Hyprland is already running and you only want to try the shell: install hornero-shell and start it by hand inside your current session, without adopting HorneroOS configuration. The variant is below.',
  requisitos: 'Requirements',
  obligatorios: 'Required',
  archLinuxX8664Actualizado:
    'Arch Linux x86_64, fully updated (`pacman -Syu`). Other Arch-based distributions are not officially verified.',
  unaSesionWaylandConHyprland:
    'A Wayland session with Hyprland for the full experience (variant C needs it too). If you have no compositor yet, the package step installs one.',
  gitYBaseDevelPara: '`git` and `base-devel` to build AUR packages, plus a helper such as yay (below).',
  recomendados: 'Recommended',
  pipewireWireplumberParaAudioCompleto:
    'PipeWire + WirePlumber for complete audio, xdg-desktop-portal-gtk next to the Hyprland portal, and your GPU drivers per the Arch wiki (on NVIDIA, the proprietary driver and its modeset stay yours: HorneroOS does not install them for you on this path).',
  unRespaldoDeTuConfiguracion:
    'A backup of your current configuration. The first-time setup step never overwrites your files, but a backup is still free.',
  siNoTenesYay: 'If you do not have yay yet',
  elAurEsMantenidoPor:
    'The AUR is community-maintained: read every PKGBUILD before installing. Yay itself is built as your user, never as root:',
  deArchAHorneroosPaso: 'From Arch to HorneroOS, step by step',
  actualizaEInstalaLosPaquetes: 'Update and install the packages',
  horneroShellTraeComoDependencias:
    '`hornero-shell` pulls in `hornero-config` (the defaults) and `horneroctl-bin` (the signed CLI). The second group is session support: skip whatever you already have.',
  elGreeterEsOpcionalY:
    'The greeter is optional and only if you already use SDDM: `yay -S hornero-greeter` installs the theme without switching your display manager or enabling it for you. No reboot needed yet.',
  respaldaYSembraTuConfiguracion: 'Back up and seed your configuration',
  tuCuentaYaExisteAsi:
    'Your account already exists, so the factory skeleton (`/etc/skel`) never reached you. Seeding copies only the files you are missing — it never overwrites one of yours — and `--dry-run` shows the exact list before touching anything:',
  siTuConfigHyprHyprland:
    'If your `~/.config/hypr/hyprland.lua` is already yours, it stays intact: factory modules are seeded next to it and the system keeps using your entrypoint. To adopt the factory entrypoint with your overrides in `hyprland.lua.d/*-user.lua`, move yours aside and seed again; `horneroctl config refresh-hypr` then keeps that entrypoint current without touching your user files.',
  entraPorTuSesionHyprland: 'Log in through your usual Hyprland session',
  noHayUnaSesionNueva:
    'There is no new session to pick: HorneroOS lives inside Hyprland. With the seeded configuration the shell starts on login. With nothing seeded, your Hyprland falls back to the packaged HorneroOS system defaults. To try only the shell (path C), start it by hand inside your current session:',
  personaliza: 'Make it yours',
  elCentroDeControlConcentra:
    'Control Center holds layouts, themes, Hornero Chromatic, experience modes and PluginKit extensions from the catalogue. Companions install from that same catalogue as data packages. It all ships in the packages you just installed: there is no second installation step.',
  primerosPasosTrasInstalar: 'First steps after installing',
  yLa: ' and the ',
  guiaPasoAPasoCompleta: 'complete step-by-step guide',
  quePasaConLoQue: 'What happens to what you already have',
  tuHyprlandTuHyprlandLua:
    '**Your Hyprland**: your `hyprland.lua` (or `.conf`) wins. Seeding only adds the files you are missing and never overwrites yours; packaged defaults live in `/etc/xdg` as fallback.',
  otrosEscritoriosKdeGnomeU:
    '**Other desktops**: KDE, GNOME or another session stay installed and selectable in your usual display manager. Nothing is removed or disabled.',
  barrasYNotificacionesSiOtra:
    '**Bars and notifications**: if another shell or notification daemon already runs in your session, they will coexist until you decide. The Hornero shell kills no foreign processes; turn the other autostart off when you want only one.',
  tusDotfilesGtkQtTerminal:
    '**Your dotfiles**: GTK/Qt, terminal and login shell only change where you had nothing. Whatever seeding created is listed in its output; deleting those files returns you exactly to the previous state.',
  volverAtras: 'Rolling back',
  desinstalarEsQuitarPaquetesTu:
    'Uninstalling is removing packages: your configuration and data stay where they were, and your previous session keeps starting as always.',
  siSembrasteConfiguracionLosUnicos:
    'If you seeded configuration, the only new files are the ones seeding listed when it ran: deleting them is optional and safe if you never edited them.',
  alcanceHonesto: 'Honest scope',
  losPaquetesTraenElEscritorio:
    'The packages bring the full desktop and the experience modes. Each edition’s applications (the Studio creative stack, Steam and friends on Gaming) install with pacman/yay like on any Arch: switching modes does not install applications for you. The ISO remains the path that provisions a whole edition.',
  derivadosDeArchCachyosEndeavouros:
    'Arch derivatives (CachyOS, EndeavourOS and others) are not officially verified: the packages are the same, but treat that path as experimental.',
  preguntasFrecuentes: 'FAQ',
  problemasPorSintoma: 'Troubleshooting by symptom',
  releasesYPaquetesVigentes: 'Current releases and packages',
  packagesAhead: (pkg: string | null | undefined): string =>
    `The packaged desktop can run ahead of the published ISO${pkg ? ` (today: packages ${pkg})` : ''}: updating is the usual yay -Syu, with a snapshot first if you want one (horneroctl config snapshot create --yes).`,
};

export const messages: Record<Locale, Messages> = { es, en };
