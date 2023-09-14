import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,vue,ts}",
    "./src/pages/**/*.vue",
    "./src/app.vue",
    "./src/assets/**/*.scss",
    "./src/assets/**/*.css",
  ],
  darkMode: "media",
  variants: {
    extend: {
      backgroundColor: ["even"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        header: ["'Oswald'", ...defaultTheme.fontFamily.sans],
        sans: ["'DM Sans'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        loop: {
          300: "#e6f7f6", //hsl(165, 42.6%, 90.8%)
          500: "#a3dacc", //hsl(165, 42.6%, 74.7%)
          600: "#8be1cc", //hsl(165, 58.9%, 71.4%)
        },
        loopgray: {
          900: "f5f7f8", //hsl(200, 33.3%, 96.7%)
          500: "#434343", //hsl(0, 0%, 31.4%)
          100: "#1a1a1a", //hsl(0, 0%, 10.6%)
        },
        uigray: {
          50: "#f9fafb", //hsv(0, 0, 98)
          100: "#eeeff1", //hsv(0, 0, 92)
          200: "#c4c8ce", //hsv(0, 0, 79)
          300: "#a1a1a1", //hsv(0, 0, 63)
          400: "#7a7a7a", //hsv(0, 0, 47)
          500: "#5a5a5B", //hsv(0, 0, 35)
          600: "#3e3e3f", //hsv(0, 0, 25)
          700: "#27272b", //hsv(0, 0, 16)
          800: "#141415", //hsv(0, 0, 8)
          900: "#0f0f10", //hsv(0, 0, 6)
          950: "#0a0a0b", //hsv(0, 0, 4)
        },
      },
    },
  },
  plugins: [],
}
