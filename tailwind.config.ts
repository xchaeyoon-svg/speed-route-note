import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06070D",
          900: "#0A0C16",
          850: "#0E1019",
          800: "#13162A",
          700: "#1A1E36",
          600: "#262B47",
          500: "#3A4063",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
        },
        velocity: {
          DEFAULT: "#C7F23E",
          dim: "#9BC72E",
          glow: "rgba(199,242,62,0.18)",
        },
        save: {
          DEFAULT: "#F5C249",
          dim: "#C99A2E",
        },
        skip: {
          DEFAULT: "#6B7390",
          dim: "#4B5170",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Pretendard"', "sans-serif"],
        sans: ['"Pretendard"', '"Bricolage Grotesque"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(199,242,62,0.25), 0 0 40px -8px rgba(199,242,62,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        "ink-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(199,242,62,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 110%, rgba(91,141,239,0.08), transparent 60%)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
