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
    extend: {
      colors: {
        'dark-primary': '#0A1929',
        'dark-primary-3': '#0E192C',
        'custom-blue': '#0059B2',
        'dark-secondary': '#E7B813',
        'dark-card': '#132F4C',
        'light-card': '#FFFFFF',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.1rem',
        lg: '1.25rem',
        xl: '1.30rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      maxWidth: {
        50: '50%',
        60: '60%',
        70: '70%',
        80: '80%',
        90: '90%',
      },
    },
  },
  plugins: [],
}
