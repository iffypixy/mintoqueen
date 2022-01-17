const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TSConfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({env}) => {
  const isDev = env === "development";
  const isProd = env === "production";

  return {
    mode: env,
    entry: path.join(__dirname, "src/index.tsx"),
    output: {
      path: path.join(__dirname, "build"),
      filename: "[contenthash].bundle.js",
      clean: true,
    },
    optimization: {
      minimize: isProd,
      runtimeChunk: true,
      splitChunks: {
        chunks: "all",
      },
    },
    resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
      plugins: [
        new TSConfigPathsWebpackPlugin({
          configFile: path.join(__dirname, "tsconfig.json"),
        }),
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.join(__dirname, "public/index.html"),
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: path.join(__dirname, "tsconfig.json"),
        },
        async: false,
        eslint: {
          enabled: true,
          files: "./{src,typings}/**/*.{ts,tsx,js,jsx,json}",
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                minified: isProd,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    devtool: isDev && "eval",
    devServer: {
      hot: true,
      port: 3000,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "public"),
        publicPath: "/public",
      },
    },
    stats: "errors-warnings",
  };
};
