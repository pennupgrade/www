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
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      game: z.object({
        type: z.enum(["club", "student"]),
        jam: z.object({ semester: z.enum(["fall", "spring"]), year: z.number().int() }).optional(),
      }),
      images: z.array(z.object({ file: image(), alt: z.string() })),
      released: z.date(),
      duration: z.string(),
      links: z.array(z.object({ name: z.string(), href: z.string().url() })),
      published: z.object({
        itch: z
          .object({
            page: z
              .string()
              .url()
              .refine((url) => url.includes(".itch.io")),
            embedHref: z
              .string()
              .url()
              .refine((url) => url.startsWith("https://itch.io/embed-upload/"))
              .refine(
                (url) => !url.includes("?color"),
                "Don't include the '?color' param in the URL!",
              ),
            width: z.number().int(),
            height: z.number().int(),
          })
          .optional(),
        steam: z
          .object({
            href: z
              .string()
              .url()
              .refine((url) => url.startsWith("https://store.steampowered.com/")),
          })
          .optional(),
      }),
      credits: z.array(
        z.union([z.string(), z.object({ role: z.string(), names: z.array(z.string()) })]),
      ),
    }),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    dateTime: z.date(),
  }),
});

export const collections = {
  board,
  games,
  events,
};
