/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        baloo:["Baloo 2", "sans-serif"],
        cursive:["Recursive", "sans-serif"]
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}