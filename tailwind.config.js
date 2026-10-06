module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0b1b3a", brand: "#2149e6", sky: "#3d6bff", mist: "#f3f6fd", mint: "#10b981", line: "#e3e9f5", paper: "#ffffff", night: "#0b1b3a" },
      fontFamily: { serif: ["var(--font-sans)", "system-ui", "sans-serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
