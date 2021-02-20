const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: "#7f5af0",
      secondary: {
        light: "#232323",
        dark: "#72757e",
      },
      green: "#2cb67d",
      background: {
        light: "#eff0f3",
        dark: "#242629",
      },
      surface: {
        light: "#fffffe",
        dark: "#16161a",
      },
      paragraph: {
        light: "#2a2a2a",
        dark: "#94a1b2",
      },
      header: {
        light: "#0d0d0d",
        dark: "#fffffe",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
