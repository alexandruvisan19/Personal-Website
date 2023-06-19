/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,tsx,ts,jsx,js}'],
  theme: {
    extend: {
      animation: {
        wave: 'wave 2.5s ease-in-out infinite',
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
      },
      fontFamily: {
        carter: ['Carter One', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  darkMode: 'class',
};
