// Message catalog for ArchInstallPage.astro.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  // Meta
  socialAlt: 'Instalar HorneroOS sobre Arch Linux: paquetes del AUR, configuración inicial segura y arranque de sesión.',
  pageTitle: 'HorneroOS sobre Arch Linux | Instalación por paquetes',
  pageDescription:
    '¿Ya usás Arch? Instalá el escritorio HorneroOS como paquetes del AUR, sin reinstalar el sistema: requisitos, comandos listos para copiar, configuración segura y cómo volver atrás.',

  // Hero
  eyebrowInstall: 'Instalación',
  heroTitle: '¿Ya usás Arch? Convertilo en tu workstation HorneroOS',
  heroLede:
    'La ISO no es la única puerta de entrada. El escritorio completo —shell, defaults, greeter y la CLI del sistema— se publica en el AUR y se instala sobre tu Arch actual, sin reinstalar nada y sin pisar tus dotfiles.',
  ctaStartSteps: 'Ir a los pasos',
  ctaPreferIso: 'Prefiero la ISO completa',

  // Choose Your Path
  choosePathTitle: 'Elegí tu camino',
  choosePathIntro:
    'Dos puertas hacia el mismo escritorio Hornero Signal. Elegí la ISO si arrancás desde cero, o instalá los paquetes sobre tu Arch existente.',
  pathIsoBadge: 'Camino A · Instalación limpia',
  pathIsoTitle: 'ISO completa de HorneroOS',
  pathIsoDesc:
    'La experiencia lista de fábrica desde cero, con ediciones Desktop, Studio y Gaming, particionado Btrfs y defaults preconfigurados.',
  pathIsoBullets: [
    'Ideal para equipos nuevos o particiones limpias',
    'Provisiona las apps de Desktop, Studio o Gaming en un solo paso',
    'Imagen x86_64 firmada con SHA-256 y GPG',
  ],
  pathIsoCta: 'Ir a la descarga de la ISO',

  pathArchBadge: 'Camino B · Estás aquí',
  pathArchTitle: 'Sobre tu Arch Linux actual',
  pathArchDesc:
    'Instalás los 4 paquetes principales desde el AUR sobre tu sistema actual. Tu kernel, tus drivers, tus dotfiles y otros escritorios siguen intactos.',
  pathArchBullets: [
    'Sin reinstalar ni perder tu entorno actual',
    'El sembrado de configuración nunca sobrescribe archivos tuyos',
    'Actualizás con paru o yay como cualquier paquete de Arch',
  ],
  pathArchCta: 'Empezar con el paso 01',

  shellOnlyLabel: '¿Solo querés probar la shell?',
  shellOnlyText:
    'Si ya corrés Hyprland y querés evaluar la shell sin adoptar la configuración de HorneroOS, instalá solo',
  shellOnlySuffix: 'y ejecutá el comando de arranque manual del paso 03.',

  // Copy button
  copyLabel: 'Copiar',
  copiedLabel: 'Copiado',
  copyAria: 'Copiar comandos al portapapeles',

  // Steps section
  stepsEyebrow: 'Guía paso a paso',
  stepsTitle: 'De Arch a HorneroOS en 4 pasos',
  stepsIntro: 'Cada bloque está listo para copiar y pegar. Ningún paso borra tus archivos ni reemplaza tu display manager sin que vos lo pidas.',

  // Step 01: Prerequisites
  step1Title: 'Requisitos previos',
  step1Lead:
    'Antes de instalar los paquetes, asegurate de tener una base Arch actualizada y un ayudante del AUR.',
  step1Items: [
    {
      label: 'Arch Linux x86_64 al día',
      detail: 'Sistema actualizado con pacman -Syu. Derivados de Arch funcionan como ruta experimental.',
    },
    {
      label: 'Wayland + Hyprland o Niri',
      detail: 'Hyprland es el compositor soportado; Niri está disponible en modo experimental.',
    },
    {
      label: 'Ayudante del AUR (paru o yay)',
      detail: 'Necesitás git y base-devel para compilar paquetes del AUR como tu usuario normal.',
    },
    {
      label: 'Audio y GPU recomendados',
      detail: 'PipeWire + WirePlumber para audio completo y los drivers de tu GPU según la Arch Wiki.',
    },
  ],
  step1HelperSummary: '¿No tenés paru ni yay instalado? Instalá yay en 4 comandos',
  step1HelperNote:
    'El AUR es mantenido por la comunidad: revisá siempre el PKGBUILD antes de construir. Ejecutalo como tu usuario, nunca como root:',

  // Step 02: Install 4 core packages
  step2Title: 'Instalá los 4 paquetes principales',
  step2Lead:
    'El escritorio HorneroOS se compone de cuatro paquetes del AUR. Podés instalarlos con paru o yay junto con el soporte base de sesión:',
  corePackages: [
    { name: 'hornero-shell', role: 'Shell Quickshell, barra, centro de control y presets de layout' },
    { name: 'hornero-config', role: 'Defaults del escritorio, packs de temas Signal y script de sembrado' },
    { name: 'hornero-greeter', role: 'Pantalla de login Hornero Signal para SDDM (opcional)' },
    { name: 'horneroctl-bin', role: 'CLI nativa del sistema para diagnóstico, snapshots y hardware' },
  ],
  step2CmdPrimaryLabel: 'Con paru o yay (paquetes principales + soporte de sesión)',
  step2GreeterNote:
    '¿Usás greetd en lugar de SDDM? Reemplazá hornero-greeter por hornero-greeter-greetd (mismo diseño Signal como binario nativo). Ningún paquete cambia tu display manager automáticamente.',

  // Step 03: Initialize & verify
  step3Title: 'Inicializá, verificá y entrá a tu sesión',
  step3Lead:
    'Respaldá tus configs actuales, sembrá solo los archivos de fábrica que te falten (sin pisar los tuyos) y verificá el estado del sistema con horneroctl:',
  step3CmdSeedLabel: '1. Respaldo, simulación (--dry-run) y sembrado seguro',
  step3CmdVerifyLabel: '2. Diagnóstico del sistema, hardware y servicios opcionales',
  step3SessionNote:
    'Al terminar, cerrá sesión y elegí tu sesión Hyprland (o Hornero) en tu display manager: la shell arranca sola. Si estás probando solo la shell sin sembrar configuración, lanzala dentro de tu sesión actual con:',

  // Step 04: Power-user extras
  step4Title: 'Extras para usuarios avanzados',
  step4Lead:
    'Con el escritorio andando, explorá las herramientas que convierten a tu Arch en una estación de trabajo completa:',
  extras: [
    {
      title: 'Hornero Chromatic',
      desc: 'Cambiá paletas Signal Night, Signal Day y temas completos en vivo desde el Centro de control, sincronizando shell, terminal y apps.',
      cmd: 'horneroctl theme list',
    },
    {
      title: 'Webapps nativas',
      desc: 'Convertí cualquier herramienta web en una aplicación aislada con ventana propia, ícono y atajo desde la CLI.',
      cmd: 'horneroctl apps webapp',
    },
    {
      title: '35+ plugins con PluginKit 3',
      desc: 'Sumá integraciones oficiales desde el catálogo del Centro de control, como hornero-tailscale para tu red mesh o hornero-elsewhen para zonas horarias.',
      cmd: 'horneroctl plugin list',
    },
  ],
  step4LinksLead: 'Seguí explorando:',
  step4LinkFirstSteps: 'Primeros pasos tras instalar',
  step4LinkStepByStep: 'Guía paso a paso completa',
  step4LinkExtensions: 'Catálogo de extensiones',

  // Coexistence
  keepTitle: 'Qué pasa con lo que ya tenés',
  keepItems: [
    {
      title: 'Tu Hyprland manda',
      body: 'Si ya tenés ~/.config/hypr/hyprland.lua (o .conf), queda intacto. Los defaults del paquete viven en /etc/xdg como fallback; podés adoptar la entrada de fábrica y usar horneroctl config refresh-hypr cuando quieras.',
    },
    {
      title: 'Otros escritorios intactos',
      body: 'KDE, GNOME o cualquier otra sesión siguen instalados y seleccionables en tu display manager de siempre. Nada se desinstala ni se deshabilita.',
    },
    {
      title: 'Barras y notificaciones',
      body: 'La shell de Hornero no mata procesos ajenos. Si ya corrés otra barra o daemon de notificaciones, van a convivir hasta que apagues su autostart.',
    },
    {
      title: 'Tus dotfiles a salvo',
      body: 'GTK/Qt, terminal y shell de login solo se completan donde no tenías nada. Cada archivo creado por seed-user.sh queda listado en su salida.',
    },
  ],

  // Troubleshooting & Rollback
  rollbackTitle: 'Solución de problemas y rollback',
  rollbackIntro:
    'Si algo no se comporta como esperás o querés volver exactamente a tu estado anterior, tenés herramientas integradas y desinstalación limpia:',
  rollbackCards: [
    {
      title: 'Recuperación rápida y snapshots Btrfs',
      body: 'Creá un snapshot de configuración antes de cambios grandes y usá horneroctl recovery si necesitás restaurar un estado sano o inspeccionar snapshots Btrfs del sistema.',
      cmd: 'horneroctl config snapshot create --yes\nhorneroctl recovery',
    },
    {
      title: 'Desinstalar por completo',
      body: 'Quitar HorneroOS es desinstalar los paquetes. Tus datos y tu sesión anterior siguen funcionando como siempre.',
      cmd: 'paru -Rns hornero-shell hornero-config hornero-greeter horneroctl-bin',
    },
  ],

  // Honest scope
  scopeTitle: 'Alcance honesto',
  scopeItems: [
    'Los paquetes traen el escritorio completo y los modos de experiencia. Las apps de Studio o Gaming se instalan con pacman/paru/yay como en cualquier Arch; la ISO sigue siendo la ruta que provisiona una edición entera.',
    'Derivados de Arch (CachyOS, EndeavourOS y otros) no están verificados oficialmente: los paquetes son los mismos, pero tratá esa ruta como experimental.',
  ],
  packagesAhead: (pkg: string | null | undefined): string =>
    `El escritorio por paquetes puede ir por delante de la ISO publicada${pkg ? ` (hoy: paquetes ${pkg})` : ''}: actualizar es el paru -Syu / yay -Syu de siempre.`,
  linkFaq: 'Preguntas frecuentes',
  linkTroubleshooting: 'Problemas por síntoma',
  linkReleases: 'Releases y paquetes vigentes',
};

