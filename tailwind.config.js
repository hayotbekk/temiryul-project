/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      //  'sm':'640px',
      //  'md':'768',
      //  'lg':'1020px',
      //  'xl':'1280px',
      //  '2xl':'1536px'
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1020px',
      'xl': '1280px',
      '2xl': '1536px',

    },
  },
  plugins: [
  ],
}