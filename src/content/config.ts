import { defineCollection, z } from "astro:content";

const board = defineCollection({
  type: "data",
  schema: z.object({
    src: z.string(),
    name: z.string(),
    role: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  board,
};
