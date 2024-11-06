/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      animation: {
        'vertical-pan': 'verticalPan 15s ease-in-out infinite',
      },
      keyframes: {
        verticalPan: {
          '0%': { transform: 'scale(1.01) translateY(0%)' },      // Start: 10% zoom
          '15%': { transform: 'scale(1.2) translateY(-10%)' },    // Scale to 20% and move up
          '25%': { transform: 'scale(1.3) translateY(-10%)' },    // Scale to 30% at the top
          '50%': { transform: 'scale(1.2) translateY(10%)' },     // Scale to 20% while moving down
          '75%': { transform: 'scale(1.3) translateY(10%)' },     // Scale to 30% at the bottom
          '100%': { transform: 'scale(1.1) translateY(0%)' },     // Return to 10% zoom at the original position
        },
      },
    },
  },
  plugins: [],
}

