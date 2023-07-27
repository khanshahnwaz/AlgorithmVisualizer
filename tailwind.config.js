/** @type {import('tailwindcss').Config} */
const defaultTheme=require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
   extend:{
    screens:{
      'sm':'100px',
      // ...defaultTheme.screens,
    },
   },
   
  },
  plugins: [],
}

