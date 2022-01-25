const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index:"./src/index.js"
    },


    // plugin -------------------------------------
    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html",inject:true})
    ],


    // rules --------------------------------------
    module:{
        rules:[

            // transpiling ES6 and jsx -----------------------
            {
                test: /\.(js|jsx)$/i,
                use: [{
                    loader:"babel-loader",
                    options:{
                        presets: ["@babel/preset-env","@babel/preset-react"]

                    }
                }],
                exclude: /(node_modules)/,
            },

            // styles --------------------------
            {
                test: /\.s[c|a]css$/i,
                exclude:/(node_modules)/,
                use:[
                    "style-loader",
                    "scss-loader",
                    "css-loader"

                ]
            },

            // images ------------------------------
            {
                test: /\.(gif|jpg|jpeg|svg|png)$/i,
                use:"asset/resurese"
            },

            // fonts ----------------------------------
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                use: "asset/resource"
            }

        ]
    },

}