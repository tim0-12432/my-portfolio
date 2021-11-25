/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const webpack = require("webpack");
const { resolve, join } = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

// Production or Development
const isProd = process.env.NODE_ENV || "development";

// Rules
const tsRule = {
	test: /\.ts(x?)$/,
	exclude: [/node_modules/, /build/, /dist/],
	loader: "ts-loader",
    options: {
        transpileOnly: true,
    }
};

const svgRule = {
	test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
	exclude: [/node_modules/, /build/, /dist/],
	loader: "file-loader",
	options: {
		limit: 10000
	}
};

// Plugins
const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: join(__dirname, 'src', 'index.html'),
        filename: "index.html",
        cache: false,
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: "public" }
        ]
    }),
    new webpack.ProvidePlugin({
        process: "process/browser"
    }),
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
    }),
    new CompressionPlugin({
        test: /\.(js|css)$/,
        algorithm: "gzip"
    }),
    new ImageminWebpWebpackPlugin(),
]

// Configuration
const config = {
    mode: isProd,
	resolve: {
        modules: [
            join(__dirname, 'node_modules')
        ],
		extensions: [".js", ".jsx", ".ts", ".tsx"]
	},
    resolveLoader: {
        modules: [
            join(__dirname, 'node_modules')
        ]
    },
	entry:  {
		index: resolve(__dirname, "src", "index.tsx")
	},
	output: {
		filename: "[name].bundle.js",
		path: resolve(__dirname, "build"),
        chunkFilename: "chunk-[name].[contenthash].js",
        clean: true
	},
	module: {
		rules: [tsRule, svgRule],
	},
    plugins: plugins,
    optimization: {
        moduleIds: 'named',
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    reuseExistingChunk: true,
                    chunks: 'all'
                }
            },
        },
    },
};

if (isProd === "production") {
    config.optimization = {
        minimizer: [new TerserWebpackPlugin()],
    };
} else {
    config.devtool = "cheap-module-source-map";
    config.devServer = {
        port: 3000,
        contentBase: join(__dirname, "src"),
        open: true,
        hot: true,
        compress: true,
        stats: "errors-only",
        overlay: true
    };
}

module.exports = config;