module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens:{
      'motoG4':'360px',
      'pixel02':'411px',
      'iPhone5/SE':'320px',
      'iPhone5/6/7/X':'375px',
      'iPhone6/7/8plus':'414px',
      'iPadPro':'1024px',
      'SurfaceDuo':'540px',
      'GalaxyFold':'280px',
    },
    extend: {
      colors: {
        unimed: {
          green: '#00995D',

          pink: '#ED1651',

          purpe: '#A3238E',

          gray: '#C4CBCF',

          darkgray: '#5B5C65',

          brown: '#682D00',

          orange: '#F47920',

          lightgreen: '#B1D34B',

          background: '#F7F7F7',

          beige: '#FFF0C7',
          
          white: '#FFFFFF',

          yellow: '#FFCB08',

          black: '#000000',
        },
      },
      
      backgroundImage: theme => ({
        'imagem-fundo': "url('assets/imagens/background.svg')"

      })
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};