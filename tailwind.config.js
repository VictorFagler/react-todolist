module.exports = {
  content: [
    "./index.html", // Add this if you have an index.html at the root
    "./src/**/*.{js,jsx,ts,tsx}", // Scan files in the src folder for Tailwind classes
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.5rem", // 8px (smaller than `text-xs`)
      },
    },
  },
  plugins: [],
};
