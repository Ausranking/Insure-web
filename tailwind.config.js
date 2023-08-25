/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-violet": "hsl(256,26%,20%)",
        "primary-blue": " hsl(216, 30%, 68%)",
        "dark-violet": "hsl(270, 9%, 17%)",
        "light-gray": " hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "bg-mobile-nav": "url(/src/assets/images/bg-pattern-mobile-nav.svg)",
      },
    },
  },
  plugins: [],
};
