/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shadowColorChange: {
          '0%': { boxShadow: 'inset 0 0 20px 0 rgba(10, 0, 255, 0.2)' },
          '30%': { boxShadow: 'inset 0 0 20px 0 rgba(0, 0, 255, 0.2)' },
          '40%': { boxShadow: 'inset 0 0 20px 0 rgba(128, 0, 128, 0.2)' },
          '50%': { boxShadow: 'inset 0 0 20px 0 rgba(128, 0, 128, 0.2)' },
          '60%': { boxShadow: 'inset 0 0 20px 0 rgba(128, 0, 128, 0.2)' },
          '70%': { boxShadow: 'inset 0 0 20px 0 rgba(0, 0, 255, 0.2)' },
          '100%': { boxShadow: 'inset 0 0 20px 0 rgba(0, 0, 255, 0.2)' },



        },
      },
      animation: {
        shadowColorChange: 'shadowColorChange 3s infinite',
      },
    },
  },
  plugins: [],
}