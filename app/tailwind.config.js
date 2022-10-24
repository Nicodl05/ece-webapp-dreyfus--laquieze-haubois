const { default: Head } = require('next/head');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/pages/head.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': 'url("./components/assets/earth.jpg")',
      }
    },
  },
  plugins: [],
}
