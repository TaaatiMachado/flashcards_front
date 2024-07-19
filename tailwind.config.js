/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        comfortaa: ['Comfortaa', 'cursive'],
      },
      colors: {
        light: {
          primary: '#6BF5C9',
          background: '#FFFFFF',
          secondary: '#CCFDED',
          accent: '#3CC4C2',
          highlight: '#9B60CF',
          light: '#ddc0f7',
          dark: '#1E293B'
        },
        dark: {
          primary: '#6BF5C9',
          background: '#131d2d',
          secondary: '#1E293B',
          accent: '#3CC4C2',
          highlight: '#9B60CF',
          dark: '#2a0a46'
        },
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transitionDuration: {
        '600': '600ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      transform: {
        'rotate-20': 'rotate(20deg)',
        'rotate-30': 'rotate(30deg)',
        'translate-x-40': 'translateX(40px)',
        'translate-x-80': 'translateX(80px)',
      }
    },
  },
  plugins: [],
};