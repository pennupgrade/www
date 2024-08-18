import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";

const config = defineConfig({
  site: "https://pennupgrade.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      domains: [],
      formats: ["image/avif", "image/webp"],
      sizes: [80, 96, 144, 160, 196, 240, 256, 320, 384, 480, 496, 520, 640, 768, 850],
    },
    webAnalytics: {
      enabled: true,
    },
  }),
  // see https://noahflk.com/blog/trailing-slashes-astro
  trailingSlash: "never",
});

// https://astro.build/config
export default config;
