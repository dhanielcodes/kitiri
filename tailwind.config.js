module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        mxh: '28em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
