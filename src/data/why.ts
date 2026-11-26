// Typed access to the hand-authored Why/FAQ data (compare.json, faq.json).
import compareData from './compare.json';
import faqData from './faq.json';

export type Localized = { es: string; en: string };
export type CompareCategory = 'os' | 'shell';

export interface CompareRow {
  id: string;
  name: string;
  category: CompareCategory;
  version: string | Localized;
  href: string;
  what: Localized;
  install: Localized;
  note: Localized;
}

export interface CompareMatrixRow {
  id: string;
  dimension: Localized;
  horneroos: Localized;
  omarchy: Localized;
  cachyos: Localized;
  ryoku: Localized;
}

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}

export const compareVerifiedOn: string = compareData.verifiedOn;
export const compareRows: CompareRow[] = compareData.rows as CompareRow[];
export const compareMatrix: CompareMatrixRow[] = compareData.matrix as CompareMatrixRow[];
export const faqItems: FaqItem[] = faqData.items as FaqItem[];
