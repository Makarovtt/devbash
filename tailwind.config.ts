import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Berlingske: ["Berlingske", "system-ui"],
        opensans: ["opensans", "system-ui"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgBlock: "rgb(29,29,37)",
        gold: "rgb(247, 199, 126)",
      },
      maxWidth: {
        maxWidth: "1200px",
      },
      screens: {
        "2000": "2000px",
        "1900": "1900px",
        "1800": "1800px",
        "1700": "1700px",
        "1600": "1600px",
        "1500": "1500px",
        "1400": "1400px",
        "1300": "1300px",
        "1250": "1250px",
        "1200": "1200px",
        "1100": "1100px",
        "1000": "1000px",
        "900": "900px",
        "800": "800px",
        "760": "760px",
        "700": "700px",
        "600": "600px",
        "560": "560px",
        "500": "500px",
        "480": "480px",
        "400": "400px",
        "300": "300px",
        "200": "200px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
