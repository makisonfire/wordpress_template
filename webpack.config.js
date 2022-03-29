// load path module
const path = require('path');

// load MiniCssExtractPlugin

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    // entry-point
    entry: './src/index.js',
    // output
    output: {
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
            {
                // sass and css loader
            test:/\.(scss|sass|css)$/i,
            use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
            },
        ],
    },

    // plugins
    plugins:[
        new MiniCssExtractPlugin({
            // output filename 
            filename:'style.css',
        }),
    ],
    // source-map output 
    devtool:'source-map',
    // exclude node_modules from watching
    watchOptions: {
        ignored:/node_modules/
    },
};