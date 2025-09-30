/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0E375F",
        mint:"#B5EAEA", sky:"#BDE0FE", peach:"#FFD6A5", lilac:"#CDB4DB", lime:"#D9ED92",
      },
      fontFamily: { display:["Poppins","ui-sans-serif","system-ui"], body:["Inter","ui-sans-serif","system-ui"] },
      borderRadius: { '2xl': '1.25rem' }
    },
  },
  plugins: [],
}
