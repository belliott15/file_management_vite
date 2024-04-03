/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "264653",
        secondary: "2a9d8f",
        caution: "e9c46a",
        error: "e76f51",
        peach: "f4a261",
      },
    },
  },
  plugins: [],
};
