/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./flowbite/**/*.js"],
  theme: {
    extend: {
        colors: {
        'primary': '#003049',
        'secondary': '#D62828',
        'tertiary': '#EEF1F9',
        'darkerblue': '#021824',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}