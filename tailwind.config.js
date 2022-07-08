const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'ibps': {
          100: '#F5F2FF',
          200: '#BEB6DE',
          300: '#A298CD',
          400: '#8679BC',
          500: '#4E3D9B',
          600: '#402E93',
          700: '#321F8A',
          800: '#241082',
          900: '#160079',
        },
      }
    }
  }
}
