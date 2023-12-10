/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dGray: '#dddddd',
        cGray: '#cbcbcb',
        aGray: '#a6a6a6',
      },
      margin: {
        '50': '50px',
      },
    },
  },
  plugins: [],
}