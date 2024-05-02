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
      'black': "#2e2e2e",
      'primary': "#ff3600",
    },
    fontFamily: {
      'primary': ["League Spartan"],
      'secondary': ["Comfortaa"],
      'tertiary': ["Audiowide"],
    },
    extend: {},
  },
  plugins: [],
}

