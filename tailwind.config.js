/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    screens: {
      xs: "400px",
      sm: "640px",
      md: "820px",
      lg: "1024px",
      xl: "1250px",
      "2xl": "1536px",
    },
  },
  plugins: [],
  darkMode: "selector",
};
