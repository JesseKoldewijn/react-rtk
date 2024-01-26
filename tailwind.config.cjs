const defaults = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--geist-ui-font)", "Inter", defaults.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
