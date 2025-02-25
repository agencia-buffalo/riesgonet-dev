/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'rn-primary': {
          'light': '#92b9fe',
          'DEFAULT': '#4F8AFF',
          'dark': '#224bee',
        },  
        'rn-secondary': {
          'light': '#82E4C1',
          'DEFAULT': '#31c08d',
          'dark': '#0b9068',
        },
        'rn-base': '#000000',
        'rn-accent': '#3B0BCA',
      },
      fontFamily: {
        sans: ['Geist', 'Arial', 'sans-serif'],
        body: ['Geist', 'Arial', 'sans-serif'],
        sidebar: ['Funnel Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
