// Message catalog for TryPage.astro — Rioplatense Spanish source shape + English parity.
import type { Locale } from '../ui';

const es = {
  pageTitle: 'Probar HorneroOS | Hornero Playground (Navegador, VM local y Live USB)',
  pageDescription:
    'Probá HorneroOS real sin modificar tu disco: stack autohospedable KVM + WebRTC en navegador, matriz honesta de VMs (QEMU, Quickemu, libvirt, VMware, VirtualBox, UTM, Hyper-V) y Live USB.',
  socialAlt: 'Hornero Playground: tres formas reales de probar HorneroOS sin borrar tu disco.',
  eyebrowPlayground: 'Hornero Playground',
  eyebrowRoute: 'horneroos.com/try',
  eyebrowArch: 'x86_64 · KVM + VirGL + Live USB',
  heroTitle: 'Probá HorneroOS real sin tocar tu disco.',
  heroLede:
    'Cada camino de esta página corre el sistema x86_64 real —Hyprland, Niri, Quickshell, Hornero Welcome, Hornero Apps y horneroctl— nunca una simulación en JavaScript. HorneroOS se usa a diario y está probado en al menos 3 computadoras físicas y en KVM: v0.2.0-preview42 ya publica el QCOW2 Desktop preinstalado y los paquetes AUR, mientras que la ISO instalable vigente sigue siendo v0.2.0-preview32.',
  ctaBrowser: 'En navegador / Self-host',
  ctaVm: 'VM local (60 FPS)',
  ctaQcow2: 'Descargar QCOW2 (v0.2.0-preview42)',
  ctaUsb: 'Live USB en hardware',
  appleSiliconNoticeTitle: 'Solo x86_64 · Aviso para Apple Silicon (Macs M1–M4)',
  appleSiliconNoticeBody:
    'HorneroOS compila únicamente imágenes x86_64 por ahora. En Macs con Apple Silicon (M1–M4), Hypervisor.framework no virtualiza x86_64 por hardware y UTM cae a emulación CPU QEMU TCG lenta; ARM64 nativo y Parallels FEX no están soportados. Para evaluar a 60 FPS usá una PC x86_64 o auto-hospedá Hornero Playground en Linux con /dev/kvm.',
  appleSiliconNoticeLink: 'Leer guía completa para Mac, Windows y Arch',
  comparisonHeaders: ['Camino', 'Ideal para', 'Gráficos y audio', 'Estado y límite'],
  comparisonRows: [
    {
      path: '1. Navegador (Hornero Playground)',
      bestFor: 'Evaluación instantánea sin instalar nada local',
      fidelity: 'WebRTC 60 FPS + PipeWire Opus (noVNC fallback sin audio ni 3D)',
      status: 'En espera (standby) sin proveedor cloud seleccionado · self-host listo con Docker + Terraform',
    },
    {
      path: '2. VM local preinstalada',
      bestFor: 'Escritorio fluido a 60 FPS con teclado completo y tiempo ilimitado',
      fidelity: 'KVM + VirGL acelerado en Linux (software fallback en VirtualBox, UTM ARM y Hyper-V)',
      status: 'QCOW2 v0.2.0-preview42 (2.6 GB, firmado con GPG) publicado hoy + launchers listos',
    },
    {
      path: '3. Live USB en tu equipo',
      bestFor: 'Probar GPU, Wi-Fi, audio y pantallas reales antes de instalar',
      fidelity: 'Velocidad nativa de hardware (incluye entrada Safe Graphics)',
      status: 'ISO firmada v0.2.0-preview32 disponible hoy · sin tocar el disco hasta confirmar Calamares',
    },
  ],
  browserEyebrow: 'Camino 01 · Navegador',
  browserTitle: 'HorneroOS Browser Playground (KVM efímero + WebRTC)',
  browserIntro:
    'HorneroOS/playground levanta una máquina virtual KVM descartable por visitante sobre un disco base de solo lectura + overlay Copy-on-Write con límite estricto de 15 minutos, y transmite el escritorio Wayland real y audio PipeWire al navegador vía WebRTC (con fallback noVNC si hace falta).',
  browserStandbyBadge: 'Standby · Esperando proveedor',
  browserActiveBadge: 'En vivo · Sesiones WebRTC activas',
  browserStatusTitle: 'Contrato de disponibilidad pública (sin sesiones falsas)',
  browserStatusBody:
    'Por defecto HorneroOS mantiene compromiso de gasto cloud $0/mes y ningún proveedor público seleccionado todavía (standby-awaiting-provider). El orquestador en Python 3.12+ stdlib, Docker Compose (coturn + WebRTC / noVNC) y Terraform/OpenTofu para Hetzner y GCP ya están listos para self-host. Las sesiones públicas en navegador solo se habilitan cuando PUBLIC_PLAYGROUND_ENABLED=true y PUBLIC_PLAYGROUND_URL apuntan a un clúster verificado.',
  browserActiveTitle: 'Sesión pública en navegador habilitada',
  browserActiveBody:
    'El endpoint verificado de Hornero Playground está activo mediante configuración. Cada sesión corre en una VM KVM efímera con TTL de 15 minutos y red restringida.',
  browserLaunchCta: 'Abrir sesión efímera en Hornero Playground',
  browserInfraLinksTitle: 'Guías de infraestructura y producción',
  browserInfraLinks: [
    { label: 'Kit de decisión de proveedores cloud', href: '/docs/infrastructure/cloud-provider-decision-kit/' },
    { label: 'Runbook de despliegue en 19 pasos', href: '/docs/infrastructure/playground-deployment-runbook/' },
    { label: 'Flujo de YouTube y Modo Presentador', href: '/docs/studio/youtube-production-workflow/' },
    { label: 'Estaciones virtuales y capturas Full HD', href: '/docs/contributing/virtual-workstations-and-screenshots/' },
  ],
  browserSecurityNotes: [
    'Efímero por diseño: al cerrar la pestaña o cumplirse los 15 minutos, el overlay CoW y la sesión se destruyen por completo.',
    'Aislamiento de red: los invitados usan netdev user,restrict=on y nftables por defecto; nunca ingreses contraseñas reales, SSH ni tokens en sesiones públicas.',
    'Por qué no WASM en el navegador: v86/WebVM no soportan x86_64 Wayland + VirGL para Hyprland y Quickshell.',
  ],
  browserQuickstartTitle: 'Self-host en tu propio servidor Linux con /dev/kvm',
  browserQuickstartCmd: `# Verificación en seco sin KVM
python3 -m hornero_playground --host 127.0.0.1 --port 8080 --dry-run --base-image /var/lib/hornero/horneroos.qcow2

# Stack de producción (orquestador + coturn + fallback noVNC)
docker compose -f browser/streaming/docker-compose.yml up -d`,
  browserRepoLabel: 'Ver arquitectura e IaC en HorneroOS/playground',
  vmEyebrow: 'Camino 02 · Máquina virtual local',
  vmTitle: 'VM local preinstalada (QCOW2 v0.2.0-preview42) o ISO verificada',
  vmIntro:
    'Correr HorneroOS en una VM local te da tiempo ilimitado, atajos completos sin conflicto con el navegador y aceleración VirGL a 60 FPS en Linux KVM.',
  vmDownloadEyebrow: 'Artefacto publicado y firmado · v0.2.0-preview42',
  vmDownloadTitle: 'Descargá el QCOW2 Desktop preinstalado (v0.2.0-preview42)',
  vmDownloadBody:
    'Imagen QEMU/KVM x86_64 preinstalada (UEFI OVMF, PipeWire, Hornero Signal, Hornero Apps y Hornero Welcome), comprimida con zstd y firmada con la clave GPG oficial de HorneroOS.',
  vmDownloadCta: (version: string, size: string): string =>
    `Descargar Desktop QCOW2 (v${version}, ${size}, GPG-signed)`,
  vmDownloadShaLabel: 'Checksum .sha256',
  vmDownloadSigLabel: 'Firma GPG .sig',
  vmDownloadManifestLabel: 'Manifiesto .manifest.json',
  vmDownloadReleaseLabel: 'Release v0.2.0-preview42',
  vmDownloadQuickstartLabel: 'Inicio rápido en QEMU/KVM (descomprimir, verificar y bootear con overlay efímero)',
  vmDownloadQuickstartCmd: (name: string): string => `# 1. Verificá integridad y firma antes de descomprimir
sha256sum -c ${name}.sha256
gpg --verify ${name}.sig ${name}

# 2. Descomprimí el disco QCOW2 (2.6 GB -> ~10 GB) y arrancá en KVM
zstd -d ${name}
./launchers/qemu/hornero-vm-run.sh \\
  --image ${name.replace(/\.zst$/, '')} \\
  --ephemeral`,
  vmImageNote:
    'Nota de artefactos: además del QCOW2 preinstalado v0.2.0-preview42 de arriba, podés bootear la ISO firmada v0.2.0-preview32 directo en QEMU, Quickemu, VMware o VirtualBox si querés probar el instalador Calamares.',
  liveCapturesEyebrow: 'Capturas reales en KVM',
  liveCapturesTitle: 'Capturas reales 1920×1080 en KVM UEFI Wayland (v0.2.0-preview42)',
  liveCapturesIntro:
    'Capturas reales sin edición tomadas dentro de la VM KVM UEFI de HorneroOS v0.2.0-preview42 (virtio-vga / Wayland / Quickshell), desde el greeter SDDM hasta el escritorio y las aplicaciones.',
  liveCaptures: [
    {
      src: '/captures/showcase/vm-sddm-greeter-1080p.webp',
      badge: 'SDDM Greeter · 1080p KVM',
      title: 'Hornero Greeter en SDDM (QMP screendump)',
      caption: 'Captura real live 1920×1080 UEFI KVM Wayland de v0.2.0-preview42 mostrando HorizonField y canales de usuario.',
      alt: 'Captura real en vivo 1920x1080 KVM UEFI de HorneroOS v0.2.0-preview42 mostrando el greeter SDDM Signal.',
    },
    {
      src: '/captures/showcase/vm-desktop-night-1080p.webp',
      badge: 'Signal Night · 1080p KVM',
      title: 'Escritorio Signal Night en vivo',
      caption: 'Captura real live 1920×1080 UEFI KVM Wayland de v0.2.0-preview42 en Signal Night con barra superior y wallpaper.',
      alt: 'Captura real en vivo 1920x1080 KVM UEFI de HorneroOS v0.2.0-preview42 mostrando el escritorio Signal Night.',
    },
    {
      src: '/captures/showcase/vm-desktop-day-1080p.webp',
      badge: 'Signal Day · 1080p KVM',
      title: 'Escritorio Signal Day (cerámica blanca)',
      caption: 'Captura real live 1920×1080 UEFI KVM Wayland de v0.2.0-preview42 tras cambiar en vivo a Signal Day.',
      alt: 'Captura real en vivo 1920x1080 KVM UEFI de HorneroOS v0.2.0-preview42 mostrando el escritorio Signal Day.',
    },
    {
      src: '/captures/showcase/vm-welcome-arrival-1080p.webp',
      badge: 'Hornero Welcome · 1080p KVM',
      title: 'Signal Flight Arrival (escena 01 / 09)',
      caption: 'Captura real live 1920×1080 UEFI KVM Wayland de v0.2.0-preview42 con Hornero Welcome en primer arranque.',
      alt: 'Captura real en vivo 1920x1080 KVM UEFI de HorneroOS v0.2.0-preview42 mostrando Hornero Welcome Arrival.',
    },
    {
      src: '/captures/showcase/vm-apps-discover-1080p.webp',
      badge: 'Hornero Apps · 1080p KVM',
      title: 'Hornero Apps Discover (271 apps)',
      caption: 'Captura real live 1920×1080 UEFI KVM Wayland de v0.2.0-preview42 mostrando el catálogo Hornero Apps.',
      alt: 'Captura real en vivo 1920x1080 KVM UEFI de HorneroOS v0.2.0-preview42 mostrando Hornero Apps Discover.',
    },
    {
      src: '/captures/showcase/vm-launcher-1080p.webp',
      badge: 'Launcher · 1080p KVM',
      title: 'Overlay Launcher en sesión Wayland',
      caption: 'Captura real live 1920×1080 UEFI KVM Wayland de v0.2.0-preview42 con el lanzador de Hornero Shell abierto.',
      alt: 'Captura real en vivo 1920x1080 KVM UEFI de HorneroOS v0.2.0-preview42 mostrando el Launcher.',
    },
  ],
  vmSizingTitle: 'Recursos recomendados',
  vmSizing: [
    { k: 'RAM', v: '4 GiB mínimo (6–8 GiB recomendado para Studio o navegadores)' },
    { k: 'CPU', v: '4 vCPUs' },
    { k: 'Disco', v: '32 GiB QCOW2/VDI dinámico (si instalás dentro de la VM)' },
    { k: 'Firmware', v: 'UEFI (OVMF) + verificación SHA-256 y GPG (FCFBEE43925AB5429362278AE59EAB44AA2498DC)' },
  ],
  vmMatrixTitle: 'Matriz honesta de compatibilidad entre hipervisores (4 niveles)',
  vmMatrixIntro:
    'Clasificamos cada hipervisor según pruebas reales sobre Hyprland (Aquamarine), Niri (Smithay) y Quickshell (Qt 6), sin prometer aceleración 3D donde no existe.',
  vmMatrixHeaders: ['Nivel', 'Hipervisor / Host', 'Driver / Backend', 'Aceleración', 'Detalle honesto'],
  vmTierLabels: {
    'officially-tested': 'Probado oficialmente',
    'compatible-with-limitations': 'Compatible con limitaciones',
    'software-fallback': 'Fallback por software',
    unsupported: 'No soportado',
  },
  vmAccelYes: 'Sí (GPU / 3D)',
  vmAccelNo: 'No (CPU / N/A)',
  vmEntryNotes: {
    'qemu-kvm': 'Camino principal a 60 FPS con virtio-vga-gl, OVMF UEFI y overlays efímeros CoW mediante hornero-vm-run.sh.',
    libvirt: '60 FPS vía VirtIO 3D (virgl) en virt-manager con firmware UEFI (OVMF_CODE.4m.fd) y OpenGL habilitado.',
    quickemu: 'Arranque en un comando con horneroos.conf (boot="efi", gl="on") y 60 FPS nativos en Linux.',
    vmware: 'Utilizable con svga.enable3d = "TRUE" (vmwgfx). Si Quickshell queda en blanco, usá QSG_RHI_BACKEND=opengl o software.',
    'gnome-boxes': 'Reutiliza libvirt/VirGL de forma simple; ofrece menos controles finos para OVMF o Venus.',
    virtualbox: 'Desactivá Enable 3D Acceleration (VMSVGA 3D provoca pantallas negras) y exportá LIBGL_ALWAYS_SOFTWARE=1 + QT_QUICK_BACKEND=software.',
    utm: 'Virtualiza bien en Mac Intel; en Apple Silicon (M1–M4) cae a emulación CPU QEMU TCG x86_64 muy lenta.',
    'hyper-v': 'Las VMs Linux Gen 2 no tienen Mesa Gallium3D nativo y caen a hyperv_fb + llvmpipe por CPU.',
    'arm64-native': 'HorneroOS publica compilaciones x86_64 únicamente por ahora.',
    'parallels-arm64': 'La emulación x86_64 derivada de FEX es lenta y Parallels Tools falla bajo sesiones Wayland puras.',
  },
  vmTabsLabel: 'Elegí tu hipervisor',
  copyLabel: 'Copiar',
  copiedLabel: 'Copiado',
  copyAria: 'Copiar comandos del hipervisor seleccionado',
  hypervisors: [
    {
      id: 'qemu',
      label: 'QEMU / KVM (Linux)',
      badge: 'Probado oficialmente · 60 FPS VirGL',
      summary:
        'Aceleración GPU nativa vía VirGL (virtio-vga-gl) + OVMF UEFI y overlay efímero CoW sin modificar la imagen base.',
      command: `./launchers/qemu/hornero-vm-run.sh \\
  --image /ruta/a/horneroos.qcow2 \\
  --verify-sha256 /ruta/a/horneroos.qcow2.sha256 \\
  --ephemeral

# O bootear directo la ISO oficial v0.2.0-preview32:
./launchers/qemu/hornero-vm-run.sh --iso /ruta/a/horneroos-2026.10-preview32-x86_64.iso`,
      caveat: 'Requiere /dev/kvm y qemu-system-x86_64 en Linux. Usá --dry-run para inspeccionar los argumentos antes de lanzar.',
    },
    {
      id: 'quickemu',
      label: 'Quickemu',
      badge: 'Probado oficialmente · 1 archivo',
      summary:
        'Usá Quickemu con horneroos.conf junto a tu imagen QCOW2 o ISO oficial.',
      command: `cat <<'EOF' > horneroos.conf
guest_os="linux"
disk_img="horneroos/disk.qcow2"
disk_size="32G"
ram="4G"
cpu_cores="4"
boot="efi"
gl="on"
preallocation="metadata"
# Si booteás la ISO viva en lugar de un disco preinstalado:
# iso="horneroos/horneroos-2026.10-preview32-x86_64.iso"
EOF

quickemu --vm horneroos.conf`,
      caveat: 'Mantiene soporte EFI y OpenGL (gl="on") listo para compositores Wayland.',
    },
    {
      id: 'libvirt',
      label: 'libvirt / virt-manager',
      badge: 'Probado oficialmente · VirGL',
      summary:
        'Importá un dominio UEFI OVMF con video Virtio 3D en virt-manager o GNOME Boxes.',
      command: `./launchers/libvirt/hornero-libvirt-import.sh \\
  --name horneroos-preview \\
  --image /var/lib/libvirt/images/horneroos.qcow2 \\
  --gpu virgl`,
      caveat: 'Asegurate de seleccionar firmware UEFI (OVMF_CODE.4m.fd) y display Spice/GTK con OpenGL habilitado.',
    },
    {
      id: 'vmware',
      label: 'VMware Workstation / Fusion',
      badge: 'Compatible con limitaciones · SVGA3D',
      summary:
        'VMware Workstation Pro y Fusion son gratuitos para uso personal y exponen vmwgfx, mucho más estable que VirtualBox bajo Wayland.',
      command: `./launchers/vmware/hornero-vmware-convert.sh \\
  --image /ruta/a/horneroos.qcow2 \\
  --out ./horneroos-vmware.ova`,
      caveat: 'Habilitá "Accelerate 3D graphics" (svga.enable3d = "TRUE"). Si Quickshell muestra pantalla en blanco en tu GPU anfitriona, probá QSG_RHI_BACKEND=opengl o software.',
    },
    {
      id: 'virtualbox',
      label: 'VirtualBox (fallback software)',
      badge: 'Fallback software · Sin aceleración 3D',
      summary:
        'La aceleración 3D VMSVGA de VirtualBox provoca pantallas negras o cierres inmediatos bajo Hyprland y Niri.',
      command: `./launchers/virtualbox/hornero-vbox-import.sh \\
  --image /ruta/a/horneroos.qcow2

# En sesión invitada sin 3D (fallback explícito):
export LIBGL_ALWAYS_SOFTWARE=1
export QT_QUICK_BACKEND=software`,
      caveat: 'Desmarcá "Enable 3D Acceleration" y asigná 128 MB de memoria de video. Esperá animaciones más lentas y mayor uso de CPU.',
    },
    {
      id: 'utm',
      label: 'macOS UTM (advertencia Apple Silicon)',
      badge: 'Fallback software · Emulación TCG en M1–M4',
      summary:
        'HorneroOS compila solo imágenes x86_64 por ahora. En Mac con Intel virtualiza bien; en Apple Silicon no existe KVM para x86_64.',
      command: `./launchers/utm/build-utm-bundle.sh \\
  --image /ruta/a/horneroos.qcow2 \\
  --out ./HorneroOS.utm`,
      caveat: 'Advertencia honesta: en Macs M1–M4, UTM cae a emulación CPU por software (QEMU TCG). Hyprland, Niri y Quickshell se sienten notablemente lentos; para evaluar fluidez usá una máquina x86_64 o el Playground web cuando haya slots.',
    },
  ],
  usbEyebrow: 'Camino 03 · Tu hardware real',
  usbTitle: 'Live USB sin alterar tus discos',
  usbIntro:
    'Arrancá la ISO oficial firmada v0.2.0-preview32 desde un pendrive para probar tu GPU, Wi-Fi, audio y pantallas en memoria antes de decidir instalar.',
  usbSteps: [
    {
      n: '01',
      title: 'Descargá y verificá',
      body: 'Bajá horneroos-2026.10-preview32-x86_64.iso (2.7 GB) y verificá su SHA-256 y firma GPG.',
      cmd: `sha256sum horneroos-2026.10-preview32-x86_64.iso
gpg --verify horneroos-2026.10-preview32-x86_64.iso.sig`,
    },
    {
      n: '02',
      title: 'Grabá y arrancá (con Safe Graphics)',
      body: 'Confirmá el dispositivo con lsblk, escribí la ISO y desactivá Secure Boot si bloquea el arranque. Si tu GPU da pantalla negra, elegí Safe Graphics en el menú de arranque (nomodeset WLR_RENDERER=pixman).',
      cmd: `sudo dd if=horneroos-2026.10-preview32-x86_64.iso of=/dev/sdX bs=4M status=progress conv=fsync`,
    },
    {
      n: '03',
      title: 'Explorá sin compromiso',
      body: 'La sesión viva entra automático en Hyprland como hornero-live sin bloqueo por inactividad. Probá Hornero Welcome, temas, layouts y diagnóstico. Nada toca tu disco hasta confirmar particiones en Calamares.',
      cmd: `horneroctl doctor
horneroctl version`,
    },
  ],
  presenterEyebrow: 'Demos, YouTube y base visual',
  presenterTitle: 'Modo Presentador y estándar Full HD 1920×1080',
  presenterBody:
    'Para grabar demos, videos de YouTube o presentar en vivo sin notificaciones ni banners, usá el helper de HorneroOS/playground o el IPC de No Molestar incluido en Hornero Shell.',
  visualBaselineLabel: (official: string, premium: string, profiles: number): string =>
    `Base visual oficial: ${official} Full HD (escala 1.0) · Variantes hasta ${premium} 4K · ${profiles} perfiles de pantalla en QA y Demo Studio`,
  presenterCmd: `# Con el helper de HorneroOS/playground instalado:
hornero-presenter on
hornero-presenter off

# En cualquier HorneroOS instalado (IPC de Quickshell + horneroctl):
qs ipc call notifs enableDnd && horneroctl mode set focus
horneroctl capture screenshot
horneroctl capture record`,
  presenterGuideLabel: 'Leer guía completa de producción YouTube y Kdenlive',
  nextLinksTitle: 'Seguir explorando',
  nextLinks: [
    { label: 'Descargar ISO o instalar en Arch', href: '/install' },
    { label: 'Explorar Hornero Apps (271 apps)', href: '/apps' },
    { label: 'Recorrer Hornero Welcome', href: '/welcome' },
    { label: 'Guía completa en Docs', href: '/docs/getting-started/try-horneroos/' },
  ],
};

