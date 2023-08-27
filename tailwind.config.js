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
        "bg-footer-desk":
          "url(/src/assets/images/bg-pattern-footer-desktop.svg)",
        "bg-footer-mob": "url(/src/assets/images/bg-pattern-footer-mobile.svg)",
        "bg-hww-desk":
          "url(/src/assets/images/bg-pattern-how-we-work-desktop.svg),",
        "bg-hww-mob":
          "url(/src/assets/images/bg-pattern-how-we-work-mobile.svg)",
        "bg-intro-left-desk":
          "url(/src/assets/images/bg-pattern-intro-left-desktop.svg)",
        "bg-intro-left-mob":
          "url(/src/assets/images/bg-pattern-intro-left-mobile.svg), url(/src/assets/images/bg-pattern-intro-left-mobile.svg)",
        "bg-intro-right-desk":
          "url(/src/assets/images/bg-pattern-intro-right-desktop.svg)",
        "bg-intro-right-mob":
          "url(/src/assets/images/bg-pattern-intro-left-mobile.svg)",
        "bg-hero": "url(/src/assets/images/Hero-img-desk.jpg)",
      },
    },
  },
  plugins: [],
};
