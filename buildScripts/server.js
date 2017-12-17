import express from 'express';
import path from 'path';
import open from 'open';
import mongoose from 'mongoose';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/coupon-db';
const app = express();
const compiler = webpack(config);

mongoose.Promise = global.Promise;

mongoose.connect(mongoURL, { useMongoClient: true }, (error) => {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!');
        throw error;
    }
});

mongoose.connection.once('open', function() {
    console.log('Mongodb connection success!!');
});

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});
