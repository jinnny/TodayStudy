const path = require('path');

module.exports = {
    name: 'word-replay-setting',
    node: 'development', //실서비스 production
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
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }]
    },

    output: {
        // 실제 dist 경로가 됨.(path.join 은 자동으로 만들어줌 경로)
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
// 출력
    }
};