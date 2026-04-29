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
        ink: "#0F172A",
        slateText: "#475569",
        sand: "#FAFAF7",
        gold: "#F59E0B",
        ocean: {
          50: "#eefcff",
          100: "#d8f7ff",
          400: "#38bdf8",
          500: "#0aa7c0",
          600: "#078aa3",
          700: "#076f83",
          DEFAULT: "#0284C7",
          bright: "#0EA5E9"
        },
        palm: {
          500: "#12a36d",
          600: "#0c8558"
        },
        sun: {
          400: "#f6bd45",
          500: "#e7a727"
        },
        skyline: "#E0F2FE"
      },
      boxShadow: {
        card: "0 10px 30px rgba(15, 23, 42, 0.08)",
        soft: "0 24px 70px rgba(15, 23, 42, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
