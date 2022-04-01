// load path module
const path = require('path');

// load MiniCssExtractPlugin

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    // entry-point
    entry: {
        'main':'./src/index.js',
        'top':'./src/top.js'
    },
    // output
    output: {
        filename:'[name].js',
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
            filename:'[name].css',
        }),
    ],
    // exclude node_modules from watching
    watchOptions: {
        ignored:/node_modules/
    },
    
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
          },
    },
};