const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pages = ['index', 'characters', 'locations', 'episodes', 'contact'];

module.exports = {
    mode: 'development',
    entry: pages.reduce((config, page) => {
        // eslint-disable-next-line no-param-reassign
        config[page] = `./src/js/${page}.js`;
        return config;
    }, {}),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    // 3
    // The /dist folder will be used to serve our application
    // to the browser
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
    plugins: [new CleanWebpackPlugin()].concat(
        pages.map(
            (page) => new HtmlWebpackPlugin({
                title: 'Rick and Morty Api Representation',
                inject: true,
                template: `./src/html/${page}.html`,
                filename: `${page}.html`,
                chunks: [page],
            }),
        ),
    ),
    // 5
    // Integrate Babel in the build process
    // Define which files to use the loader
    module: {
        // configuration regarding modules
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/, // files to exclude
                use: ['babel-loader', 'eslint-loader'],
            },
            // CSS and SASS
            {
                test: /\.(scss|css)$/, // load files that end with scss and css
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        // options for resolving module requests
        extensions: ['*', '.js'], // files to load
    },
};
