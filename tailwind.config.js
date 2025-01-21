/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans-reg": "iran-sans-reg",
        "sans-bold": "iran-sans-bold"
      },
      colors: {
        "primary": "#3D8BF2",
        "bs-gray-700": "#495057",
        "bs-gray-800": "#343A40"
      },
      fontSize: {
        "xs": 12
      }
    },
  },
  plugins: [],
}