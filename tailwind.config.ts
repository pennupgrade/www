import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", ...defaultTheme.fontFamily.sans],
      mono: ["JetBrains Mono Variable", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      fontSize: {
        24: "24px",
        30: "30px",
      },
      maxWidth: {
        // 1000px base width, plus 1.5rem x-padding on both sides (25.5px * 2)
        content: "1051px",
      },
      colors: {
        up: {
          1: "#DFF2FF",
          2: "#BBE2FF",
          3: "#95D2FF",
          4: "#72C4FF",
          5: "#3BADFF",
          6: "#2090E0",
          7: "#1C79BC",
          8: "#0B5A94",
          9: "#083B60",
          10: "#072439",
          11: "#051A2A",
          12: "#04121C",
        },
      },
      spacing: {
        content: "1051px",
      },
    },
  },
} satisfies Config;

export default config;
