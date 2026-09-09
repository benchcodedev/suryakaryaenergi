import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        paper: "#FFFFFF",
        surface: "#FAF6EE",
        brown: {
          50: "#FAF6EE",
          100: "#F5E8CE",
          200: "#ECD3A2",
          300: "#DEBB7D",
          400: "#D4A356",
          500: "#C68E3E",
          600: "#9C7138",
          700: "#7A572C",
          800: "#5C4121",
          900: "#422E17",
          950: "#2E200F",
        },
        gold: {
          400: "#E5B667",
          500: "#D4A04E",
          600: "#C68E3E",
        },
        sage: {
          500: "#829668",
          600: "#6E8058",
          700: "#566644",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        "2card": "24px",
        button: "10px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(66, 46, 23, 0.04)",
        card: "0 8px 30px rgba(66, 46, 23, 0.06)",
        hover: "0 20px 40px -10px rgba(66, 46, 23, 0.12)",
        "glow-gold": "0 4px 25px rgba(198, 142, 62, 0.4)",
        "glow-gold-lg": "0 8px 35px rgba(198, 142, 62, 0.55)",
        glass: "0 8px 32px 0 rgba(66, 46, 23, 0.08)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;
