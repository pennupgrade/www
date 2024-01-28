import { defineCollection, z } from "astro:content";

const updatesCollection = defineCollection({
  type: "content",
  schema: z.object({
    dateTime: z.coerce.date(),
  }),
});

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
  updates: updatesCollection,
  board: boardCollection,
};
