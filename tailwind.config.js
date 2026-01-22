/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0c0d0f",
        surface: "#15171b",
        border: "#23262d",
        text: "#f2f4f8",
        muted: "#a9b0bb",
        accent: "#c8ff2e",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["60px", { lineHeight: "64px", letterSpacing: "-0.02em" }],
        h2: ["36px", { lineHeight: "40px", letterSpacing: "-0.01em" }],
        h3: ["24px", { lineHeight: "28px", letterSpacing: "-0.01em" }],
        body: ["16px", { lineHeight: "24px" }],
        label: ["12px", { lineHeight: "14px", letterSpacing: "0.08em" }],
      },
      borderRadius: {
        surface: "16px",
        chip: "999px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(1200px 600px at 15% -10%, rgba(200, 255, 46, 0.15), transparent 60%)",
        "noise-fade":
          "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.65))",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        reveal: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both",
        reveal: "reveal 500ms ease-out both",
        "float-slow": "float-slow 6s ease-in-out infinite",
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
