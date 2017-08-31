// serve.js

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');
const ip = require('ip').address();

// console.log('Config :', config);
// console.log('IP Address : ', ip);
console.log('Target file :', process.argv[2]);
const targetFile = process.argv[2];
if(targetFile !== undefined) {
	config.entry[0] = `./${targetFile}`;
}
const compiler = webpack(config);

console.log('config.entry', config.entry);

const server = new WebpackDevServer(compiler, config)
.listen(config.port, ip, (err) => {
	if (err) {
		errorPrint(err);
	}
	console.log(`Listening at ${ip}:${config.port}`);
});