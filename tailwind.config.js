module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        catamaran: 'Catamaran',
        raleway: 'Raleway',
        hindsiliguri: 'Hind Siliguri',
        librefranklin: 'Libre Franklin',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
};
