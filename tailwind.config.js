const openVariant = require('./src/plugins/openVariant.ts')
const animationDelay = require('./src/plugins/animationDelay.ts')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   'purple-bg': '#4B70F5',
      // },
      backgroundImage: {
        'hero': "url('/images/hero.jpg')",
        'band1': "url('/images/band1.jpg')",
        'band2': "url('/images/band2.jpg')",
        'band3': "url('/images/band3.jpg')",
        'band4': "url('/images/band4.jpg')",
        'band5': "url('/images/band5.jpg')",
        'band6': "url('/images/band6.jpg')",
        'band7': "url('/images/band7.jpg')",
      },
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      animation: {
        wavey: "wavey 1000ms linear infinite",
      },

    },
  },
  plugins: [
    openVariant,
    animationDelay,
  ],
}

