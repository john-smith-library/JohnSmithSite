const glob = require('glob');
const path = require('path');

module.exports = {
    entry: glob.sync('./snippets/**/index.tsx').reduce((acc, path) => {
        const entry = path.replace('/index.tsx', '')
        acc[entry] = path
        return acc
    }, {}),

    output: {
        filename: './[name]/index.js',
        path: path.resolve(__dirname, './dist')
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist/snippets'),
        },
        compress: true,
        port: 9000,
    },
}
