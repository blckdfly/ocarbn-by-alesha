/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#181C2E",
        secondary: "#EEEEEE",
        tertiary: "#131728",
        "black-100": "#0D101E",
        "black-200": "#191C2C",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #11162D",
      },
      screens: {
        xs: "450px",
      },
      
    },
  },
  plugins: [],
};
