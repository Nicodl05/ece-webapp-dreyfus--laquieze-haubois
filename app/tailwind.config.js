/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx} ",
    "./pages/**/*.{js,ts,jsx,tsx} ",
    "./components/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaire: "#0070f3",
        secondaire: "#ff0000",
      },
    },
  },
  plugins: [],
};
