module.exports = {
  purge: { content: ['./src/**/*.jsx'], enabled: true },
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        catamaran: 'Catamaran',
        raleway: 'Raleway',
        hindsiliguri: 'Hind Siliguri',
        librefranklin: 'Libre Franklin',
        asap: 'Asap',
        nunito: 'Nunito',
        ebgaramond: 'EB Garamond',
        inter: 'Inter',
      },
      colors: {
        skyblue: {
          100: '#EFFBFF',
          200: '#D8F6FE',
          300: '#C0F0FD',
          400: '#90E5FC',
          500: '#61DAFA',
          600: '#57C4E1',
          700: '#3A8396',
          800: '#2C6271',
          900: '#1D414B',
        },
        cyan: {
          100: '#00ffff',
          200: '#00ebeb',
          300: '#00d7d7',
          400: '#00c3c3',
          500: '#00afaf',
          600: '#009b9b',
          700: '#008787',
          800: '#007373',
          900: '#005f5f',
        },
        coldgray: {
          100: '#F5F7FA',
          200: '#E4E8EB',
          300: '#CBD2D9',
          400: '#9AA5B1',
          500: '#7B8794',
          600: '#616E7C',
          700: '#3E4C59',
          800: '#323F4B',
          900: '#1F2933',
        },
      },
      spacing: {
        content: '10rem',
      },
    },
  },
  variants: {
    cursor: ['hover', 'focus'],
    borderRadius: ['focus'],
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
};
