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
      'gray': "#eeeeee",
      'primary': "#ff3600",
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

