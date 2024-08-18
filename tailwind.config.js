/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./js/js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
       
      },
      screens: {
        'xs': '456px',
        
      },
      backgroundImage: {
        'loginBackground': "url('/images/pexels-willpicturethis-1954524.jpg')",
      },
      boxShadow:{ 
        "success": "rgb(92,184,92) 0px 1px 10px 0px;",
        "error": "rgb(255,51,51) 0px 1px 10px 0px;"
      },
      colors:{
        "black4" : "rgba( 0, 0, 0, 0.5)"
      }
    },
  },
  plugins: [],
}

