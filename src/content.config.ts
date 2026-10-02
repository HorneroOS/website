import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Provenance travels with every capture (AGENTS.md "Website follows product").
const provenance = z.object({
  source: z.string(),
  context: z.string().optional(),
  pins: z.record(z.string(), z.string()).optional(),
  resolution: z.string().optional(),
  theme: z.string().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

const showroom = defineCollection({
  loader: glob({ base: './src/content/showroom', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      alt: z.string().min(20),
      order: z.number().int(),
      provenance,
    }),
});

export const collections = { showroom };
