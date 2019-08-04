const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.jsx', '.js']
    },

    entry: {
        app: './client',
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                // 옵션에 따라 코드를 아래처럼 사용가능(배열로만든 뒤 객체를 뒤에 적음)
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        // browserslist
                        browsers: ['last 2 chrome versions' , '> 5% in KR']
                    },
                    debug: true,
                }], 
                '@babel/preset-react'],
                plugins: []
            }
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true})
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
}
