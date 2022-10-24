const { default: Head } = require('next/head');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{js,ts,jsx,tsx} ", "./components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaire: '#0070f3',
      },
    },
  },
  plugins: [],
}
