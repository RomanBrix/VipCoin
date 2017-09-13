const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports= {
    entry: {
        'scripts/main': './points/Main.js',
        'scripts/packages': './points/Packages.js',
        'scripts/faq': './points/Faq.js',
        'scripts/contacts': './points/contacts.js',
        'scripts/about': './points/about.js',
        'profile/scripts/me': './points/profile/me.js',
        'profile/scripts/settings': './points/profile/settings.js',
        'admin/scripts/generally': './points/admin/generally.js',
        'admin/scripts/users': './points/admin/users.js',

    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js'
    },
    plugins:[
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    devtool: NODE_ENV === 'dev' ? 'source-map' : false,
    watch: NODE_ENV === 'dev',
    watchOptions:{
        // aggrigateTimeout: 100
    },
    module: {

        rules: [
            // {
            //     test: /\.js$/,
            //     enforce: "pre",
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/,
            // },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    'url-loader?limit=100000'
                ]
            }
        ]

    }
    // ,
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'build'),
    //     inline:true,
    //     port:6942
    // }
    // ,
    // resolve:{
    //     extensions:['js', 'cofee','','ts'],
    //     alias:{
    //         api:path.resolve(__dirname,'api.js')
    //     }
    // }
}
if(NODE_ENV === 'prod'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}