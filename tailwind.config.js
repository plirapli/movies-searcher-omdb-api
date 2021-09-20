module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': 'Poppins',
      },
      maxWidth: {
        'card': '12rem',
      },
      minWidth: {
        'card': '10rem',
      },
      gridTemplateColumns: {
         'card': 'repeat(auto-fit, minmax(210px, 1fr))',
      },
      fill: theme => ({
        'red': theme('colors.red.500'),
        'gray': theme('colors.gray.400'),
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
