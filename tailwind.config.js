/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#f7a582",
        "dark-coffee": "#ec7542",
        "light-black": "#212121",
        "light-green": "#07332f",
        "gray-coffee":"#d8d8d8"
      },
    },
  },
  plugins: [require("daisyui")],
};
