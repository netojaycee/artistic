const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nicky: ['"Nicky Laatz"'],
        playfairsc: ['"Playfair Display SC"'],
        playfair: ['"Playfair Display"'],
      },
      colors: {
        primary: "#B39C8B",
        primaryVariant: "#CBB6A4",
      },
    },
  },
  plugins: [],
});
