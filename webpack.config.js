module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: './bootstrap.js',
    output: {
        path: './public/build/js',
        publicPath: '/public/js/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    optional: ["es7.functionBind", "es7.classProperties"]
                }
            },
            { test: /\.json$/, loader: 'json-loader'}
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    watch: true,
    keepalive: true
};
