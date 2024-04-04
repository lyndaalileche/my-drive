import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LucioleBoldItalic: ["var(--font-LucioleBoldItalic)"],
        LucioleBold: ["var(--font-LucioleBold)"],
        LucioleRegularItalic: ["var(--font-LucioleRegularItalic)"],
        LucioleRegular: ["var(--font-LucioleRegular)"],
      },
      colors: {
        turquoise: "#2DB9B9",
        bleuFonce: "#428996",
        vert: "#93C323",
        bleuClaire: "#70B0C3",
      },
    },
  },
  plugins: [],
};
export default config;
