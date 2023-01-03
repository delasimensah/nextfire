/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["var(--font-nunito-sans)"],
      },
      colors: {
        bg: "#eef0f1",
        text: "#08090a",
        customBlue: "#3b49df",
        customRed: "#df3b3b",
        customGreen: "#3bdf72",
        customGray: "#b5bdc4",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
};
