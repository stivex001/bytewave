import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-section": "url(/herobg.png)",
        "who-section": "url(/bg_gradient.png)",
        "why-section": "url(/bgwhy.png)",
        "conect-section": "url(/conect.png)",
        "hero": "url(/hero2.png)",
        "testimonies": "url(/testi.png)",
      },
      colors: {
        "purple-primary": "#903FDA",
      },
      screens: {
        "2xl": "1400px",
        lg: "1024px",
        md: "768px",
        monitor: "1720px",
        sm: "640px",
        xl: "1280px",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        carousel: "carousel 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
