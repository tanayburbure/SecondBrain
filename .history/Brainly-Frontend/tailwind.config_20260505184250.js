/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors : {
            slate : {
                
            },
            purple : {
                200 : "#d9ddee",
                500 : "#9492db",
                600 : "#7164c0"
            }
        }
    },
  },
  plugins: [],
}