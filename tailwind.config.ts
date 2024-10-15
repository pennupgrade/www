import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", ...defaultTheme.fontFamily.sans],
      mono: ["Hermit", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      fontSize: {
        24: "24px",
        30: "30px",
        48: "48px",
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
      screens: {
        xs: "450px",
        content: "1051px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          spiky: (value) => {
            const hexOnly = value.split("#")[1];
            return {
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='47' height='26' viewBox='0 0 47 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 23V0L23.5 23L47 0V23V26H0V23Z' fill='%23${hexOnly}'/%3E%3C/svg%3E%0A")`,
              backgroundRepeat: "repeat-x",
            };
          },
        },
        {
          values: flattenColorPalette(theme("colors")),
        },
      );
    }),
  ],
} satisfies Config;

export default config;
