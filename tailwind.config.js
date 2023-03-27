/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "393px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    extend: {
      colors: {
        primary: "#121111",
        secondry: {
          100: "#AA182C",
          200: "#FFFFFF",
          300: "#8000FF",
          400: "#8E11A3",
        },
      },
      fontFamily: {
        body: ["Noto Sans"],
      },
      fontFamily: {
        fn: ["Inter"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "1.25rem",
        md: "1.75rem",
        lg: "3.7rem",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".25em",
        widest: ".5em",
      },
    },
  },
  plugins: [],
};
