import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const showroom = defineCollection({
  loader: glob({ base: './src/content/showroom', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Real capture, stored once under assets/screenshots/ and optimized at
      // build time by astro:assets (AVIF + WebP, responsive widths).
      image: image(),
    }),
});

export const collections = { showroom };
