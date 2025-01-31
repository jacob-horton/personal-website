/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "./themes/pehtheme-simple-hugo/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 750ms ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
