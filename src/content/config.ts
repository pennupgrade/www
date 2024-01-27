import { defineCollection, z } from "astro:content";

const updates = defineCollection({
  type: "content",
  schema: z.object({
    dateTime: z.coerce.date(),
  }),
});

export const collections = {
  updates,
};
