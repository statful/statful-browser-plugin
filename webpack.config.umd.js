const path = require('path');
const webpack = require('webpack');
const npmPackage = require('./package.json');
const banner = `${npmPackage.name} ${
    npmPackage.version
} \nCopyright 2018 Statful \nhttps://www.statful.com`;

module.exports = () => {
    return {
        entry: {
            'statful-browser-plugin': './src/statful-browser-plugin.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].umd.min.js',
            library: 'StatfulBrowserPlugin',
            libraryTarget: 'umd',
            libraryExport: 'default'
        },
        plugins: [
            new webpack.BannerPlugin(banner),
            new webpack.DefinePlugin({
                PACKAGE_NAME: JSON.stringify(process.env.npm_package_name),
                PACKAGE_VERSION: JSON.stringify(process.env.npm_package_version)
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
            ]
        }
    };
};
