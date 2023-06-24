/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,tsx,ts,jsx,js}'],
  theme: {
    extend: {
      animation: {
        wave: 'wave 2.5s ease-in-out infinite',
        color: 'color 30s infinite linear',
        changeGradient: 'gradientAnimation 5s linear infinite'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate( 0.0deg)' },
          '100%': { transform: 'rotate( 0.0deg)' },
        },
         color: {
          '0%':   { backgroundColor: '#9336B4' },
          '20%':  { backgroundColor: '#0A6EBD' },
          '40%':  { backgroundColor: '#1F6E8C' },
          '60%':  { backgroundColor: '#4942E4' },
          '80%':  { backgroundColor: '#116D6E' },
          '100%': { backgroundColor: '#9336B4' },
        },
        gradientAnimation: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '100%': {
            backgroundPosition: '100% 50%'
          }
        }
      },
      fontFamily: {
        carter: ['Carter One', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        montserratItalic: ['Montserrat Italic', 'sans-serif'],
      },
      backgroundImage: {
        heroPattern:
          "url('noise.webp')",
      },
    },
  },
  plugins: [daisyui],
  darkMode: 'class',
};
