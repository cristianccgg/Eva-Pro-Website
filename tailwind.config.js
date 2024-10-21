/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-purple": "#4200FF",
        "secondary-purple": "#3600D1",
        "secondary-black": "#282828",
        gray: "#454545",
        "light-gray": "#828282",
      },
    },
    plugins: [],
  },
};
