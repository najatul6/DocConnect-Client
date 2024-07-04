/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#f7a582",
        "light-black": "#212121",
      },
    },
  },
  plugins: [require("daisyui")],
};
