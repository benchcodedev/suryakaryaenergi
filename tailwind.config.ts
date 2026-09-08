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
        surface: "#FAF7F2",
        brown: {
          50: "#FAF7F2",
          100: "#F3E9DD",
          200: "#E4D3C0",
          300: "#CFB69A",
          400: "#B5916D",
          500: "#996F48",
          600: "#815934",
          700: "#6A4626",
          800: "#543419",
          900: "#3E2410",
          950: "#2C180A",
        },
        gold: {
          400: "#F2BD54",
          500: "#DFA134",
          600: "#BF8420",
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
        sm: "0 2px 8px rgba(62, 36, 16, 0.04)",
        card: "0 8px 30px rgba(62, 36, 16, 0.06)",
        hover: "0 20px 40px -10px rgba(62, 36, 16, 0.12)",
        "glow-gold": "0 4px 25px rgba(223, 161, 52, 0.4)",
        "glow-gold-lg": "0 8px 35px rgba(223, 161, 52, 0.55)",
        glass: "0 8px 32px 0 rgba(62, 36, 16, 0.08)",
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
