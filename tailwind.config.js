/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Tanha: ["Tanha"],
      },
      backgroundImage: {
        HeroImg: "url('../public/Images/Hero-bg.jpg')",
      },
      colors: {
        Primary: "#ffc451",
      },
      listStyleImage: {
        click: "url('../public/Images/double-check.svg')",
      },
      screens: {
        laptop: "1000px",
      },
    },
  },
  plugins: [],
};
