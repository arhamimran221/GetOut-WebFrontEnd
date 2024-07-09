/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0px 4px 4px 0px #00000040',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.2)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.3)',
        'xl': '5px 5px 10px rgba(0, 0, 0, 0.4)',
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0px 4px 4px 0px #00000040',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-xl': {
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)',
        },
      });
    }
  ]

}