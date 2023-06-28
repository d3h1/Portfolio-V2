/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'abstract-bg': "url(../public/assets/space-bg.jpg)"
      },
      scale: {
          '70' : '0.7',
          '65' : '0.65',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'gray-dark': '#181818',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'main-dark': '#41436A',
        'secondary': '#974063',
        'highlight': '#F54768',
        'highlight-secondary': '#FF9677',
        'light': '#fff',
        'dark': '#333', 
      },
      screens: {
        xsm: '300px',
        sm: '380px',
        smd:'500px',
        md: '768px',
        lg: '1293px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDelay: {
        '0': '0ms',
        '1': '100ms',
        '2': '200ms',
        '3': '300ms',
      }
    },
  },
  plugins: [],
}
