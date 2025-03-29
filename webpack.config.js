const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  source: path.resolve(__dirname, "src"),
  output: path.resolve(__dirname, "dist"),
  htmlTemplate: path.resolve(__dirname, "src", "index.html"),
  entry: path.resolve(__dirname, "src", "index.js"),
};

module.exports = {
  mode: "development",
  entry: paths.entry,
  output: {
    filename: "main.js",
    path: paths.output,
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: [paths.htmlTemplate],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.htmlTemplate,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};