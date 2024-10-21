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
        "gray-bg": "linear-gradient(62% #F2F2F6 0%, 44% #ECECEC 100%)",
      },
    },
    plugins: [],
  },
};
