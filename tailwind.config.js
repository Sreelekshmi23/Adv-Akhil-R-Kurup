/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          900: '#0a0a0a', // Deepest black
          800: '#141414', // Slightly lighter for cards
          700: '#222222', // Borders and dividers
        },
        gold: {
          DEFAULT: '#d4af37', // Classic metallic gold
          light: '#f3e5ab',
          dark: '#aa8c2c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
