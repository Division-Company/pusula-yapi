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
          '0%': { transform: 'scale(1.5) translateY(0%)' },      // Başlangıç: %50 zoom, tam ortada
          '15%': { transform: 'scale(1.25) translateY(-10%)' },   // Zoom %25 seviyesine düşerken yukarı kayma
          '25%': { transform: 'scale(1.5) translateY(-10%)' },    // Yukarıda tam %50 zoom
          '50%': { transform: 'scale(1.25) translateY(10%)' },    // Aşağı inerken zoom %25 seviyesine düşme
          '75%': { transform: 'scale(1.5) translateY(10%)' },     // Aşağıda tam %50 zoom
          '100%': { transform: 'scale(1.5) translateY(0%)' },     // Başlangıç noktasına geri dönme
        },
      },
    },
  },
  plugins: [],
}

