/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
        colors: {
        'primary': '#003049',
        'secondary': '#D62828',
        'tertiary': '#EEF1F9',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}