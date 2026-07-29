import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#141414",
        cream: "#ffffff",
        muted: "#a3a3a3",
        accent: "#a52020",
        "accent-hover": "#8b1a1a",
        divider: "#262626",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "widest-2": "0.2em",
        "widest-3": "0.25em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        slowPan: {
          "0%": { transform: "scale(1.15) translate3d(-2%, 0, 0)" },
          "50%": { transform: "scale(1.15) translate3d(2%, 0, 0)" },
          "100%": { transform: "scale(1.15) translate3d(-2%, 0, 0)" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
        "slow-pan": "slowPan 30s ease-in-out infinite",
        "marquee-left": "marqueeLeft 60s linear infinite",
        "marquee-right": "marqueeRight 70s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
