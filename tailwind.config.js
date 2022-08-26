/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "exo": ["Ex"]
      },
      colors: {
        "blue-default": "#1698D9",
        "blue-hover": "#2EA8E6",
        "red-selected": "#D91667",
        "red-selected-hover": "#E62E7A"
      }
    },
  },
  plugins: [],
}
