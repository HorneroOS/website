// User-facing one-line summaries per release (ES/EN).
// The generated `summary` in src/data/product/releases.json remains the
// engineering record; ReleasesPage renders these first and keeps the full
// technical summary available in a details element.
export const releaseNotes: Record<string, { es: string; en: string }> = {
  '0.2.0-preview40': {
    es: 'Actualización de paquetes sin ISO nueva: hornero-shell 1.3.8 con la auditoría del Centro de control (los guardados ya no pierden secciones de tu shell.json), hornero-config 0.4.9 y horneroctl-bin 0.2.0_preview52 firmados. La ISO de instalación sigue siendo la actual (0.2.0-preview32).',
    en: 'A package update with no new ISO: hornero-shell 1.3.8 with the Control Center audit (saves no longer drop sections of your shell.json), hornero-config 0.4.9 and signed horneroctl-bin 0.2.0_preview52. The install ISO is still the current one (0.2.0-preview32).',
  },
  '0.2.0-preview39': {
    es: 'Llega la Plataforma de compañeros con hornero-shell 1.3.7: Capi y Bitín oficiales como paquetes data-only (sin ejecutar código), instalables desde el catálogo. Sin ISO nueva; la actual sigue siendo la de preview32.',
    en: 'The Companion Platform arrives with hornero-shell 1.3.7: the official Capi and Bitín as data-only packages (no code execution), installable from the catalogue. No new ISO; the current one is still preview32.',
  },
  '0.2.0-preview38': {
    es: 'Agent Deck desembarca con PluginKit 5 (hornero-shell 1.3.6): el uso de tus agentes de IA como página propia del dashboard, con hornero-ai-usage 4.2.0 desde el catálogo y el esquema de uso v2 de horneroctl. Sin ISO nueva.',
    en: 'Agent Deck lands with PluginKit 5 (hornero-shell 1.3.6): your AI agents usage as a first-class dashboard page, with hornero-ai-usage 4.2.0 from the catalogue and horneroctl usage schema v2. No new ISO.',
  },
  '0.2.0-preview36': {
    es: 'Actualización de paquetes sin ISO nueva: hornero-shell 1.3.5 con el panel Extensiones del Centro de control, hornero-config 0.4.6 con la colección de 57 fondos y hornero-greeter 1.2.0 en Hornero Signal. Las instalaciones existentes lo reciben actualizando los paquetes del AUR; la ISO de instalación sigue siendo la actual (0.2.0-preview32).',
    en: 'A package update with no new ISO: hornero-shell 1.3.5 with the Control Center Extensions pane, hornero-config 0.4.6 with the 57-wallpaper collection and hornero-greeter 1.2.0 in Hornero Signal. Existing installs get it by updating their AUR packages; the install ISO is still the current one (0.2.0-preview32).',
  },
  '0.2.0-preview33': {
    es: 'Hornero Signal llega como actualización de paquetes, sin ISO nueva: hornero-shell 1.3.0, hornero-config 0.4.0, hornero-greeter 1.1.0 y horneroctl-bin 0.2.0_preview46 firmado. Las instalaciones existentes lo reciben actualizando los paquetes del AUR; la ISO de instalación sigue siendo la actual (0.2.0-preview32).',
    en: 'Hornero Signal arrives as a package update, with no new ISO: hornero-shell 1.3.0, hornero-config 0.4.0, hornero-greeter 1.1.0 and signed horneroctl-bin 0.2.0_preview46. Existing installs get it by updating their AUR packages; the install ISO is still the current one (0.2.0-preview32).',
  },
  '0.2.0-preview32': {
    es: 'La release de confiabilidad: la autenticación gráfica funciona desde la instalación, horneroctl gana actualizaciones seguras con chequeos previos, historial y aviso de reinicio, y recovery doctor diagnostica el estado de recuperación sin inventar rollback.',
    en: 'The reliability release: graphical authentication works from a fresh install, horneroctl gains safer updates with preflight checks, history and reboot-required reporting, and recovery doctor diagnoses recovery readiness without faking rollback.',
  },
  '0.2.0-preview31': {
    es: 'Arregla los paneles negros del Centro de control: Extensiones, Studio y Gaming vuelven a mostrar su interfaz completa, y un panel que falla ya no se esconde detrás de un rectángulo negro.',
    en: 'Fixes the black Control Center panels: Extensions, Studio and Gaming show their full interface again, and a failing panel no longer hides behind a black rectangle.',
  },
  '0.2.0-preview30': {
    es: 'Bluetooth desde el arranque, con emparejamiento desde la Shell, más las correcciones encontradas usándolo todos los días en pelicano.',
    en: 'Bluetooth out of the box, with pairing from the Shell, plus the fixes found by daily-driving it on pelicano.',
  },
  '0.2.0-preview29': {
    es: 'Diagnóstico de GPU NVIDIA más preciso en Gaming y correcciones del entorno live del instalador.',
    en: 'More accurate NVIDIA GPU diagnostics in Gaming and live-installer environment fixes.',
  },
  '0.2.0-preview28': {
    es: 'Zsh y nano como base de fábrica, identidad HorneroOS correcta en el sistema instalado y repositorios que sincronizan desde el primer día.',
    en: 'Zsh and nano as factory defaults, correct HorneroOS identity on the installed system and repositories that sync from day one.',
  },
  '0.2.0-preview25': {
    es: 'Audio PipeWire completo también en Desktop y Gaming, y grabación en OBS verificada de punta a punta.',
    en: 'Complete PipeWire audio on Desktop and Gaming too, with OBS recording verified end to end.',
  },
  '0.2.0-preview24': {
    es: 'La primera ISO que ofrece también Gaming en el instalador: Desktop, Studio y Gaming con Hyprland o Niri experimental.',
    en: 'The first ISO that also offers Gaming in the installer: Desktop, Studio and Gaming with Hyprland or experimental Niri.',
  },
  '0.2.0-preview23': {
    es: 'Nueva identidad visual del instalador Calamares, con la marca y los fondos insignia de HorneroOS.',
    en: 'A refreshed Calamares installer identity, with HorneroOS branding and flagship wallpapers.',
  },
  '0.2.0-preview22': {
    es: 'La primera ISO Preview publicada y firmada: Desktop y Studio instalables en una sola imagen.',
    en: 'The first published, signed Preview ISO: Desktop and Studio installable from a single image.',
  },
};
