const  HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const plugins=[
    new ModuleFederationPlugin({
        name:'cart',
        filename:'remoteEntry.js',
        exposes:{
            './CartShow':'./src/index'
        }
    }),
    new HtmlWebpackPlugin({
        template:'./public/index.html'
    })
]
module.exports = {
    mode:'development',
    devServer:{
        port:8082
    },
    plugins
}