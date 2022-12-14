/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/*.{js,ts,jsx,tsx} ",
    "./pages/**/*.{js,ts,jsx,tsx} ",
    "./components/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primaire: "#0070f3",
        secondaire: "#ff0000",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
