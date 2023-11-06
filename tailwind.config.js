/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-3px)" },
          "50%": { transform: "translateX(3px)" },
        },
      },
      backgroundColor: {
        darkGreen: "#354033",
        lightGray: "#dddddd3d",
        parrotGreen: "#309b3b",
        fadeGreen: "#324031",
      },
      borderColor: {
        lightGray: "#777777",
        fadeGreen: "#324031",
      },
      textColor: {
        fadeGreen: "#324031",
        lightGray: "#354033",
      },
      fontSize: {
        xs: "14pt",
        sm: "18pt",
        md: "24pt",
        lg: "27pt",
        xl: "45pt",
      },
      fontFamily: {
        SangBleuKingdomTrial: "SangBleuKingdomTrial",
        AvenirLight: "AvenirLight",
        Avenir: "Avenir",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        larger: "1600px",
      },
      container: {
        center: true,
        padding: "0.75rem",
      },
    },
  },
  plugins: [],
};
