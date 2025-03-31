/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#bc3949",
        secondary: "#deb739",
        dark: "#27282d",
        light: "#fafaf9",
        "gray-light": "#c8cbca",
        "gray-medium": "#a2a8a4",
        teal: "#309e97",
        beige: "#c8aba0",
        "beige-light": "#d3c6a7",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
