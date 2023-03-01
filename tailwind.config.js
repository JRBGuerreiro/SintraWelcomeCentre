/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      /* mobile: { max: '767px' } */
      mobile: '320px',
      // => @media (min-width: 320px) { ... }
      tablet: '768px',
      // => @media (min-width: 768px) { ... }
      laptop: '1200px'
      // => @media (min-width: 1200px) { ... }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
      sans: ['Open Sans', 'sans-serif']
    },
    colors: {
      black: '#000',
      white: '#eef0f2',
      'anti-flash-white': '#eef0f2',
      night: '#0e0e0e',
      'swc-green': '#396e35',
      green: {
        100: '#d7e2d7',
        200: '#b0c5ae',
        300: '#88a886',
        400: '#618b5d',
        500: '#396e35',
        600: '#2e582a',
        700: '#224220',
        800: '#172c15',
        900: '#0b160b'
      },
      'light-green': '#3dc050',
      'forest-green': '#2e933c',
      shamrock: '#009b72',
      'light-gray': '#dce4e4',
      'dark-gray': '#333333',
      'tripadvisor-green': '#34e0a1',
      red: '#ff0000', //used for debugging
      brown: '#60463b'
    },
    backgroundImage: {
      hero: "url('../public/assets/images/landing/hero-bg.jpg')"
    },
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        scroll: 'scroll 60s linear infinite'
      }
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
};
