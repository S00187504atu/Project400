/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'primary': '#b68bdcb1',
        'secondary': '#43A047',
      }
    },
  },
  plugins: [],
}