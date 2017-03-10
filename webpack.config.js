module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'dist/bundle.js',
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            test: /\.jsx?$/,
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015'],
            }
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            include: /flexboxgrid/
        }, {
            test: /\.(jpg|png|svg)$/,
            loader: 'url-loader',
            options: {
                limit: 25000,
            },
        }],
    }
}
