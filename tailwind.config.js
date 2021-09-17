module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "netflix-red": "#e50914",
      },
      backgroundImage: {
        hero: "url(https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/44621fb3-5570-4932-8af0-c54ba12d258d/GB-en-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