export type Messages = typeof es;

const en: Messages = {
  pageTitle: 'Try HorneroOS | Hornero Playground (Browser, Local VM & Live USB)',
  pageDescription:
    'Try real HorneroOS without touching your disk: self-hostable KVM + WebRTC browser stack, honest VM compatibility matrix (QEMU, Quickemu, libvirt, VMware, VirtualBox, UTM, Hyper-V), and Live USB.',
  socialAlt: 'Hornero Playground: three real ways to try HorneroOS without wiping your disk.',
  eyebrowPlayground: 'Hornero Playground',
  eyebrowRoute: 'horneroos.com/try',
  eyebrowArch: 'x86_64 · KVM + VirGL + Live USB',
  heroTitle: 'Try real HorneroOS without touching your disk.',
  heroLede:
    'Every path on this page boots real x86_64 HorneroOS — Hyprland, Niri, Quickshell, Hornero Welcome, Hornero Apps, and horneroctl — never a mocked JavaScript desktop. HorneroOS is daily-driven and tested on 3+ physical computers as well as KVM: v0.2.0-preview42 ships the preinstalled Desktop QCOW2 and AUR packages today, while the current install ISO remains v0.2.0-preview32.',
  ctaBrowser: 'Browser / Self-host',
  ctaVm: 'Local VM (60 FPS)',
  ctaQcow2: 'Download QCOW2 (v0.2.0-preview42)',
  ctaUsb: 'Live USB on hardware',
  appleSiliconNoticeTitle: 'x86_64 only · Apple Silicon (M1–M4 Macs) notice',
  appleSiliconNoticeBody:
    'HorneroOS builds x86_64 images only right now. On Apple Silicon Macs (M1–M4), Hypervisor.framework cannot hardware-virtualize x86_64, so UTM falls back to slow QEMU TCG CPU emulation; native ARM64 and Parallels FEX are unsupported. For representative 60 FPS evaluation, use an x86_64 PC or self-host Hornero Playground on Linux with /dev/kvm.',
  appleSiliconNoticeLink: 'Read full Mac, Windows & Arch launch guide',
  comparisonHeaders: ['Path', 'Best for', 'Graphics & audio', 'Status & limits'],
  comparisonRows: [
    {
      path: '1. Browser (Hornero Playground)',
      bestFor: 'Zero-install instant evaluation in a web browser',
      fidelity: '60 FPS WebRTC + PipeWire Opus audio (noVNC fallback has no audio or 3D)',
      status: 'Standby awaiting cloud provider selection · self-hostable Docker + Terraform stack ready',
    },
    {
      path: '2. Local preinstalled VM',
      bestFor: 'Smooth 60 FPS desktop with full keyboard shortcuts and unlimited time',
      fidelity: 'Hardware KVM + VirGL on Linux (software fallback on VirtualBox, ARM UTM & Hyper-V)',
      status: 'v0.2.0-preview42 QCOW2 (2.6 GB, GPG-signed) published today + launchers ready',
    },
    {
      path: '3. Live USB on your hardware',
      bestFor: 'Testing real GPU, Wi-Fi, audio, and displays before installing',
      fidelity: 'Native hardware speed (includes Safe Graphics boot entry)',
      status: 'Signed v0.2.0-preview32 ISO available today · nothing touches disk until Calamares confirms',
    },
  ],
  browserEyebrow: 'Path 01 · Browser',
  browserTitle: 'HorneroOS Browser Playground (ephemeral KVM + WebRTC)',
  browserIntro:
    'HorneroOS/playground spins up a disposable KVM virtual machine per visitor from a read-only base image + Copy-on-Write overlay with a strict 15-minute TTL, streaming the real Wayland desktop and PipeWire audio over WebRTC (with a noVNC fallback).',
  browserStandbyBadge: 'Standby · Awaiting provider',
  browserActiveBadge: 'Live · WebRTC sessions enabled',
  browserStatusTitle: 'Public availability contract (zero fake sessions)',
  browserStatusBody:
    'HorneroOS commits to $0/month default cloud spend and no public cloud provider has been selected yet (standby-awaiting-provider). Today the pure Python 3.12+ stdlib orchestrator, Docker Compose stack (coturn + WebRTC / noVNC), and Terraform/OpenTofu modules for Hetzner and GCP are published for self-hosting. Public browser sessions activate only when PUBLIC_PLAYGROUND_ENABLED=true and PUBLIC_PLAYGROUND_URL point to a verified cluster.',
  browserActiveTitle: 'Public browser session launcher enabled',
  browserActiveBody:
    'A verified Hornero Playground endpoint is active via configuration. Every session runs in an ephemeral KVM virtual machine with a 15-minute TTL and restricted egress.',
  browserLaunchCta: 'Launch ephemeral Hornero Playground session',
  browserInfraLinksTitle: 'Infrastructure & production guides',
  browserInfraLinks: [
    { label: 'Cloud Provider Decision Kit', href: '/docs/infrastructure/cloud-provider-decision-kit/' },
    { label: '19-Step Deployment Runbook', href: '/docs/infrastructure/playground-deployment-runbook/' },
    { label: 'YouTube & Presenter Workflow', href: '/docs/studio/youtube-production-workflow/' },
    { label: 'Virtual Workstations & Full HD Captures', href: '/docs/contributing/virtual-workstations-and-screenshots/' },
  ],
  browserSecurityNotes: [
    'Ephemeral by design: closing the tab or hitting the 15-minute limit destroys the CoW overlay and session permanently.',
    'Isolated guest egress: visitors run behind netdev user,restrict=on and nftables drops by default; never enter real passwords, SSH keys, or tokens in public sessions.',
    'Why not in-browser WASM: v86/WebVM cannot run x86_64 Wayland + VirGL for Hyprland and Quickshell.',
  ],
  browserQuickstartTitle: 'Self-host on any Linux server with /dev/kvm',
  browserQuickstartCmd: `# Dry-run verification (no KVM required)
python3 -m hornero_playground --host 127.0.0.1 --port 8080 --dry-run --base-image /var/lib/hornero/horneroos.qcow2

# Production container stack (orchestrator + coturn + noVNC fallback)
docker compose -f browser/streaming/docker-compose.yml up -d`,
  browserRepoLabel: 'Inspect architecture & Terraform IaC on HorneroOS/playground',
  vmEyebrow: 'Path 02 · Local Virtual Machine',
  vmTitle: 'Preinstalled Desktop QCOW2 (v0.2.0-preview42) or verified ISO',
  vmIntro:
    'Running HorneroOS in a local VM gives you unlimited time, full compositor keybindings without browser collisions, and 60 FPS VirGL acceleration on Linux KVM.',
  vmDownloadEyebrow: 'Published & signed artifact · v0.2.0-preview42',
  vmDownloadTitle: 'Download Preinstalled Desktop QCOW2 (v0.2.0-preview42)',
  vmDownloadBody:
    'Preinstalled x86_64 QEMU/KVM desktop disk (UEFI OVMF, PipeWire, Hornero Signal, Hornero Apps, and Hornero Welcome), zstd-compressed and signed with the official HorneroOS GPG release key.',
  vmDownloadCta: (version: string, size: string): string =>
    `Download Preinstalled Desktop QCOW2 (v${version}, ${size}, GPG-signed)`,
  vmDownloadShaLabel: 'Checksum .sha256',
  vmDownloadSigLabel: 'GPG signature .sig',
  vmDownloadManifestLabel: 'Manifest .manifest.json',
  vmDownloadReleaseLabel: 'Release v0.2.0-preview42',
  vmDownloadQuickstartLabel: 'Quickstart on QEMU/KVM (verify, decompress, and boot with ephemeral CoW overlay)',
  vmDownloadQuickstartCmd: (name: string): string => `# 1. Verify checksum and GPG signature before decompressing
sha256sum -c ${name}.sha256
gpg --verify ${name}.sig ${name}

# 2. Decompress the QCOW2 image (2.6 GB -> ~10 GB) and boot in KVM
zstd -d ${name}
./launchers/qemu/hornero-vm-run.sh \\
  --image ${name.replace(/\.zst$/, '')} \\
  --ephemeral`,
  vmImageNote:
    'Artifact note: alongside the published v0.2.0-preview42 preinstalled QCOW2 above, you can still boot the signed v0.2.0-preview32 ISO directly in QEMU, Quickemu, VMware, or VirtualBox to test the Calamares installer.',
  liveCapturesEyebrow: 'Real KVM captures',
  liveCapturesTitle: 'Real live 1920×1080 UEFI KVM Wayland captures (v0.2.0-preview42)',
  liveCapturesIntro:
    'Unedited full-desktop captures taken directly inside the booted HorneroOS v0.2.0-preview42 UEFI KVM virtual machine (virtio-vga / Wayland / Quickshell), from SDDM login to the live desktop and apps.',
  liveCaptures: [
    {
      src: '/captures/showcase/vm-sddm-greeter-1080p.webp',
      badge: 'SDDM Greeter · 1080p KVM',
      title: 'Hornero Greeter on SDDM (QMP screendump)',
      caption: 'Real live 1920×1080 UEFI KVM Wayland capture of v0.2.0-preview42 showing HorizonField and account channels.',
      alt: 'Real live 1920x1080 UEFI KVM Wayland capture of HorneroOS v0.2.0-preview42 showing the SDDM Signal greeter.',
    },
    {
      src: '/captures/showcase/vm-desktop-night-1080p.webp',
      badge: 'Signal Night · 1080p KVM',
      title: 'Live Signal Night desktop',
      caption: 'Real live 1920×1080 UEFI KVM Wayland capture of v0.2.0-preview42 in Signal Night with top bar and wallpaper.',
      alt: 'Real live 1920x1080 UEFI KVM Wayland capture of HorneroOS v0.2.0-preview42 showing the Signal Night desktop.',
    },
    {
      src: '/captures/showcase/vm-desktop-day-1080p.webp',
      badge: 'Signal Day · 1080p KVM',
      title: 'Live Signal Day (white ceramic) desktop',
      caption: 'Real live 1920×1080 UEFI KVM Wayland capture of v0.2.0-preview42 after switching live to Signal Day.',
      alt: 'Real live 1920x1080 UEFI KVM Wayland capture of HorneroOS v0.2.0-preview42 showing the Signal Day desktop.',
    },
    {
      src: '/captures/showcase/vm-welcome-arrival-1080p.webp',
      badge: 'Hornero Welcome · 1080p KVM',
      title: 'Signal Flight Arrival (scene 01 / 09)',
      caption: 'Real live 1920×1080 UEFI KVM Wayland capture of v0.2.0-preview42 running Hornero Welcome First Flight.',
      alt: 'Real live 1920x1080 UEFI KVM Wayland capture of HorneroOS v0.2.0-preview42 showing Hornero Welcome Arrival.',
    },
    {
      src: '/captures/showcase/vm-apps-discover-1080p.webp',
      badge: 'Hornero Apps · 1080p KVM',
      title: 'Hornero Apps Discover (271 apps)',
      caption: 'Real live 1920×1080 UEFI KVM Wayland capture of v0.2.0-preview42 browsing the Hornero Apps catalog.',
      alt: 'Real live 1920x1080 UEFI KVM Wayland capture of HorneroOS v0.2.0-preview42 showing Hornero Apps Discover.',
    },
    {
      src: '/captures/showcase/vm-launcher-1080p.webp',
      badge: 'Launcher · 1080p KVM',
      title: 'Live Launcher overlay in Wayland session',
      caption: 'Real live 1920×1080 UEFI KVM Wayland capture of v0.2.0-preview42 with the Hornero Shell launcher open.',
      alt: 'Real live 1920x1080 UEFI KVM Wayland capture of HorneroOS v0.2.0-preview42 showing the live Launcher.',
    },
  ],
  vmSizingTitle: 'Recommended VM sizing',
  vmSizing: [
    { k: 'RAM', v: '4 GiB minimum (6–8 GiB recommended for Studio or browsers)' },
    { k: 'CPU', v: '4 vCPUs' },
    { k: 'Disk', v: '32 GiB dynamic QCOW2/VDI (when installing inside the VM)' },
    { k: 'Firmware', v: 'UEFI (OVMF) + SHA-256 & GPG check (FCFBEE43925AB5429362278AE59EAB44AA2498DC)' },
  ],
  vmMatrixTitle: 'Honest 4-tier VM compatibility matrix',
  vmMatrixIntro:
    'Every hypervisor tier reflects real behavior with Hyprland (Aquamarine), Niri (Smithay), and Quickshell (Qt 6)—never claiming 3D acceleration where guests fall back to CPU.',
  vmMatrixHeaders: ['Tier', 'Hypervisor / Host', 'Driver / Backend', 'Acceleration', 'Honest caveat'],
  vmTierLabels: {
    'officially-tested': 'Officially tested',
    'compatible-with-limitations': 'Compatible with limitations',
    'software-fallback': 'Software fallback',
    unsupported: 'Unsupported',
  },
  vmAccelYes: 'Yes (GPU / 3D)',
  vmAccelNo: 'No (CPU / N/A)',
  vmEntryNotes: {
    'qemu-kvm': 'Primary 60 FPS path using virtio-vga-gl, OVMF UEFI, and ephemeral CoW overlays via hornero-vm-run.sh.',
    libvirt: '60 FPS via VirtIO 3D (virgl) in virt-manager with UEFI firmware (OVMF_CODE.4m.fd) and OpenGL display enabled.',
    quickemu: 'Single-command 60 FPS launch with horneroos.conf (boot="efi", gl="on") on Linux hosts.',
    vmware: 'Usable with svga.enable3d = "TRUE" (vmwgfx). If Quickshell blanks on your GPU, export QSG_RHI_BACKEND=opengl or software.',
    'gnome-boxes': 'Reuses libvirt/VirGL out of the box; exposes fewer custom OVMF or Venus controls.',
    virtualbox: 'Uncheck Enable 3D Acceleration (VMSVGA 3D causes black screens/crashes) and export LIBGL_ALWAYS_SOFTWARE=1 + QT_QUICK_BACKEND=software.',
    utm: 'Near-native speed on Intel Macs; on Apple Silicon (M1–M4) falls back to slow QEMU TCG x86_64 CPU emulation.',
    'hyper-v': 'Standard Gen 2 Linux VMs lack upstream Mesa Gallium3D drivers and fall back to hyperv_fb + llvmpipe on CPU.',
    'arm64-native': 'HorneroOS publishes x86_64 builds only right now.',
    'parallels-arm64': 'FEX-derived x86_64 emulation is slow and Parallels Tools break under pure Wayland sessions.',
  },
  vmTabsLabel: 'Select your hypervisor',
  copyLabel: 'Copy',
  copiedLabel: 'Copied',
  copyAria: 'Copy commands for the selected hypervisor',
  hypervisors: [
    {
      id: 'qemu',
      label: 'QEMU / KVM (Linux)',
      badge: 'Officially tested · 60 FPS VirGL',
      summary:
        'Hardware-accelerated GPU via VirGL (virtio-vga-gl) + OVMF UEFI and ephemeral CoW overlays leaving the base image untouched.',
      command: `./launchers/qemu/hornero-vm-run.sh \\
  --image /path/to/horneroos.qcow2 \\
  --verify-sha256 /path/to/horneroos.qcow2.sha256 \\
  --ephemeral

# Or boot the official v0.2.0-preview32 Live ISO directly:
./launchers/qemu/hornero-vm-run.sh --iso /path/to/horneroos-2026.10-preview32-x86_64.iso`,
      caveat: 'Requires /dev/kvm and qemu-system-x86_64 on Linux. Pass --dry-run to inspect the generated QEMU command first.',
    },
    {
      id: 'quickemu',
      label: 'Quickemu',
      badge: 'Officially tested · 1 file',
      summary:
        'Drop horneroos.conf beside your QCOW2 image or verified ISO and boot in one command.',
      command: `cat <<'EOF' > horneroos.conf
guest_os="linux"
disk_img="horneroos/disk.qcow2"
disk_size="32G"
ram="4G"
cpu_cores="4"
boot="efi"
gl="on"
preallocation="metadata"
# If booting the Live ISO instead of a prebuilt disk:
# iso="horneroos/horneroos-2026.10-preview32-x86_64.iso"
EOF

quickemu --vm horneroos.conf`,
      caveat: 'Enables EFI and OpenGL (gl="on") cleanly for Wayland compositors.',
    },
    {
      id: 'libvirt',
      label: 'libvirt / virt-manager',
      badge: 'Officially tested · VirGL',
      summary:
        'Import a UEFI OVMF domain with Virtio 3D acceleration for virt-manager or GNOME Boxes.',
      command: `./launchers/libvirt/hornero-libvirt-import.sh \\
  --name horneroos-preview \\
  --image /var/lib/libvirt/images/horneroos.qcow2 \\
  --gpu virgl`,
      caveat: 'Use UEFI firmware (OVMF_CODE.4m.fd) and a Spice/GTK OpenGL-enabled display.',
    },
    {
      id: 'vmware',
      label: 'VMware Workstation / Fusion',
      badge: 'Compatible with limitations · SVGA3D',
      summary:
        'VMware Workstation Pro and Fusion are free for personal use and expose the upstream vmwgfx driver, handling Wayland much better than VirtualBox.',
      command: `./launchers/vmware/hornero-vmware-convert.sh \\
  --image /path/to/horneroos.qcow2 \\
  --out ./horneroos-vmware.ova`,
      caveat: 'Enable "Accelerate 3D graphics" (svga.enable3d = "TRUE"). If Quickshell renders blank on your host GPU, test QSG_RHI_BACKEND=opengl or software.',
    },
    {
      id: 'virtualbox',
      label: 'VirtualBox (software fallback)',
      badge: 'Software fallback · 3D disabled',
      summary:
        'VirtualBox VMSVGA 3D acceleration causes black screens or immediate crashes under Hyprland and Niri.',
      command: `./launchers/virtualbox/hornero-vbox-import.sh \\
  --image /path/to/horneroos.qcow2

# Inside the guest without 3D acceleration:
export LIBGL_ALWAYS_SOFTWARE=1
export QT_QUICK_BACKEND=software`,
      caveat: 'Uncheck "Enable 3D Acceleration" and allocate 128 MB video memory. Expect slower animations and higher CPU usage.',
    },
    {
      id: 'utm',
      label: 'macOS UTM (Apple Silicon caveat)',
      badge: 'Software fallback · TCG on M1–M4',
      summary:
        'HorneroOS builds x86_64 images only right now. Intel Macs can hardware-virtualize; Apple Silicon cannot hardware-virtualize x86_64.',
      command: `./launchers/utm/build-utm-bundle.sh \\
  --image /path/to/horneroos.qcow2 \\
  --out ./HorneroOS.utm`,
      caveat: 'Honest caveat: on Apple Silicon (M1–M4), UTM falls back to QEMU TCG software CPU emulation. Hyprland, Niri, and Quickshell will feel noticeably slow; use an x86_64 host or the hosted Browser Playground once slots open.',
    },
  ],
  usbEyebrow: 'Path 03 · Your own hardware',
  usbTitle: 'Live USB without modifying your drives',
  usbIntro:
    'Boot the signed v0.2.0-preview32 ISO from a USB stick to test real Wi-Fi, GPU, audio, and displays in RAM before deciding to install.',
  usbSteps: [
    {
      n: '01',
      title: 'Download & verify',
      body: 'Grab horneroos-2026.10-preview32-x86_64.iso (2.7 GB) and verify its SHA-256 checksum and GPG signature.',
      cmd: `sha256sum horneroos-2026.10-preview32-x86_64.iso
gpg --verify horneroos-2026.10-preview32-x86_64.iso.sig`,
    },
    {
      n: '02',
      title: 'Write & boot (Safe Graphics ready)',
      body: 'Confirm your USB device with lsblk, write the image, and disable Secure Boot if blocked. If your GPU hits a black screen, pick Safe Graphics in the boot menu (nomodeset WLR_RENDERER=pixman).',
      cmd: `sudo dd if=horneroos-2026.10-preview32-x86_64.iso of=/dev/sdX bs=4M status=progress conv=fsync`,
    },
    {
      n: '03',
      title: 'Explore non-destructively',
      body: 'The live session auto-logs into Hyprland as hornero-live with idle lock disabled. Explore Hornero Welcome, themes, layouts, and diagnostics. Nothing touches your internal disk until Calamares confirms partitioning.',
      cmd: `horneroctl doctor
horneroctl version`,
    },
  ],
  presenterEyebrow: 'Demos, YouTube & visual baseline',
  presenterTitle: 'Presenter Mode & 1920×1080 Full HD baseline',
  presenterBody:
    'For live talks, YouTube shoots, or clean walkthrough clips without notification popups, use the HorneroOS/playground presenter helper or the shipped Quickshell Do Not Disturb IPC.',
  visualBaselineLabel: (official: string, premium: string, profiles: number): string =>
    `Official visual baseline: ${official} Full HD (scale 1.0) · Variants up to ${premium} 4K · ${profiles} QA & Demo Studio display profiles`,
  presenterCmd: `# With the HorneroOS/playground presenter helper installed:
hornero-presenter on
hornero-presenter off

# On any installed HorneroOS desktop (Quickshell IPC + horneroctl):
qs ipc call notifs enableDnd && horneroctl mode set focus
horneroctl capture screenshot
horneroctl capture record`,
  presenterGuideLabel: 'Read full YouTube & Kdenlive production workflow',
  nextLinksTitle: 'Keep exploring',
  nextLinks: [
    { label: 'Download ISO or install on Arch', href: '/install' },
    { label: 'Explore Hornero Apps (271 apps)', href: '/apps' },
    { label: 'Tour Hornero Welcome', href: '/welcome' },
    { label: 'Read full Try guide in Docs', href: '/docs/getting-started/try-horneroos/' },
  ],
};

export const messages: Record<Locale, Messages> = { es, en };
