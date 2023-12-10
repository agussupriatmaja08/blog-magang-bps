/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['index.html'],
    darkMode: "class",
  },
  
  
  theme: {
    container : {
      center : true,
      // padding : "10px", 
    },
    extend: {
      colors:{
        primary : "#1d4ed8", 
        secondary : "#64748b",
        dark : "#0f172a", 
      }
    },
  },
  plugins: [
    require('taos/plugin'),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
}

