/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9EDDC",
        secondary: "#e4e4e4",
        moji: "#443936",
      },
    },
    fontFamily: {
      JPN: ["Noto Sans Japanese"],
      ENG: ["Karla"],
    },
  },
  plugins: [],
};
