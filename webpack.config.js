const path = require("path");

module.exports = {
  entry: {
    app: "./src/client/js/app.js",
  },
  mode: "development",
  watch: true,
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "asset", "js"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
