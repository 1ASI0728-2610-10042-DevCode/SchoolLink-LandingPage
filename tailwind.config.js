/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        brand: {
          teal: '#1a7f7a',
          dark: '#0f4c48',
          light: '#e8f7f6',
        }
      },
      fontFamily: {
        display: ['"Source Serif 4"'],
        body: ['"Inter"'],
      },
    },
  },
  plugins: [],
}
