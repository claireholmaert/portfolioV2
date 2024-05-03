/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      'white': "#ffffff",
      'black': "#0f1113",
      'gray': "#D5D7DA",
      'primary': "#009DF8",
      'yellow': "#FFB742",
      'hover-yellow': "#E69C24",
    },
    fontFamily: {
      'primary': ["League Spartan"],
      'secondary': ["Comfortaa"],
      'tertiary': ["Permanent Marker"],
    },
    extend: {},
  },
  plugins: [],
}

