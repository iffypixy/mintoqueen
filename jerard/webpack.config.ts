import * as path from "path";
import * as webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import Dotenv from "dotenv-webpack";
import "webpack-dev-server";

interface ConfigurationProps {
  env: "production" | "development";
}

export default ({env}: ConfigurationProps): webpack.Configuration => {
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
        new TsconfigPathsPlugin({
          configFile: path.join(__dirname, "tsconfig.json"),
        }) as unknown as webpack.ResolvePluginInstance,
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
      new Dotenv({
        path: `./.env.${env}.local`,
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
        publicPath: "/static",
      },
    },
    stats: "errors-warnings",
  };
};
