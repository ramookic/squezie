/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        "custom-inset": "inset -20px -10px 1000px 124px #F0F1F1",
      },
      colors: {
        "grey-0": "#FFFFFF",
        "grey-50": "#F5F5F6",
        "grey-100": "#F0F1F1",
        "grey-200": "#ECECED",
        "grey-300": "#CECFD2",
        "grey-400": "#94969C",
        "grey-500": "#85888E",
        "grey-600": "#61646C",
        "grey-700": "#333741",
        "grey-800": "#1F242F",
        "grey-900": "#161B26",
        "grey-950": "#0C111D",
        "brand-50": "#D1E9FF",
        "brand-400": "#53B1FD",
        "brand-500": "#2E90FA",
        "brand-600": "#1570EF",
      },
      keyframes: {
        rotateLoader: {
          "0%": { transform: "rotate(0deg) " },
          "50%": { transform: "rotate(120deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
};
