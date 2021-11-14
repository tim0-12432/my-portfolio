const config = require("./webpack.config.js");

module.exports = {
    webpack: () => {
        return config;
    }
}