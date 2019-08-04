const path = require('path');

module.exports = {
    name: 'baseball-setting',
    mode: 'development',
    node: { global: true }, //실서비스 production
    devtool: 'eval',
    // 아래거를 이용하면 entry 쪽에 확장자명을 붙이지 않아도 알아서 찾아옴
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client']
// 입력
    },
    
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        // browserslist
                        browsers: ['last 2 chrome versions' , '> 5% in KR']
                    },
                    debug: true,
                }], 
                '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ],
            }
        }]
    },

    output: {
        // 실제 dist 경로가 됨.(path.join 은 자동으로 만들어줌 경로)
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
// 출력
    }
};