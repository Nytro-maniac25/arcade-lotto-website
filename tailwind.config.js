/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "mobile-m": "375px",
        "mobile-l": "425px",
      },
      backgroundImage: {
        "hero-bg": "linear-gradient(180deg, #1F1876 0%, #0C0641 100%);",
        team: "linear-gradient(180deg, #1F1876 0%, #0C0641 100%);",
      },
      colors: {
        primary: "#FC681E",
      },
      fontFamily: {
        clash: "Clash",
        poppins: "Poppins",
      },
      fontSize: {
        xs: "12px",
        xxs: "10px",
      },
      boxShadow: {
        "hero-cta": "inset 0px -2px 6px #7A4200, inset 0px 1px 1px #FFFFFF;",
        card: "4px 3px 4px rgba(0, 0, 0, 0.25);",
        "cta-btn":
          "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 1px rgba(0, 0, 0, 0.25), inset 0px 2px 1px rgba(255, 255, 255, 0.25);",
        team: "0px 20px 40px rgba(0, 0, 0, 0.25);",
        discord: "0px 34px 7px rgba(0, 0, 0, 0.25);",
        "discord-btn": "inset 0px -2px 6px #7A4200, inset 0px 1px 1px #FFFFFF;",
      },
      dropShadow: {
        "cta-btn":
          "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 1px rgba(0, 0, 0, 0.25), inset 0px 2px 1px rgba(255, 255, 255, 0.25);",
      },
    },
  },
  plugins: [],
};
