const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FEF4D4",
          200: "#FEE7A9",
          300: "#FED57F",
          400: "#FEC55F",
          500: "#FEA92A",
          600: "#DA871E",
          700: "#B66815",
          800: "#934D0D",
          900: "#793908",
        },
        secondary: {
          100: "#FDF6CC",
          200: "#FCEC9B",
          300: "#F8DC68",
          400: "#F2CC42",
          500: "#EAB308",
          600: "#C99405",
          700: "#A87804",
          800: "#875D02",
          900: "#704A01",
        },
        amber: {
          100: "#F9E8CC",
          200: "#F4CD9B",
          300: "#DEA165",
          400: "#BD753D",
          500: "#92400E",
          600: "#7D2E0A",
          700: "#692007",
          800: "#541404",
          900: "#460B02",
        },
        success:{
          100: "#D3FCD2",
          200: "#A6F9AC",
          300: "#77ED8B",
          400: "#53DC78",
          500: "#22C55E",
          600: "#18A95C",
          700: "#118D57",
          800: "#0A724F",
          900: "#065E49",
        },
        danger:{
          100: "#FEE6D9",
          200: "#FDC7B4",
          300: "#FAA18E",
          400: "#F57D71",
          500: "#EF4444",
          600: "#CD313F",
          700: "#AC223A",
          800: "#8A1534",
          900: "#720D30"
        },
        other: {},
      },
    },
    fontFamily: {
      display: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      body: ["Plus Jakarta Sans', sans-serif", ...defaultTheme.fontFamily.sans],
    },
    fontFamily: {
      'Caveat': ['Caveat', 'cursive', ]
    },

  },
  plugins: [],
}
