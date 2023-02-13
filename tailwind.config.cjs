const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.cyan,
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: { color: theme('colors.gray.700') },
      })
    }),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
  ],
}
