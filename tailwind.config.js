/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans'],
      'mono': ['Source Code Pro'],
    },
    extend: {
      colors: {
        'paint': '#0e8c7f',
      }
    },
  },
  plugins: [],
}