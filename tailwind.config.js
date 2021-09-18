module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "netflix-red": "#e50914",
        "link-grey": "#757575",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
