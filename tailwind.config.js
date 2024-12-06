/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          600: "#16a34a",
          700: "#15803d",
        }
      },
      fontFamily: {
        'farro': ['Farro', 'sans-serif'],
        'farro-bold': ['Farro-bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

