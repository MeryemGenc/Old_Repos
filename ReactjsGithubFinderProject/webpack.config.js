const FileLoader = require('file-loader');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    //entry: './src/examples/state-hook.js',
    //entry: './src/examples/note-app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        //Router'ın kaynak sayfa değil component döndürmesi + sayfayı yenilememesi için:
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    }
}