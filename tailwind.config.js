/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Tanha: ["Tanha"],
      },
      colors: {
        Primary: "#40A2D8",
        SectionTitle: "#aaaaaa",
      },
      listStyleImage: {
        click: "url('../public/images/double-check.svg')",
      },
      screens: {
        laptop: "1000px",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
