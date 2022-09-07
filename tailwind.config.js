const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // theme: {
  //   extend: {
  //     colors: {
  //       transparent: 'transparent',
  //       current: 'currentColor',
  //       'white': '#ffffff',
  //       'ibps': {
  //         100: '#F5F2FF',
  //         200: '#BEB6DE',
  //         300: '#A298CD',
  //         400: '#8679BC',
  //         500: '#4E3D9B',
  //         600: '#402E93',
  //         700: '#321F8A',
  //         800: '#241082',
  //         900: '#160079',
  //       },
  //     }
  //   }
  // },

  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
    },
    fontFamily: {
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
}
