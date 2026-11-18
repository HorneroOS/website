import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// HorneroOS/docs at its pinned commit (checked out into .cache by the
// build). README.md is a directory index: desktop/README.md -> "desktop",
// the root README.md -> "index". Pages have no frontmatter; the title is
// the first H1.
const docs = defineCollection({
  loader: glob({
    base: './.cache/product-src/docs',
    pattern: ['**/*.md', '!.github/**'],
    generateId: ({ entry }) => {
      const id = entry.replace(/\.md$/i, '');
      if (id === 'README') return 'index';
      return id.endsWith('/README') ? id.slice(0, -'/README'.length) : id;
    },
  }),
  schema: z.looseObject({}),
});

export const collections = { docs };
