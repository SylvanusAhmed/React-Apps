/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Quicksand: ["Quicksand", "Sans serif"]
      },
      boxShadow:{
        'button': '2px 2px 2px 2px rgb(0,0,0)'
      }
    },
  },
  plugins: [],
}