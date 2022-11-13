/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moonwalk: {
          '0%, 100%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px*7))' },
        }
      }
    },
  },
  plugins: [],
}
