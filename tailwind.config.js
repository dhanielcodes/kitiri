module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        mxh: '28em',
      },
      fontFamily: {
        poppins: 'Poppins',
      },
      fontSize: {
        ch: '4ch',
      },
      maxWidth: {
        mxwh: '19.2rem',
      },
      gridTemplateColumns: {
        sidebar: '180px 1fr',
      },
      colors: {
        70: '#000000b3',
        60: '#00000099',
        mainBg: '#e5e5e5',
      },
      boxShadow: {
        desk: '10px 10px 39px 0px rgba(0,0,0,0.29)',
        mob: '0px 17px 34px -5px rgba(0,0,0,0.31)',
      },
      lineHeight: {
        'extra-loose': '1.3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
