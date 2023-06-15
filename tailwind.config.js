/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,tsx,ts,jsx,js}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.9s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(65deg)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
