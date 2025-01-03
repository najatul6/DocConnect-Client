/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#f7a582",
        "dark-coffee": "#ec7542",
        "light-black": "#212121",
        "light-green": "#07332f",
        "gray-coffee": "#d8d8d8",
        // "dark-green": "#07332F",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/banner/Group 34993.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [daisyui],
};
