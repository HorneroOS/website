// Message catalog for GreeterPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  laPantallaDeLoginDe:
    'La pantalla de login de HorneroOS: un greeter de SDDM original en Hornero Signal, con un horizonte generativo de la pampa, el saludo de Javi, las cuentas como canales y ninguna multimedia de terceros.',
  tarjetaSocialDelGreeterDe:
    "Tarjeta social del greeter de HorneroOS: la línea 'El greeter de Hornero' junto a los datos del diseño Signal (horizonte generativo, cuentas como canales, paletas e idiomas), sin ninguna captura.",
  antesDelEscritorio: 'Antes del escritorio',
  disenoSignalEnMainSin: 'Diseño Signal · en main, sin publicar',
  elGreeterDeHorneroos: 'El greeter de HorneroOS',
  laPantallaDeLoginEs:
    'La pantalla de login es un tema de SDDM del mismo universo que la pantalla de bloqueo de la shell: un panel de instrumentos sobre Signal Night, con tipografía IBM Plex, el reloj al centro y el saludo de Javi. Debajo va un solo módulo de ingreso donde las cuentas son canales (CH 01, CH 02…) y el selector de sesión lista lo que SDDM ofrece: Desktop, Studio y Gaming, con las sesiones experimentales al final y nunca como predeterminada.',
  elFondoNoEsUna:
    'El fondo no es una foto: es un horizonte de la pampa dibujado en código (HorizonField) —un sol a medio salir en franjas, un molino, un alambrado y una escala de instrumento sobre el horizonte— que se pinta una vez y queda quieto salvo el reloj. No se incluye ninguna foto ni video de terceros.',
  estadoEsteDisenoEstaEn: (v0: string | number | null | undefined): string =>
    `Estado: este diseño está en la rama principal del greeter (pin ${v0}) y todavía no está en un paquete publicado. El paquete publicado hornero-greeter 1.1.0 sigue siendo el greeter de paisajes; sus créditos quedan al final de esta página mientras esa versión siga publicada. Todavía no existe una captura de un login real con el nuevo diseño: hasta que exista, esta página no muestra ninguna imagen del greeter (la de abajo es la pantalla de bloqueo, rotulada como tal).`,
  unGreeterPropioEnSignal: 'Un greeter propio, en Signal',
  cadaPiezaSaleDelCodigo:
    'Cada pieza sale del código pineado del greeter; esta página no la recrea en el navegador ni la dibuja como si fuera una captura.',
  elHorizonteHorizonfield: 'El horizonte (HorizonField).',
  unCieloDeMarcasDe:
    'Un cielo de marcas de instrumento con constelaciones, sembrado por el nombre del equipo y la fecha: cada computadora tiene su cielo y cambia de un día para el otro. Se pinta una sola vez en un lienzo por software; el único movimiento ambiental es una línea de escaneo de un paso por segundo, apagada con movimiento reducido o alto contraste.',
  elRelojYJavi: 'El reloj y Javi.',
  esElRelojDeLa:
    'Es el reloj de la pantalla de bloqueo: números en Plex Sans Condensed, una sola línea de señal y la fecha en mono mayúsculas. Javi, el hornero de la shell, saluda según la hora con la voz cálida de la shell o con la neutra (voice=plain), y se puede ocultar (mascot=false).',
  lasCuentasComoCanales: 'Las cuentas como canales.',
  cadaCuentaEsUnCanal:
    'Cada cuenta es un canal con su tally y su barra on-air cuando está sintonizado, más un canal «Otro» opcional para escribir un nombre. El campo de contraseña se nombra según la cuenta elegida, y al lado van el selector de sesión y el de distribución de teclado.',
  susPropiasPaletas: 'Sus propias paletas.',
  correComoElUsuarioSddm: (v0: string | number | null | undefined): string =>
    `Corre como el usuario sddm antes de cualquier sesión, así que no puede leer tu paleta del Centro de control: trae ${v0}. colorScheme=auto sigue la preferencia clara u oscura solo cuando la plataforma la informa.`,
  variasPantallas: 'Varias pantallas.',
  elModuloDeIngresoVa:
    'El módulo de ingreso va en la pantalla principal de SDDM; las demás salidas muestran una placa tranquila con la marca, la hora y el aviso de ingresar en la pantalla principal.',
  erroresHonestos: 'Errores honestos.',
  unaContrasenaIncorrectaSeCuenta:
    'Una contraseña incorrecta se cuenta desde el segundo intento, Bloq Mayús se anuncia, sin sesiones instaladas el ingreso se deshabilita y se dice por qué, y si SDDM no responde en 12 segundos el greeter lo cuenta. Suspender, reiniciar y apagar piden confirmación con Cancelar enfocado.',
  rendersFueraDePantallaNo: 'Renders fuera de pantalla, no capturas',
  elRepositorioDelGreeterPublica:
    'El repositorio del greeter publica renders del tema real (sddm-greeter-qt6 --test-mode en la plataforma offscreen de Qt, con cuentas y sesiones de prueba): Signal Night, Signal Day, alto contraste con texto grande, 1366×768 y 1920×1080, la placa secundaria y los estados de error. Son la referencia de diseño vigente, pero no son capturas de un login real ni de un paquete publicado, así que este sitio los enlaza en vez de mostrarlos como capturas.',
  laListaCompletaDeRenders:
    'La lista completa de renders (con tamaños) vive en el repositorio del greeter pineado; esta página no muestra ninguna imagen del greeter hasta que exista una captura de un login real.',
  verLosRendersEnEl: 'Ver los renders en el repositorio',
  detallesTecnicos: 'Detalles técnicos',
  unTemaSddmEnQt6:
    'Un tema SDDM en Qt6/QML que funciona sin conexión y sin ningún pack multimedia. Quien administra el equipo puede elegir su propia imagen o video con backgroundImage en theme.conf: solo ese video elegido necesita Qt 6 Multimedia, y si el archivo falta o no se puede decodificar queda el horizonte generativo. Los valores de abajo son los predeterminados del theme.conf pineado, generados en cada sincronización de datos.',
  gestorDeLogin: 'Gestor de login',
  fondo: 'Fondo',
  horizonteGenerativo: 'Horizonte generativo',
  paleta: 'Paleta',
  esquemaDeColor: 'Esquema de color',
  vozDelSaludo: 'Voz del saludo',
  canalesDeCuenta: 'Canales de cuenta',
  confirmarEnergia: 'Confirmar energía',
  accesibilidad: 'Accesibilidad',
  idiomas: 'Idiomas',
  multimediaIncluida: 'Multimedia incluida',
  si: 'Sí',
  ninguna: 'Ninguna',
  componentes: 'Componentes',
  creditosDeLaVersionPublicada: 'Créditos de la versión publicada de paisajes',
  elPaquetePublicadoHorneroGreeter:
    'El paquete publicado hornero-greeter 1.1.0 todavía muestra estas escenas argentinas con licencia. El greeter Signal no las usa ni las incluye, y esta página ya no las reproduce; los créditos quedan acá mientras esa versión siga publicada.',
  fuente: 'Fuente ↗',
  fuenteYEstado: 'Fuente y estado',
  estaPaginaDescribeElGreeter:
    'Esta página describe el greeter; no autentica ni recopila credenciales. El tema real es de código abierto y HorneroOS es un sistema para uso diario, con limitaciones concretas y declaradas.',
  codigoDelGreeter: 'Código del greeter',
  consultaElEstadoDeInstalacion: 'Consultá el estado de instalación',
  comoSeHicieronLosRenders: 'Cómo se hicieron los renders',
  elGreeterSignalYLa: 'El greeter Signal y la pantalla de bloqueo, de verdad',
  estasSonLasCapturasReales:
    'Estas son las capturas reales previstas del greeter Signal (paletas, sesiones y energía, dos monitores) y de la pantalla de bloqueo. Se toman de un login real cuando el diseño esté publicado; hasta entonces cada espacio dice qué va a mostrar.',
};

