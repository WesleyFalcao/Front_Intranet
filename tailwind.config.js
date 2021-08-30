module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: theme => ({
          'imagem-fundo': "url('assets/imagens/background.svg')"
        })
      },
    },
    variants: {
      extend: {
        transitionProperty : ['hover' , 'focus'],
      },
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};