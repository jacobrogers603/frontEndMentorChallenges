/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    extend: {
      colors: {
      // Using modern `rgb`
      veryDarkDesaturatedBlue: 'rgb(var(--very-dark-desaturated-blue) / <alpha-value>)',
      darkGrayishBlue: 'rgb(var(--dark-grayish-blue) / <alpha-value>)',
      darkCyan: 'rgb(var(--dark-cyan) / <alpha-value>)',
      darkGray: 'rgb(var(--dark-gray) / <alpha-value>)'
    }
  },
  },
  plugins: [],
}

