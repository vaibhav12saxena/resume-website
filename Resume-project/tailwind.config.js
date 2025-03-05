module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
    // Enable arbitrary values
    arbitraryValues: true,
  },
};
