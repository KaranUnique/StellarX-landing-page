/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "8xl": "7.05rem", // this is my own size not the default , it is higher form the default size
      },
      colors: {
        "pure-red": "#FF0000",
        raquel: "#FFC0CB",
        murllio: colors.pink,
      },
      animation: {
        border: "borderMove 6s linear infinite",
      },
      keyframes: {
        borderMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      screens: {
        tablet: "640px",

        laptop: "1024px",

        desktop: "1280px",
      },
    },
    plugins: [],
    darkMode: "class",
  },
};
