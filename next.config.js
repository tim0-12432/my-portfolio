
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
    webpack: (config, {dev, defaultLoaders}) => {
        config.module.rules.push({
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            exclude: [/node_modules/, /build/, /dist/],
            use: [
                defaultLoaders.babel,
                {
                    loader: "file-loader",
                    options: {
                        limit: 10000
                    }
                }
            ]
        });
        config.module.rules.push({
            test: /\.ts(x?)$/,
            exclude: [/node_modules/, /build/, /dist/],
            use: [
                defaultLoaders.babel,
                {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                }
            ]
        });
        if (!dev) {
            config.module.rules.push({
                optimization: {
                    minimizer: [new TerserWebpackPlugin()],
                }
            });
        }
        return config;
    }
}