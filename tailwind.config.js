/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "96px",
        width: {
          default: "1440px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      colors: {
        hitam: "#1D2939",
        merah: "#E31B54",
        hijau: "#12B76A",
        biru: "#1D88C9",
        abu: "#F2F4F7",
        ping: "#FEE4E2",
        hijauMuda: "#D1FADF",
        biruMuda: "#E0F2FE",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
