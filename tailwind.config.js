/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif']
    },
    colors: {
      black: '#000',
      white: '#fff',
      night: '#0e0e0e',
      'light-green': '#3dc050',
      'forest-green': '#2e933c',
      'light-gray': '#dce4e4',
      'dark-gray': '#333333',
      red: '#ff0000' //used for debugging
    },
    backgroundImage: {
      hero: "url('../public/assets/images/hero-bg.jpg')"
    },
    extend: {}
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
};
