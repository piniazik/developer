/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserratbold: ['Montserrat', 'Bold', 'sans-serif'],
        montserratregular: ['Montserrat', 'Regular', 'sans-serif'],
      },
      screens: {
        '2xl': {'max': '1535px'},
  
        'xl': {'max': '1279px'},
  
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},
  
        'sm': {'max': '639px'},
      },
      container: {
        padding: '0 15px',
        center: true
      },
      extend: {
        colors: {
          lightblack: '#0D0820CC',
          lightred: '#DA4446',
          lightorange: '#FE917B',
          darkblue: '#19274A'
        }
      }
    },
  },
  plugins: [],
}
