/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        background: "var(--background)",
        secondary: "var(--secondary)",
        disabled: "var(--disabled)",
        borderColor: "var(--border)",
        tealGreen: {
          dark: "var(--tealGreenDark)",
          light: "#128c7e",
        },
        lightGreen: "var(--lightGreen)",
        teaGreen: "var(--teaGreen)",
        checkmark: "#34b7f1",
        lightGray: "var(--lightGray)",
      },
    },
    darkMode: "class",
    plugins: [nextui()]
  }
}
