/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '3/5': '60%',
        '450': '450px',
      },
      width:{
        '2/9':'45%',
        '2/11':'30%',
      }
    }
  },
  plugins: [],
}