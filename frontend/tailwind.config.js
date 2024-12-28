/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/home/home.jsx",
    "src/pages/root/root.jsx",
    "src/pages/error/error.jsx",
    "src/App.jsx",
    "src/components/sideliner/index.jsx",
    "src/components/navbar/index.jsx",
    "src/components/bottombar/index.jsx",
    "src/components/fixedImage/fixedImage.jsx",
    "src/components/aboutMe/index.jsx",
    "src/components/contactMe/index.jsx",
    "src/components/homeIntro/index.jsx",
    "src/components/work/index.jsx",
    "src/components/blogSection/index.jsx",
    "src/pages/error/error.jsx",
    "src/pages/resume/index.jsx",
  ],
  theme: {
    fontFamily: {
      pixelated: ["VT323", "monospace"]
    },
    extend: {}, 
  },
  plugins: [],
}

