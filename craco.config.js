const path = require("path");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: '@import "@Assets/main.scss";',
      },
    },
  },
  webpack: {
    alias: {
      "@Assets": path.resolve(__dirname, "src/assets/"),
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Pages": path.resolve(__dirname, "src/pages/"),
    },
  },
};
