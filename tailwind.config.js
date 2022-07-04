const path = require('path')

module.exports = {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './layouts/**/*.{html,js,vue}'
  ],
  plugins: [require('@tailwindcss/typography')]
}