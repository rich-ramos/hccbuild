const path = require('path');

module.exports = {
    entry: './src/assets/scripts/app.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'src')
    },
    mode: 'development'
}