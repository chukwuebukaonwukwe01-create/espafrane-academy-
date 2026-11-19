/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#030D29", 800: "#0B1733", 700: "#16223F" },
        rust: { DEFAULT: "#A8371A", 600: "#922F15" },
        wa: { DEFAULT: "#25D366", 600: "#1FBA59" },
        ink: "#3F4654",
        mist: "#F5F8FC",
        chipblue: "#DCE4FF",
        chippink: "#FCDDD3",
        peach: "#FBD8C2",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans Variable"', "system-ui", "sans-serif"],
        body: ['"Source Sans 3 Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(3,13,41,0.04), 0 8px 24px -12px rgba(3,13,41,0.10)",
        lift: "0 24px 48px -24px rgba(3,13,41,0.28)",
      },
      maxWidth: { site: "1320px" },
    },
  },
  plugins: [],
};
