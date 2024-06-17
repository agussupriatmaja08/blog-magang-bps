/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'bulan-pertama.html',
    'bulan-kedua.html',

    "node_modules/preline/dist/*.js",
    "dist/css/style.css",

    './dist/js/app.js'
  ],
  darkMode: 'class',
  theme: {
  
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#64748b",
        dark: "#0f172a",

      },
      transitionDuration: {
        '2000': '2000ms'
      },
      fontFamily: {
        'sans': ['sans-serif'], // Menambahkan Arial ke dalam font sans-serif
      }
    },
  },

  plugins: [
    require('taos/plugin'),
    require('preline/plugin'),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};