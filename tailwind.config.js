/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#65B530",
        secondary: "#9B9B9B",
        light: "#F5F5F5",
        dark: "#161616",
      },
      boxShadow: {
        "custom-light": "0 0 45px rgba(0, 0, 0, 0.08)",
        "custom-dark": "0 0 45px rgba(0, 0, 0, 0.07)",
      },
      fontWeight: {
        medium: "500",
        bold: "700",
        black: "900",
      },
    },
  },
  plugins: [],
};
