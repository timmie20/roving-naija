import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "app-white": "var(--app-white)",
        "app-dark": "var(--app-dark)",

        primary: {
          snow: "var(--primary-snow)",
          light: "var(--primary-light)",
          normal: "var(--primary-normal)",
          dark: "var(--primary-dark)",
          darker: "var(--primary-darker)",
        },

        secondary: {
          snow: "var(--secondary-snow)",
          light: "var(--secondary-light)",
          normal: "var(--secondary-normal)",
          dark: "var(--secondary-dark)",
          darker: "var(--secondary-darker)",
        },

        neutral: {
          "50": "var(--neutral-50)",
          "100": "var(--neutral-100)",
          "200": "var(--neutral-200)",
          "300": "var(--neutral-300)",
          "400": "var(--neutral-400)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
