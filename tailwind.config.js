/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        text: '#e4e2dd',
        background: '#1c4da0',
        backgroundLight: '#e4e2dd',
        primary: '#e0e0e0',
        secondary: '#a8aecc',
        accent: '#4373c7',
      },
      fontFamily: {
        funnel: ["'Funnel Display'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
