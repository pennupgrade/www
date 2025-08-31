import { defineConfig } from "astro/config";

const config = defineConfig({
  site: "https://pennupgrade.com",
  output: "static",
  trailingSlash: "never",
  redirects: {
    "/healthsafety": "https://pennupgrade.itch.io/pennboy",
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
});

// https://astro.build/config
export default config;
