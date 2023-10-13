/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        'blueColor' : '#2a68ff',
        'grey' : '#f1f4f8',
        'cardShadow' : '#f7f8f9',
        'cardShadow' : '#252b36',
      }
    },
  },
  plugins: [],
}