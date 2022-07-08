const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['uncut-sans', ...defaultTheme.fontFamily.sans],
        serif: ['sprat', ...defaultTheme.fontFamily.serif]
      },
    }
  },
  plugins: [require('@tailwindcss/typography')]
}