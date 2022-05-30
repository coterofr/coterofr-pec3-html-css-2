module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '700px',
      'md': '1150px',
    },
    extend: {
      colors: {
        'light': 'rgb(250,250,250)',
        'principal': 'rgb(11,6,20)',
        'principal-light': 'rgb(40,37,54)',
        'contrast': '#8c2fb1',
        'contrast-light': '#a769c0',
        'contrast-dark': '#3d0055',
        'red': 'rgb(230,36,36)',
        'shadow': '#5c5858',
        'gray': 'rgb(215,215,215)',
        'gray-light': 'rgb(245,245,245)',
        'dark': 'rgb(0,0,0)',
        'dark-light': 'rgb(55,55,55)',
        'dark-opacity': 'rgb(0,0,0,.7)',
      },
      width: {
        '70': '70%',
        'logo': '250px',
        'logo-sm': '150px',
        'logo-lg': '350px',
        'img': '300px',
        'img-sm': '215px',
        'img-article': '500px',
        'img-article-tb': '450px',
        'img-article-sm': '300px',
      },
      height: {
        'logo': '150px',
        'logo-sm': '75px',
        'logo-lg': '200px',
        'img': '175px',
        'img-sm': '115px',
        'img-article': '300px',
        'img-article-tb': '250px',
        'img-article-sm': '175px',
      },
      padding: {
        '3.75': '15px',
      },
      margin: {
        '1.25': '5px',
        'neg-10': '-10px',
      },
      borderRadius: {
        '5xl': '50px',
      },
      boxShadow: {
        '1px': '1px 1px 5px rgb(92,88,88)',
        '2px': '2px 2px 20px rgb(92,88,88)',
        '3px': '3px 7px 15px rgb(92,88,88)',
      },
      fontSize: {
        '3.5xl': '2rem',
      },
      backgroundImage: {
        'background-img': "url('../images/logo.jpg')",
      },
      backgroundPosition: {
        'center-10': 'center 10%',
      },
      flex: {
        '2': '2',
        '4': '4',
        '1-1-350': '1 1 380px',
      },
      gridTemplateRows: {
        'auto': 'auto',
      },
      gridRow: {
        'span-1-1': '1',
        'span-1-2': '1 / 2',
        'span-2-2': '2',
        'span-3-3': '3',
        'span-4-4': '4',
        'span-5-5': '5',
        'span-1-3': '1 / 3',
      },
      gridTemplateColumns: {
        'auto': 'auto',
        '1': '1fr',
        '2': '1fr 1fr',
        '4': '1fr 1fr 1fr 1fr',
      },
      gridColumn: {
        'span-1-1': '1',
        'span-1-5': '1 / 5',
        'span-2-5': '2 / 5',
      },
    },
  },
  plugins: [],
}
