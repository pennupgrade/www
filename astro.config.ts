import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
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
    webAnalytics: {
      enabled: true,
    },
  }),
  // see https://noahflk.com/blog/trailing-slashes-astro
  trailingSlash: "never",
  redirects: {
    "/healthsafety": "/games",
  },
});

// https://astro.build/config
export default config;
