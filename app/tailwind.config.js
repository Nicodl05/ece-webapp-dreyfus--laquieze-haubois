const { default: Head } = require('next/head');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/pages/head.js'],
  theme: {
    extend: {},
  },
  plugins: [],
}
