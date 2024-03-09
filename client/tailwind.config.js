/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-purple': '#1a202c',
        'primary-color': '#F5F579FA',
        'primary-dark': '#FFFF00',
      },
      textColor: {
        'bright-yellow': '#FFFF00', // Define your custom text color and its hex value
      },
    },
  },
  plugins: [],
}
