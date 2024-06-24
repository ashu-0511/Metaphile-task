/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor:{
      "form":"#fff",
      'btn':' #0ba5e9',
      'Student':"#eff8ff"
    },
    textColor:{
      "btn":"#fff",
      "hover":"#000",
      "link":"#0000EE"
    }
  },
  plugins: [],
}