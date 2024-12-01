/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#YOUR_PRIMARY_COLOR', // Replace with your brand color
        'primary-dark': '#DARKER_PRIMARY_COLOR', // Replace with your darker shade
      },
      animation: {
        slideInDown: 'slideInDown 0.7s ease-in-out',
        slideInLeft: 'slideInLeft 0.7s ease-in-out',
        slideInRight: 'slideInRight 0.7s ease-in-out',
      },
      keyframes: {
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

