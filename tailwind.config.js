/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto Mono": ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
