module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "91rem", // Custom label
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
    // Enable arbitrary values
    arbitraryValues: true,
  },
};
