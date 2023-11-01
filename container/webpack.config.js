const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const plugins = [
    new ModuleFederationPlugin({
        name:'container',
        remotes:{
           products:'products@http://localhost:8081/remoteEntry.js',
           cart:'cart@http://localhost:8082/remoteEntry.js',
        }
    }),
    new HtmlWebpackPlugin({
        template:'./public/index.html'
    })
]

module.exports = {
    mode:"development",
    devServer:{
        port:8080
    },
    plugins
}