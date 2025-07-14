/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    // ...
animation: {
  'gradient-x': 'gradient-x 3s linear infinite',
  'meteor': 'meteor 5s linear infinite',
  'grid-pulse': 'grid-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',

  'float': 'float 6s ease-in-out infinite',
},
// ...
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'meteor': {
            '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
            '70%': { opacity: '1' },
            '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
        'grid-pulse': {
            '0%, 100%': { opacity: '0.4' },
            '50%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  
   plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      })
    }
  ],
}
