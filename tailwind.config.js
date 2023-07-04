/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundImage: {
      gradient:
        'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)',
      grey_gradient: 'linear-gradient(125.17deg, #272727 0%, #11101D 150%)',
      image: 'url(/assets/images/profile_pic.svg)',
    },

    extend: {
      colors: {
        'dark-blue': '#0A1929',
        'custom-blue': '#0059B2',
        'dark-yellow': '#E7B813',
        'dark-card': '#132F4C',
        'primary-clr': '#5CE1E6',
      },
      fontSize: {
        // sm: '0.87rem',
        // base: '1.1rem',
        // lg: '1.25rem',
        // xl: '1.30rem',
        // '2xl': '1.563rem',
        // '3xl': '1.953rem',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',
      },
      maxWidth: {
        50: '50%',
        60: '60%',
        70: '70%',
        80: '80%',
        90: '90%',
      },
      fontSmoothing: {
        antialiased: '-webkit-font-smoothing: antialiased;',
        grayscale: '-moz-osx-font-smoothing: grayscale;',
        none: 'font-smooth: never;',
      },
    },
  },
  plugins: [],
}
