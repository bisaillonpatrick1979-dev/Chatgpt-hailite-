/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        steel: "#1e293b",
        hail: "#38bdf8",
        gold: "#f6c453",
        paper: "#f8fafc"
      }
    }
  },
  plugins: []
};
