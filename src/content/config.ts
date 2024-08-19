import { defineCollection, z } from "astro:content";

const boardCollection = defineCollection({
  type: "data",
  schema: z.object({
    src: z.string(),
    name: z.string(),
    role: z.string(),
    email: z.string().email(),
  }),
});

export const collections = {
  board: boardCollection,
};
