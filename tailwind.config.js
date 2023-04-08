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
        'dark-primary-1': '#1B3052',
        'dark-primary-2': '#011E3C',
        'dark-primary-3': '#0E192C',
        'dark-primary-button': '#0059B2',
        'dark-secondary': '#F4C518',
        'dark-secondary-2': '#e7b813',
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
    },
  },
  plugins: [],
}
