const openVariant = require('./src/plugins/openVariant.ts')
const animationDelay = require('./src/plugins/animationDelay.ts')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero.jpg')",
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

