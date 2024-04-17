/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      animation: {
        "pulse-fast": "pulse 0.8s linear infinite",
      },
      fontFamily: {
        Pacifico: ["Pacifico"],
        Poppins: ["Poppins"],
        Lato: ["Lato"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
