/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'libre': ['Libre Caslon Display', 'serif'],
        "Montserrat":['Montserrat','sans-serif'],
        'playfair':['Playfair Display','serif']
      },
    },
  },
  plugins: [],
}

