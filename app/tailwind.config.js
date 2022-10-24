const { default: Head } = require('next/head');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': 'url("./public/data.jpg")',
      }
    },
  },
  plugins: [],
}
