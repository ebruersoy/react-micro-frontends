const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 9005,
  },
  output: {
    publicPath: "http://localhost:9005/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "api",
      library: { type: "var", name: "api" },
      filename: "remoteEntry.js",
      exposes: {
        // expose each component you want
        "./Api": "./src/Api",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
