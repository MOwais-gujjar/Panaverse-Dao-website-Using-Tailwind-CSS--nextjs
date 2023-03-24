/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: "400px",
    //   md: "768px",
    //   lg: "1420",
    //   xl: "1920px",
    // },
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
    },
  },
  plugins: [],
};
