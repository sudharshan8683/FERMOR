module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0a1f3d", brand: "#4f46e5", sky: "#818cf8", mist: "#f6f8fc", mint: "#14b8a6", line: "#e6eaf3", paper: "#ffffff", night: "#0a1f3d" },
      fontFamily: { serif: ["var(--font-sans)", "system-ui", "sans-serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
