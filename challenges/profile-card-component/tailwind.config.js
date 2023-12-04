/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/input.css"],
  theme: {
    extend: {
      colors: {
      // Using modern `rgb`
      veryDarkDesaturatedBlue: 'rgb(var(--very-dark-desaturated-blue) / <alpha-value>)',
      darkGrayishBlue: 'rgb(var(--dark-grayish-blue) / <alpha-value>)',
      darkCyan: 'rgb(var(--dark-cyan) / <alpha-value>)',
      darkGray: 'rgb(var(--dark-gray) / <alpha-value>)'
    },
    fontFamily: {
      kumbhSans: ['Kumbh Sans', 'sans-serif'], 
    },
    minWidth: {
      'custom': '21.875rem'
    },
    spacing: {
      'custom': '5.5rem'
    }
  },
  },
  plugins: [],
}

