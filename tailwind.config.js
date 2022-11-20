
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-dark': '#3B5263',
        'primary-green': '#A4FBD6',
        'primary-blue': '#4CF3F0',
        'primary-text': '#4a4a4a',
        'secondary-text': '#000000',
        'tertiary-text': '#a3a3a3',
        'button-active': '#3B5263',
        'button-disabled': '#9ca9b1',
      },
    },
  },
  plugins: [],
}
