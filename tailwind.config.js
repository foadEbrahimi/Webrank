/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Tanha: ["Tanha"],
      },
      colors: {
        Primary: "#ffc451",
        SectionTitle: "#aaaaaa",
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
