/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
      'marine': '#3D4756',
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
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}

