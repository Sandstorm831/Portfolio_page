/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/home/home.jsx",
    "src/pages/root/root.jsx",
    "src/pages/error/error.jsx",
    "src/App.jsx",
    "src/components/sideliner/index.jsx",
    "src/components/navbar/index.jsx",
  ],
  theme: {
    fontFamily: {
      pixelated: ["VT323", "monospace"]
    },
    extend: {}, 
  },
  plugins: [],
}

