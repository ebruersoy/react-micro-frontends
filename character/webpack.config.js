const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 9004,
  },
  output: {
    publicPath: "http://localhost:9004/",
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
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "character",
      library: { type: "var", name: "character" },
      filename: "remoteEntry.js",
      exposes: {
        // expose each component you want
        "./CharactersPage": "./src/components/CharactersPage",
      },
      remotes: {
        api: "api",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
