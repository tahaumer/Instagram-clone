/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#0095F6',
        primaryDark : '#1877F2',
        borderLight: 'rgb(219, 219, 219)',
        secondaryTextColor: 'rgb(168, 168, 168)'
      }
    },
  },
  plugins: [],
}