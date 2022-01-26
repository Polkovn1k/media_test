const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractCssMediaQueries = require('@elambro/extract-css-media-queries');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: `/dist/`
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `style.css`,
        }),
        new ExtractCssMediaQueries({
            breakpoints: [576],
            verbose: false,
            minify: true,
            filename: `large_style.css`,
            combined: true,
            exclude: null,
            include: null,
        }),
    ],
    output: {
        path: __dirname + `/dist`,
        filename: `[name].js`
    },
    entry: {
        'entry_point': __dirname + `/src/entry_point.js`
    },
};
