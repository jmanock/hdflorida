import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#eefcff",
          100: "#d8f7ff",
          500: "#0aa7c0",
          600: "#078aa3",
          700: "#076f83"
        },
        palm: {
          500: "#12a36d",
          600: "#0c8558"
        },
        sun: {
          400: "#f6bd45",
          500: "#e7a727"
        },
        ink: "#102033"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(16, 32, 51, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
