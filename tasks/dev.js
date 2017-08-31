// dev.js

const budo = require('budo');
const babelify = require('babelify');
const glslify = require('glslify');
const browserifyShader = require('browserify-shader');

const targetFile = process.argv[2];
console.log('Target File :', targetFile);

if(!targetFile) {
	console.log('Target file missing');
	process.exit();
}


budo(targetFile, {
	live: true,   
	stream: process.stdout, // log to stdout
	browserify: {
		transform: [babelify, glslify]   // use ES6
	}
}).on('connect', function(ev) {
	//...
	console.log(`Server UP at ${ev}`);
});