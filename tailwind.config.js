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
        padding: '15px',
        center: true
      },
        colors: {
          lightblack: '#0D0820CC',
          lightred: '#DA4446',
          lightorange: '#FE917B',
          darkblue: '#19274A',
          textgrey: 'rgba(13, 8, 32, 0.68)'
        },
      dropShadow: {
        'faq-shadow': '4px 4px 20px rgba(64, 67, 150, 0.12)',
      }
    },
  },
  plugins: [],
}
