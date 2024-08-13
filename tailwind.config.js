/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e1e',
        foreground: '#e4e4e7',
        accent: '#F4FDFD',
        secondary: '#252525',
        card: '#2a2a2a',
        button: '#45A29E'
      },
    },
  },
  plugins: [],
}
