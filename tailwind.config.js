/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "sm" : "375px",
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      backgroundImage:{
        "bgChat" :"url('/src/assets/bgImage.png')"
      }
    },
      container: {
        center:true,
        padding: {
          DEFAULT:'1rem',
        }
      }
    },
  plugins: [],
}