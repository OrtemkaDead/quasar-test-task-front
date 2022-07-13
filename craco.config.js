const path = require("path");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: '@import "@Assets/styles/main.scss";',
      },
    },
  },
  webpack: {
    alias: {
      "@Assets": path.resolve(__dirname, "src/assets/"),
      "@Utils": path.resolve(__dirname, "src/utils/"),
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Pages": path.resolve(__dirname, "src/pages/"),
      "@Layouts": path.resolve(__dirname, "src/layouts/"),
    },
  },
};
