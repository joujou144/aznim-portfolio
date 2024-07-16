import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      sm: "600px",
      md: "768px",
      "mid-md": "880px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },

    extend: {
      colors: {
        dove: "#eaeeee",
        pink: "#FB28CD",
        candy: "#e277fa",
        blueberry: "#374A63",
        azure: "#48b9ff",
        sky: "#5ddeea",
        carrot: "#ffb375",
        peach: "#ff9db6",
        grass: "#22db85",
        lilac: "#e3dbe4",
        "lavender-300": "#e0e2ff",
        charcoal: "#222",
      },
    },
  },
  plugins: [require("autoprefixer")],
};

export default config;
