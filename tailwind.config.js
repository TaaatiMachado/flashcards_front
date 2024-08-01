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
      boxShadow: {
        'flip-card': '0 8px 14px 0 rgba(0,0,0,0.2)',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transitionDuration: {
        '800': '800ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      perspective: {
        '1000': '1000px',
      },
      borderRadius: {
        'xl': '1rem',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 20s linear infinite',
      },
      
    },
  },
  plugins: [],
};
