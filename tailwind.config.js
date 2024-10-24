/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./form.html",
    "./privacy.html",
    "./terms.html",
    "./disclaimer.html",
    "./acceptable.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "main-purple": "#4200FF",
        "secondary-purple": "#3600D1",
        "secondary-black": "#282828",
        gray: "#454545",
        "light-gray": "#828282",
      },
      letterSpacing: {
        "-2": "0.02em",
      },
      lineHeight: {
        150: "1.5",
      },
      plugins: [],
    },
  },
};
