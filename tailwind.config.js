/** @type {import('tailwindcss').Config} */

// const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [ 'Montserrat'],
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '21/9': '1 / 9',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}