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
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?url=false', { loader: 'postcss-loader', options: { postcssOptions: postCSSPlugins }}]
            }
        ]
    }
}