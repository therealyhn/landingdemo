/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505", // Blacker for club feel
        surface: "#101010",
        "surface-highlight": "#1A1A1A",
        border: "#FFFFFF10", // translucent white
        "border-light": "#FFFFFF20",
        text: "#FFFFFF", // Pure white text
        muted: "#888888",
        accent: "#D4FF00", // Acid Lime
        "accent-glow": "rgba(212, 255, 0, 0.5)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        // Mono reserved mainly for tiny details now
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        h1: ["64px", { lineHeight: "1", letterSpacing: "-0.03em" }],
        h2: ["40px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h3: ["24px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        body: ["16px", { lineHeight: "1.5" }],
        label: ["12px", { lineHeight: "1", letterSpacing: "0.1em" }],
        tiny: ["10px", { lineHeight: "1", letterSpacing: "0.05em" }],
      },
      borderRadius: {
        surface: "24px",
        chip: "999px",
        sm: "6px",
      },
      boxShadow: {
        soft: "0 20px 40px -10px rgba(0, 0, 0, 0.5)",
        neon: "0 0 10px rgba(212, 255, 0, 0.5), 0 0 20px rgba(212, 255, 0, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top center, rgba(212, 255, 0, 0.15), transparent 40%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        reveal: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(212, 255, 0, 0.2)" },
          "50%": { boxShadow: "0 0 20px rgba(212, 255, 0, 0.6)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) both",
        reveal: "reveal 500ms ease-out both",
        "pulse-glow": "pulse-glow 3s infinite",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "24px",
          lg: "32px",
          xl: "48px",
        },
      },
    },
  },
  plugins: [],
}
