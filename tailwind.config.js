const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif]
      },
    }
  },
  plugins: [require('@tailwindcss/typography')]
}