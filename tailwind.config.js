/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        poap: {
          100: "#b5aeff",
          200: "#ebc9f8",
          300: "#d4c9f8",
          400: "#9e85ef",
        },
        roadmap: {
          100: "#6E25D3",
          200: "#f6f6fd",
          300: "#5e58a3",
        },
      },
      fontFamily: {
        rubik: ['"Rubik Mono One"'],
      },
    },
  },
  plugins: [],
};
