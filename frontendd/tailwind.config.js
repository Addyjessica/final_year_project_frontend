import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        formbackground: "#5B5966",
        input: "#FCFCFD",
        person: "#BC8FF4",
        mainbackground: "#1B1C1E",
        primary: "#FFDEF2",
        secondary: "#FF5C5E",
      },
      fontFamily: {
        boldm: ["Dm sans"],
      },
    },
  },
  plugins: [daisyui],
};
