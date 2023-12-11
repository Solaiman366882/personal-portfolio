/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-bg":"#101018",
        "primary-color":"#079211",
        "secondary-color":"#707071",
        "secondary-bg":"#313131",
      },
      fontFamily:{
        "mer":"'Merriweather', serif",
        "robot":"'Roboto', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
}