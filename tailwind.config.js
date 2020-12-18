const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    'src/**/*.html',
    'src/**/*.liquid',
    'src/**/*.md'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
