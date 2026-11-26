// Message catalog for CompareTable.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  categoryLabel: { os: 'Sistema operativo', shell: 'Shell de escritorio' },
  todo: 'Todo',
  mostrarPorTipo: 'Mostrar por tipo',
  sistemasOperativosYShellsVerificados: (v0: string | number | null | undefined): string =>
    `Sistemas operativos y shells, verificados el ${v0} contra su fuente primaria.`,
  proyecto: 'Proyecto',
  tipo: 'Tipo',
  queEs: 'Qué es',
  instalacion: 'Instalación',
  relacionConHorneroos: 'Relación con HorneroOS',
  unaShellNoEsUn:
    'Una shell no es un sistema operativo, y unos dotfiles no son ninguno de los dos: la columna Tipo dice qué se instala en cada caso. Lo que esta revisión no verificó queda dicho en la fila, no adivinado.',
  matrizCapacidades: 'Matriz de capacidades entre sistemas operativos',
  matrizCapacidadesCaption:
    'Comparación directa de capacidades de arquitectura, CLI, instalador, plugins, IA local y temas entre HorneroOS, Omarchy, CachyOS y Ryoku.',
  capacidad: 'Capacidad',
};

export type Messages = typeof es;

const en: Messages = {
  categoryLabel: { os: 'Operating system', shell: 'Desktop shell' },
  todo: 'All',
  mostrarPorTipo: 'Show by type',
  sistemasOperativosYShellsVerificados: (v0: string | number | null | undefined): string =>
    `Operating systems and shells, checked on ${v0} against their primary source.`,
  proyecto: 'Project',
  tipo: 'Type',
  queEs: 'What it is',
  instalacion: 'Install',
  relacionConHorneroos: 'Relation to HorneroOS',
  unaShellNoEsUn:
    'A shell is not an operating system, and dotfiles are neither: the Type column says what gets installed in each case. What this pass did not verify is stated in the row, not guessed.',
  matrizCapacidades: 'Operating system capability matrix',
  matrizCapacidadesCaption:
    'Direct capability comparison across architecture, CLI performance, installer & rollback, plugin ecosystem, local AI isolation, and theming between HorneroOS, Omarchy, CachyOS, and Ryoku.',
  capacidad: 'Capability',
};

export const messages: Record<Locale, Messages> = { es, en };
