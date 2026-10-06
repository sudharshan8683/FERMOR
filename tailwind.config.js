module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#10261f", moss: "#1f4d3a", leaf: "#2f7a56", sand: "#f6f1e7", paper: "#fbf8f2", clay: "#d9692e", lime: "#c8f169", night: "#0b1411", line: "#e4dccb" },
      fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
