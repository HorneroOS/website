import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const showroom = defineCollection({
  loader: glob({ base: './src/content/showroom', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
  }),
});

export const collections = { showroom };
