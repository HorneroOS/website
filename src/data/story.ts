/**
 * The HorneroOS timeline, with a primary source for every dated claim.
 *
 * This is project history, not generated product data: nothing here describes
 * what the product supports today (that stays in src/data/product/). Each
 * `source` points at a commit, tag or file that can be opened and checked.
 * `evidence` says how the claim can be verified:
 *   - 'git'        a dated commit or tag in a public repository
 *   - 'maintainer' the maintainer's own account; it predates public git history
 */
export interface StoryEntry {
  id: string;
  /** Display date: a year, or an ISO date when a commit pins it. */
  date: string;
  /** Short, plain title. */
  title: string;
  /** One or two sentences. Present tense for facts, no launch language. */
  summary: string;
  evidence: 'git' | 'maintainer';
  /** Where the claim can be checked. */
  source?: { label: string; href: string };
  /** Entries that matter most on the compact homepage timeline. */
  featured?: boolean;
}

const dotfiles = 'https://github.com/ulises-jeremias/dotfiles';
const org = 'https://github.com/HorneroOS';

export const story: StoryEntry[] = [
  {
    id: 'workstation',
    date: '2018',
    title: 'A personal Arch Linux workstation',
    summary:
      'Hornero starts as one developer’s daily desktop in Argentina. This stage predates the public repository history below, so it rests on the maintainer’s account.',
    evidence: 'maintainer',
    featured: true,
  },
  {
    id: 'dotfiles',
    date: '2019-11-02',
    title: 'The configuration goes public',
    summary: 'The first public commit of the dotfiles that became HorneroConfig: an i3 setup, followed the same day by Polybar.',
    evidence: 'git',
    source: { label: 'First commit in ulises-jeremias/dotfiles', href: `${dotfiles}/commit/40480e3419b62fedd2f41fcb649fd3df30ac1ab7` },
    featured: true,
  },
  {
    id: 'hyprland',
    date: '2025-10-29',
    title: 'The desktop moves to Wayland and Hyprland',
    summary: 'After years on X11 window managers, the dotfiles gain a Hyprland configuration.',
    evidence: 'git',
    source: { label: 'Hyprland (#131) in dotfiles', href: `${dotfiles}/commit/99b4ab6c0c2780cd9d83d6ae10cdab1af812007f` },
  },
  {
    id: 'quickshell',
    date: '2026-02-27',
    title: 'The shell becomes Quickshell',
    summary:
      'The workstation switches its bars and panels to a Quickshell shell adapted from Caelestia Shell. That is a new chapter, not the 2018 setup unchanged.',
    evidence: 'git',
    source: { label: 'Transition to Quickshell in dotfiles', href: `${dotfiles}/commit/4f53f3e41cd47aeeb3235224ab922c092c856a22` },
    featured: true,
  },
  {
    id: 'standalone',
    date: '2026-09-10',
    title: 'HorneroOS gets its own repositories',
    summary:
      'The shell is imported from dotfiles into HorneroOS/shell with the upstream author, license and every header intact, then stripped of workstation-only paths.',
    evidence: 'git',
    source: { label: 'Shell import, with the Caelestia NOTICE', href: `${org}/shell/commit/5830eab60f913668b07e6314f5051b8957a2cd71` },
    featured: true,
  },
  {
    id: 'horneroctl',
    date: '2026-09-10',
    title: 'horneroctl, the native system CLI',
    summary:
      'A command-line core written in V becomes the operating-system contract. The shell calls its verbs instead of workstation scripts from 2026-09-29.',
    evidence: 'git',
    source: { label: 'horneroctl core in HorneroOS/hornero', href: `${org}/hornero/commit/45876631e2abb3180aa648ab1d425b4594b4deb9` },
    featured: true,
  },
  {
    id: 'qa',
    date: '2026-10-01',
    title: 'A QA repository records evidence',
    summary:
      'HorneroOS/qa boots virtual machines, drives scenarios and keeps screenshots with hashes and the pinned product revisions. The captures on this site come from it.',
    evidence: 'git',
    source: { label: 'Bootstrap of HorneroOS/qa', href: `${org}/qa/commit/447f5b4e367dcb153215630e6669e4983da39473` },
    featured: true,
  },
  {
    id: 'preview',
    date: '2026-10-02',
    title: 'First tagged development previews',
    summary: 'Preview 14 is tagged as a package composition. There is still no installable ISO.',
    evidence: 'git',
    source: { label: 'Tag v0.2.0-preview14', href: `${org}/hornero/releases/tag/v0.2.0-preview14` },
  },
  {
    id: 'extensions',
    date: '2026-10-20',
    title: 'An official extensions catalogue',
    summary: 'Official plugins get a catalogue with checksums and declared permissions. Community packages stay inert.',
    evidence: 'git',
    source: { label: 'Marketplace foundation in HorneroOS/plugins', href: `${org}/plugins/commit/4a17b450dbd01d15ecf16fc06608c69af704aaa5` },
    featured: true,
  },
];

export const featuredStory = story.filter((entry) => entry.featured);
