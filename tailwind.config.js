/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studentsBlue: {
          100: "#32a2f1",
          200: "#0b4fa2",
        },
        studentsYellow: {
          100: "#f8ea04",
        },
      },
      fontFamily: {
        comforter: ['"Comforter Brush"'],
        pathway: ['"Pathway Gothic One"'],
      },
      backgroundImage: {
        hero: "url('../public/bg.jpg')",
      },
    },
  },
  plugins: [],
};
