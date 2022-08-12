module.exports = {
  important: true,
  content: [
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      zIndex: ['hover'],
      filter: ['hover']
    },
  },
  plugins: [],
};
