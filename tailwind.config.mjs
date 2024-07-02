/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      primary: "#02B0EF",
      semibrown: "#FDF8EC",
      celeste: "#B6EAFF",
      amarillo: "#FFE500",
    },
    extend: {
      fontFamily: {
        Bitcheese: "Bitcheese",
        Amatic_SC: "Amatic SC",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
