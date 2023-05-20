/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        monserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors:{
        primary: "#39628D",
        secondrary: "#354069",
        type_co: "#8A98CA",
        type_cr: "#F2AC57",
        type_sup: "#CACACA",
        type_su: "#B9E5E5",
        type_em: "#E17878",
        





      }
    },
  },
  plugins: [],
}

