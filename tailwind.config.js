import { nextui } from "@nextui-org/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { serif: ["Georgia", "ui-serif"] },
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      fontFamily: {
        peace: ["var(--font-peace)"],
      },
      animation: {
        r1: "r1 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        r1: {
          "0%": {
            transform: `rotate(0deg)`,
          },
          "100%": {
            transform: `rotate(180deg)`,
          },
        },
      },
    },
  },
  corePlugins: {
    borderImage: false,
  },
  darkMode: "class",
  plugins: [nextui({ dark: true, defaultTheme: "dark" })],
}
