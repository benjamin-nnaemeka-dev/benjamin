import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lightest: "#233554",
          shadow: "rgba(2, 12, 27, 0.7)",
        },
        slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
        white: "#e6f1ff",
        green: {
          DEFAULT: "#64ffda",
          tint: "rgba(100, 255, 218, 0.1)",
        },
      },
      fontFamily: {
        sans: ["Calibre", "Inter", "San Francisco", "SF Pro Text", "-apple-system", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
      boxShadow: {
        "navy-card": "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
        "navy-hover": "0 20px 30px -15px rgba(2, 12, 27, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
