// Message catalog for WallpapersPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  idAllLabelTodasLas: [
    { id: 'all', label: 'Todas las escenas' },
    { id: 'urban-night', label: 'Noche urbana' },
    { id: 'blue-hour', label: 'Hora azul' },
    { id: 'wetlands', label: 'Humedales' },
    { id: 'grassland', label: 'Pastizal' },
    { id: 'glacier', label: 'Glaciar' },
    { id: 'mineral', label: 'Luz mineral' },
  ],
  fondosHorneroos: 'Fondos | HorneroOS',
  nueveFotografiasHechasEnArgentina:
    'Nueve fotografías hechas en Argentina, usadas como escenas por defecto de los temas Hornero Originals, con ubicación, fotógrafo, fuente y licencia Creative Commons. El paquete trae además la colección completa de fondos de los demás temas (unas 50 imágenes).',
  fondos: 'Fondos',
  fotografiasHechasEnArgentinaCombinadas:
    'Fotografías hechas en Argentina, combinadas con los temas regionales Hornero Originals: el canal Beagle en la hora azul, los Esteros del Iberá, Buenos Aires de noche.',
  fotografias: 'fotografías',
  looksDeHornero: 'looks de Hornero',
  abriLaFotografiaCompleta: (v0: string | number | null | undefined): string => `Abrí la fotografía completa: ${v0}`,
  fotografiaDe: 'Fotografía de',
  fuente: 'Fuente',
  ver: 'Ver',
  todasLasFotografias: 'Todas las fotografías',
  cadaFotografiaEsLaEscena: 'Cada fotografía es la escena por defecto de su tema de Hornero correspondiente.',
  filtraLosFondosPorAmbiente: 'Filtrá los fondos por ambiente',
  mostrandoLasFotografias: (v0: string | number | null | undefined): string => `Mostrando las ${v0} fotografías.`,
  abriLaVistaPreviaCompleta: (v0: string | number | null | undefined): string => `Abrí la vista previa completa: ${v0}`,
  abriLaImagen: 'Abrí la imagen',
  verElTema: (v0: string | number | null | undefined): string => `Ver el tema ${v0}`,
  fotografo: 'Fotógrafo',
  licencia: 'Licencia',
  fuenteYAtribucionCompleta: 'Fuente y atribución completa',
  ningunaEscenaCoincideConEse: 'Ninguna escena coincide con ese filtro.',
  cerraLaVistaPreviaDel: 'Cerrá la vista previa del fondo',
  cerrar: 'Cerrar',
  vistaPreviaDelFondo: 'Vista previa del fondo',
  detallesDeLaLicencia: 'Detalles de la licencia',
  fuenteYAtribucion: 'Fuente y atribución ↗',
  abriLaImagenCompleta: 'Abrí la imagen completa ↗',
  sobreLasFotografias: 'Sobre las fotografías',
  sonFotografiasConLicenciaY:
    'Son fotografías con licencia y ubicaciones verificadas, recortadas y redimensionadas para uso de escritorio. La imagen fuente, el fotógrafo, la licencia y la modificación quedan registrados en el paquete del producto. No se generaron ni reconstruyeron edificios, cielos, luces ni detalles del paisaje.',
  comoSeSeleccionanYEmpaquetan: 'Cómo se seleccionan y empaquetan los fondos',
  todosLosCreditosYLicencias: 'Todos los créditos y licencias de las fotos',
  exploraTodosLosTemas: 'Explorá todos los temas',
  // Client-script templates ({placeholders} are filled in the browser).
  clientPhotoNounOne: 'fotografía',
  clientPhotoNounMany: 'fotografías',
  clientShowingAll: 'Mostrando las {count} {noun}.',
  clientShowingFor: 'Mostrando {count} {noun} para {label}.',
  clientThisFilter: 'este filtro',
  clientPhotographBy: 'Fotografía de {name}',
  clientUnknownPhotographer: 'fotógrafo desconocido',
  clientLicenseDetails: 'Detalles de la licencia',
};

export type Messages = typeof es;

const en: Messages = {
  idAllLabelTodasLas: [
    { id: 'all', label: 'All scenes' },
    { id: 'urban-night', label: 'Urban night' },
    { id: 'blue-hour', label: 'Blue hour' },
    { id: 'wetlands', label: 'Wetlands' },
    { id: 'grassland', label: 'Grassland' },
    { id: 'glacier', label: 'Glacier' },
    { id: 'mineral', label: 'Mineral light' },
  ],
  fondosHorneroos: 'Wallpapers | HorneroOS',
  nueveFotografiasHechasEnArgentina:
    'Nine photographs made in Argentina, used as the default scenes of the Hornero Originals themes, with location, photographer, source and Creative Commons license. The package also ships the full wallpaper collection of the other themes (about 50 images).',
  fondos: 'Wallpapers',
  fotografiasHechasEnArgentinaCombinadas:
    'Photographs made in Argentina, paired with the regional Hornero Originals themes: the Beagle Channel at blue hour, the Iberá wetlands, Buenos Aires at night.',
  fotografias: 'photographs',
  looksDeHornero: 'Hornero looks',
  abriLaFotografiaCompleta: (v0: string | number | null | undefined): string => `Open full photograph: ${v0}`,
  fotografiaDe: 'Photograph by',
  fuente: 'Source',
  ver: 'See',
  todasLasFotografias: 'All photographs',
  cadaFotografiaEsLaEscena: 'Each photograph is the default scene of its matching Hornero theme.',
  filtraLosFondosPorAmbiente: 'Filter wallpapers by atmosphere',
  mostrandoLasFotografias: (v0: string | number | null | undefined): string => `Showing all ${v0} photographs.`,
  abriLaVistaPreviaCompleta: (v0: string | number | null | undefined): string => `Open full preview: ${v0}`,
  abriLaImagen: 'Open image',
  verElTema: (v0: string | number | null | undefined): string => `View ${v0} theme`,
  fotografo: 'Photographer',
  licencia: 'License',
  fuenteYAtribucionCompleta: 'Source and full attribution',
  ningunaEscenaCoincideConEse: 'No scenes match that filter.',
  cerraLaVistaPreviaDel: 'Close wallpaper preview',
  cerrar: 'Close',
  vistaPreviaDelFondo: 'Wallpaper preview',
  detallesDeLaLicencia: 'License details',
  fuenteYAtribucion: 'Source and attribution ↗',
  abriLaImagenCompleta: 'Open full image ↗',
  sobreLasFotografias: 'About the photographs',
  sonFotografiasConLicenciaY:
    'These are licensed photographs with verified locations, cropped and resized for desktop use. The source image, photographer, license and modification are recorded in the product package. No buildings, skies, lights or landscape details were generated or reconstructed.',
  comoSeSeleccionanYEmpaquetan: 'How wallpapers are selected and packaged',
  todosLosCreditosYLicencias: 'All photo credits and licenses',
  exploraTodosLosTemas: 'Browse all themes',
  // Client-script templates ({placeholders} are filled in the browser).
  clientPhotoNounOne: 'photograph',
  clientPhotoNounMany: 'photographs',
  clientShowingAll: 'Showing all {count} {noun}.',
  clientShowingFor: 'Showing {count} {noun} for {label}.',
  clientThisFilter: 'this filter',
  clientPhotographBy: 'Photograph by {name}',
  clientUnknownPhotographer: 'unknown photographer',
  clientLicenseDetails: 'License details',
};

export const messages: Record<Locale, Messages> = { es, en };
