const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const plugins = [
    new ModuleFederationPlugin({
        name:'products',
        filename:'remoteEntry.js',
        exposes:{
            './ProductIndex':'./src/index'
        },
        shared:['faker']
    }),
    new HtmlWebpackPlugin({
        template:'./public/index.html'
    })
]

module.exports = {
    mode:"development",
    devServer:{
        port:8081
    },
    plugins
}