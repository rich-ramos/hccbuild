const path = require('path');

const postCSSPlugins = {
    plugins: [
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('autoprefixer')
    ]
};

module.exports = {
    entry: './src/assets/scripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./src/**/*.html')
        },
        contentBase: path. join(__dirname, 'src'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?url=false', { loader: 'postcss-loader', options: { postcssOptions: postCSSPlugins }}]
            }
        ]
    }
}