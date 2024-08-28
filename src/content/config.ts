import { defineCollection, z } from "astro:content";

const board = defineCollection({
  type: "data",
  schema: z.object({
    src: z.string(),
    name: z.string(),
    role: z.string(),
    order: z.number().int(),
  }),
});

const games = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    game: z.object({
      type: z.enum(["club", "student"]),
      jam: z.object({ semester: z.enum(["fall", "spring"]), year: z.number().int() }).optional(),
    }),
    imageCount: z.number().int().min(0),
    released: z.date(),
    duration: z.string(),
    links: z.array(z.object({ name: z.string(), href: z.string().url() })),
    published: z.object({
      itch: z
        .object({
          embedHref: z
            .string()
            .url()
            .refine((url) => url.startsWith("https://itch.io/embed-upload/")),
          width: z.number().int(),
          height: z.number().int(),
        })
        .optional(),
      steam: z.object({ href: z.string().url() }).optional(),
    }),
    credits: z.array(
      z.union([z.string(), z.object({ role: z.string(), names: z.array(z.string()) })]),
    ),
  }),
});

export const collections = {
  board,
  games,
};
