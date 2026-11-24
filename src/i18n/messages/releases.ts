// Message catalog for ReleasesPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  borrador: ' borrador',
  statusText: {
    tagged: 'Etiquetada en git',
    published: 'Publicada como paquetes, sin etiqueta git',
    candidate: 'Candidata a release',
    untagged: 'Registro de composición, sin etiquetar',
  },
  releasesHorneroos: 'Releases | HorneroOS',
  historialDeReleases: 'Historial de releases',
  cadaReleaseCuentaQueCambio:
    'Cada release cuenta qué cambió para quienes usan HorneroOS y deja el registro técnico completo a un clic: el manifiesto fija las versiones exactas de shell y config que salen juntas, y ',
  seCompilaDesdeElMismo:
    'se compila desde el mismo árbol. HorneroOS se usa a diario; los nombres previewNN son nombres de artefacto publicados y se conservan. Mirá ',
  instalar: 'Instalar',
  paraElChecksumLaFirma: 'para el checksum, la firma y las instrucciones de verificación.',
  ultimaPublicada: 'Última publicada',
  paquetesLaIsoSigueEn: (v0: string | number | null | undefined): string => `paquetes; la ISO sigue en v${v0}`,
  ultimaEtiquetada: 'Última etiquetada',
  enPreparacion: 'En preparación',
  candidataARelease: 'candidata a release',
  resumenTecnico: 'Resumen técnico',
  releasesDescription: (latestName: string | null | undefined): string =>
    `Cada release de HorneroOS: qué cambió para quienes lo usan y el registro técnico completo. La última es ${latestName ?? 'la release actual'}, con Desktop, Studio y Gaming en una ISO firmada.`,
};

export type Messages = typeof es;

const en: Messages = {
  borrador: ' draft',
  statusText: {
    tagged: 'Tagged in git',
    published: 'Published as packages, no git tag yet',
    candidate: 'Release candidate',
    untagged: 'Composition record, not tagged',
  },
  releasesHorneroos: 'Releases | HorneroOS',
  historialDeReleases: 'Release history',
  cadaReleaseCuentaQueCambio:
    'Each release says what changed for the people using HorneroOS and keeps the full technical record one click away: the manifest pins the exact shell and config versions that ship together, and ',
  seCompilaDesdeElMismo:
    ' is built from the same tree. HorneroOS is used daily; the previewNN names are published artifact names and are kept. See ',
  instalar: 'Install',
  paraElChecksumLaFirma: 'for the checksum, signature and verification instructions.',
  ultimaPublicada: 'Latest published',
  paquetesLaIsoSigueEn: (v0: string | number | null | undefined): string => `packages; the ISO stays at v${v0}`,
  ultimaEtiquetada: 'Latest tagged',
  enPreparacion: 'In preparation',
  candidataARelease: 'release candidate',
  resumenTecnico: 'Technical summary',
  releasesDescription: (latestName: string | null | undefined): string =>
    `Every HorneroOS release: what changed for the people using it, and the full technical record. The latest is ${latestName ?? 'the current release'}, with Desktop, Studio and Gaming on one signed ISO.`,
};

export const messages: Record<Locale, Messages> = { es, en };