export type Messages = typeof es;

const en: Messages = {
  // Meta
  socialAlt: 'Install HorneroOS on Arch Linux: AUR packages, safe first-time setup and session start.',
  pageTitle: 'HorneroOS on Arch Linux | Package installation',
  pageDescription:
    'Already running Arch? Install the HorneroOS desktop from the AUR without reinstalling your system: prerequisites, copy-paste commands, safe dotfile seeding, and clean rollback.',

  // Hero
  eyebrowInstall: 'Install',
  heroTitle: 'Already run Arch? Make it your HorneroOS workstation',
  heroLede:
    'The ISO is not the only way in. The complete desktop — shell, defaults, greeter and the system CLI — ships as AUR packages and installs right on top of your current Arch system without touching your dotfiles.',
  ctaStartSteps: 'Jump to the steps',
  ctaPreferIso: 'I prefer the full ISO',

  // Choose Your Path
  choosePathTitle: 'Choose your path',
  choosePathIntro:
    'Two ways into the same Hornero Signal desktop. Pick the ISO for a fresh machine, or layer the packages onto your existing Arch installation.',
  pathIsoBadge: 'Path A · Fresh install',
  pathIsoTitle: 'Full HorneroOS ISO',
  pathIsoDesc:
    'The complete from-scratch experience with Desktop, Studio and Gaming editions, Btrfs layout, and factory defaults ready out of the box.',
  pathIsoBullets: [
    'Best for new machines or clean partitions',
    'Provisions Desktop, Studio or Gaming apps in one pass',
    'Signed x86_64 image with SHA-256 and GPG verification',
  ],
  pathIsoCta: 'Go to ISO download',

  pathArchBadge: 'Path B · You are here',
  pathArchTitle: 'Existing Arch Linux',
  pathArchDesc:
    'Install the 4 core HorneroOS packages from the AUR on top of your current system. Your kernel, drivers, dotfiles and other desktops stay untouched.',
  pathArchBullets: [
    'Zero reinstallation and zero dotfile overwrites',
    'First-time config seeding only fills in missing files',
    'Updates alongside your system via paru or yay',
  ],
  pathArchCta: 'Start with step 01',

  shellOnlyLabel: 'Just want to try the shell?',
  shellOnlyText:
    'If Hyprland is already running and you want to test the shell without adopting HorneroOS defaults, install only',
  shellOnlySuffix: 'and run the manual start command in step 03.',

  // Copy button
  copyLabel: 'Copy',
  copiedLabel: 'Copied',
  copyAria: 'Copy commands to clipboard',

  // Steps section
  stepsEyebrow: 'Step-by-step guide',
  stepsTitle: 'From Arch to HorneroOS in 4 steps',
  stepsIntro: 'Every command block is copy-paste ready. Nothing deletes your files or switches your display manager behind your back.',

  // Step 01: Prerequisites
  step1Title: 'Prerequisites',
  step1Lead:
    'Before installing the packages, make sure you have an up-to-date Arch base and an AUR helper.',
  step1Items: [
    {
      label: 'Updated Arch Linux x86_64',
      detail: 'Run pacman -Syu first. Arch derivatives work as an experimental path.',
    },
    {
      label: 'Wayland + Hyprland or Niri',
      detail: 'Hyprland is the supported compositor; Niri is available as an experimental option.',
    },
    {
      label: 'AUR helper (paru or yay)',
      detail: 'Requires git and base-devel to build AUR packages as your regular user.',
    },
    {
      label: 'Recommended audio & GPU',
      detail: 'PipeWire + WirePlumber for full audio and your GPU drivers per the Arch Wiki.',
    },
  ],
  step1HelperSummary: 'Need an AUR helper? Install yay in 4 commands',
  step1HelperNote:
    'The AUR is community-maintained: always review the PKGBUILD before building. Run this as your regular user, never as root:',

  // Step 02: Install 4 core packages
  step2Title: 'Install the 4 core packages',
  step2Lead:
    'The HorneroOS desktop is built from four AUR packages. Install them with paru or yay alongside base session support:',
  corePackages: [
    { name: 'hornero-shell', role: 'Quickshell desktop shell, bar, Control Center and layout presets' },
    { name: 'hornero-config', role: 'Desktop defaults, Signal theme packs and user seeding script' },
    { name: 'hornero-greeter', role: 'Hornero Signal login screen for SDDM (optional)' },
    { name: 'horneroctl-bin', role: 'Native system CLI for diagnostics, snapshots and hardware' },
  ],
  step2CmdPrimaryLabel: 'With paru or yay (core packages + session support)',
  step2GreeterNote:
    'Using greetd instead of SDDM? Swap hornero-greeter for hornero-greeter-greetd (same Signal design as a native binary). Neither package changes your display manager automatically.',

  // Step 03: Initialize & verify
  step3Title: 'Initialize, verify & launch your session',
  step3Lead:
    'Back up your existing configs, seed only the factory files you are missing (never overwriting yours), and verify system health with horneroctl:',
  step3CmdSeedLabel: '1. Backup, dry-run preview & safe config seeding',
  step3CmdVerifyLabel: '2. System diagnostics, hardware rollcall & optional services',
  step3SessionNote:
    'When done, log out and select your Hyprland (or Hornero) session in your display manager — the shell starts automatically. If you are testing the shell only without seeding config, launch it in your current session with:',

  // Step 04: Power-user extras
  step4Title: 'Power-user extras',
  step4Lead:
    'Once your desktop is running, unlock the tools that turn your Arch install into a complete workstation:',
  extras: [
    {
      title: 'Hornero Chromatic',
      desc: 'Switch between Signal Night, Signal Day and curated palettes live from Control Center, keeping shell, terminal and apps in sync.',
      cmd: 'horneroctl theme list',
    },
    {
      title: 'Native webapps',
      desc: 'Turn any web tool into an isolated desktop app with its own window, icon and launcher entry straight from the CLI.',
      cmd: 'horneroctl apps webapp',
    },
    {
      title: '35+ PluginKit 3 plugins',
      desc: 'Add official integrations from the Control Center catalogue, including hornero-tailscale for your mesh network and hornero-elsewhen for time zones.',
      cmd: 'horneroctl plugin list',
    },
  ],
  step4LinksLead: 'Keep exploring:',
  step4LinkFirstSteps: 'First steps after installing',
  step4LinkStepByStep: 'Complete step-by-step guide',
  step4LinkExtensions: 'Extensions catalogue',

  // Coexistence
  keepTitle: 'What happens to what you already have',
  keepItems: [
    {
      title: 'Your Hyprland wins',
      body: 'If you already have ~/.config/hypr/hyprland.lua (or .conf), it stays intact. Packaged defaults live in /etc/xdg as fallback; you can adopt the factory entrypoint and run horneroctl config refresh-hypr anytime.',
    },
    {
      title: 'Other desktops stay intact',
      body: 'KDE, GNOME or any other session remain installed and selectable in your display manager. Nothing is removed or disabled.',
    },
    {
      title: 'Bars & notifications',
      body: 'The Hornero shell never kills foreign processes. If another bar or notification daemon is running, they coexist until you disable its autostart.',
    },
    {
      title: 'Your dotfiles stay safe',
      body: 'GTK/Qt, terminal and login shell settings are only filled in where you had nothing. Every file created by seed-user.sh is printed in its output.',
    },
  ],

  // Troubleshooting & Rollback
  rollbackTitle: 'Troubleshooting & rollback',
  rollbackIntro:
    'If anything behaves unexpectedly or you want to return to your exact previous setup, built-in recovery tools and clean package removal have you covered:',
  rollbackCards: [
    {
      title: 'Quick recovery & Btrfs snapshots',
      body: 'Create a config snapshot before major changes and use horneroctl recovery to restore a healthy state or inspect Btrfs system snapshots.',
      cmd: 'horneroctl config snapshot create --yes\nhorneroctl recovery',
    },
    {
      title: 'Clean uninstall',
      body: 'Removing HorneroOS is just removing the packages. Your data and previous desktop session keep working as before.',
      cmd: 'paru -Rns hornero-shell hornero-config hornero-greeter horneroctl-bin',
    },
  ],

  // Honest scope
  scopeTitle: 'Honest scope',
  scopeItems: [
    'The packages deliver the full desktop and experience modes. Studio or Gaming edition apps install with pacman/paru/yay like on any Arch; the ISO remains the path that provisions an entire edition at once.',
    'Arch derivatives (CachyOS, EndeavourOS and others) are not officially verified: the packages are identical, but treat that path as experimental.',
  ],
  packagesAhead: (pkg: string | null | undefined): string =>
    `The packaged desktop can run ahead of the published ISO${pkg ? ` (today: packages ${pkg})` : ''}: updating is the usual paru -Syu / yay -Syu.`,
  linkFaq: 'FAQ',
  linkTroubleshooting: 'Troubleshooting by symptom',
  linkReleases: 'Current releases & packages',
};

export const messages: Record<Locale, Messages> = { es, en };