export type Messages = typeof es;

const en: Messages = {
  laPantallaDeLoginDe:
    'The HorneroOS login screen: an original SDDM greeter on Hornero Signal, with a generative Pampa horizon, a greeting from Javi, accounts as channels and no third-party media.',
  tarjetaSocialDelGreeterDe:
    "HorneroOS greeter social card: the line 'The Hornero greeter' beside the Signal design data (generative horizon, accounts as channels, palettes and languages), with no screenshot.",
  antesDelEscritorio: 'Before the desktop',
  disenoSignalEnMainSin: 'Signal design · on main, unreleased',
  elGreeterDeHorneroos: 'The HorneroOS greeter',
  laPantallaDeLoginEs:
    'The login screen is an SDDM theme from the same universe as the shell lock screen: an instrument panel on Signal Night in IBM Plex type, with the clock in the centre and a greeting from Javi. Below it sits one sign-in module where accounts are channels (CH 01, CH 02…) and the session selector lists what SDDM offers: Desktop, Studio and Gaming, with experimental sessions last and never the default.',
  elFondoNoEsUna:
    'The background is not a photograph: it is a Pampa horizon drawn in code (HorizonField) — a striped half-set sun, a windmill, a wire fence and an instrument scale along the horizon — painted once and still except for the clock. No third-party photo or video is bundled.',
  estadoEsteDisenoEstaEn: (v0: string | number | null | undefined): string =>
    `Status: this design is on the greeter's main branch (pin ${v0}) and is not in a published package yet. The published hornero-greeter 1.1.0 package is still the landscape greeter; its credits stay at the end of this page while that release is published. No capture of a real login with the new design exists yet: until one does, this page shows no image of the greeter (the one below is the lock screen, labelled as such).`,
  unGreeterPropioEnSignal: 'A greeter of its own, on Signal',
  cadaPiezaSaleDelCodigo:
    'Every piece comes from the pinned greeter source; this page does not recreate it in the browser or draw it as if it were a screenshot.',
  elHorizonteHorizonfield: 'The horizon (HorizonField).',
  unCieloDeMarcasDe:
    'A sky of instrument ticks with constellations, seeded by the host name and the date: each computer gets its own sky and it changes from one day to the next. It is painted once into a software canvas; the only ambient motion is a scan hairline stepping once per second, off with reduced motion or high contrast.',
  elRelojYJavi: 'The clock and Javi.',
  esElRelojDeLa:
    'It is the lock screen clock: Plex Sans Condensed numerals, one signal hairline and the date in uppercase mono. Javi, the shell hornero, greets by the hour in the shell cosy voice or the plain one (voice=plain), and can be hidden (mascot=false).',
  lasCuentasComoCanales: 'Accounts as channels.',
  cadaCuentaEsUnCanal:
    'Each account is a channel with a tally and an on-air bar when tuned, plus an optional Other channel for a typed name. The password well is named after the chosen account, with the session and keyboard-layout selectors beside it.',
  susPropiasPaletas: 'Its own palettes.',
  correComoElUsuarioSddm: (v0: string | number | null | undefined): string =>
    `It runs as the sddm user before any session, so it cannot read your Control Center palette: it carries ${v0}. colorScheme=auto follows the light or dark preference only when the platform reports one.`,
  variasPantallas: 'Several displays.',
  elModuloDeIngresoVa:
    'The sign-in module sits on SDDM primary display; every other output shows a quiet plate with the mark, the time and the note to sign in on the main display.',
  erroresHonestos: 'Honest errors.',
  unaContrasenaIncorrectaSeCuenta:
    'A wrong password is counted from the second attempt, Caps Lock is announced, with no sessions installed log in is disabled and says why, and if SDDM does not answer within 12 seconds the greeter says so. Suspend, restart and shut down ask first, with Cancel focused.',
  rendersFueraDePantallaNo: 'Offscreen renders, not captures',
  elRepositorioDelGreeterPublica:
    'The greeter repository publishes renders of the real theme (sddm-greeter-qt6 --test-mode on Qt offscreen platform, with fixture accounts and sessions): Signal Night, Signal Day, high contrast with large text, 1366×768 and 1920×1080, the secondary plate and the error states. They are the current design reference, but they are not captures of a real login or of a published package, so this site links to them instead of showing them as captures.',
  laListaCompletaDeRenders:
    'The full render list (with sizes) lives in the pinned greeter repository; this page shows no image of the greeter until a capture of a real login exists.',
  verLosRendersEnEl: 'See the renders in the repository',
  detallesTecnicos: 'Technical details',
  unTemaSddmEnQt6:
    'A Qt6/QML SDDM theme that works offline with no media pack. An administrator can choose their own image or video with backgroundImage in theme.conf: only that chosen video needs Qt 6 Multimedia, and if the file is missing or cannot be decoded the generative horizon stays. The values below are the defaults in the pinned theme.conf, generated on every data sync.',
  gestorDeLogin: 'Login manager',
  fondo: 'Background',
  horizonteGenerativo: 'Generative horizon',
  paleta: 'Palette',
  esquemaDeColor: 'Colour scheme',
  vozDelSaludo: 'Greeting voice',
  canalesDeCuenta: 'Account channels',
  confirmarEnergia: 'Confirm power',
  accesibilidad: 'Accessibility',
  idiomas: 'Languages',
  multimediaIncluida: 'Bundled media',
  si: 'Yes',
  ninguna: 'None',
  componentes: 'Components',
  creditosDeLaVersionPublicada: 'Credits for the published landscape release',
  elPaquetePublicadoHorneroGreeter:
    'The published hornero-greeter 1.1.0 package still shows these licensed Argentine scenes. The Signal greeter does not use or bundle them, and this page no longer plays them; the credits stay here while that release is published.',
  fuente: 'Source ↗',
  fuenteYEstado: 'Source and status',
  estaPaginaDescribeElGreeter:
    'This page describes the greeter; it does not authenticate or collect credentials. The real theme is open source and HorneroOS is an everyday-use system, with concrete, declared limitations.',
  codigoDelGreeter: 'Greeter source',
  consultaElEstadoDeInstalacion: 'Check installation status',
  comoSeHicieronLosRenders: 'How the renders were made',
  elGreeterSignalYLa: 'The real Signal greeter and lock screen',
  estasSonLasCapturasReales:
    'These are the planned real captures of the Signal greeter (palettes, sessions and power, two monitors) and of the lock screen. They are taken from a real login once the design is released; until then each slot says what it will show.',
};

export const messages: Record<Locale, Messages> = { es, en };
