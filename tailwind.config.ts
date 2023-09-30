import { type Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        up: {
          1: "#DFF2FF",
          2: "#BBE2FF",
          3: "#72C4FF",
          4: "#2090E0",
          5: "#0B5A94",
          6: "#072439",
          7: "#04121C",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
