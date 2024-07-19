/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity:'0' },
          '100%': { opacity:'1' },
        }
      },
      animation: {
        appear: 'appear 2s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
