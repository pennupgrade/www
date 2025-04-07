import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const board = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/board" }),
  schema: z.object({
    year: z.object({
      from: z.number().int(),
      to: z.number().int(),
    }),
    members: z.array(
      z.object({
        imgFile: z.string(),
        name: z.string(),
        role: z.string(),
        order: z.number().int(),
      }),
    ),
  }),
});

const games = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/games" }),
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
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/events" }),
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
