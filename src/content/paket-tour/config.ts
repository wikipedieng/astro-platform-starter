import { defineCollection, z } from "astro:content";

const beritaDiengCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    slug: z.string(),
    author: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  "paket-tour": paketTourCollection,
};
