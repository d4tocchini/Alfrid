// TextureMinFilter.js

import alfrid from '../../src/alfrid';
// import setupAlfrid from '../utils/setupAlfrid';

import vs from '../shaders/basic.vert';

console.log(vs);

console.log('1');
// const { GL, BatchAxis, Geom } = alfrid;



// let meshBox, shader;

// function init(camera, orbitalControl) {
// 	// console.log('Init', GL);
// 	meshBox = Geom.cube(1, 1, 10);
// 	console.log('init', meshBox);

// 	// shader = new alfrid.GLShader();
// }

// function render() {
// 	// console.log('render', meshBox);
// 	// shader.bind()
// 	// GL.draw(meshBox);	
// }

// function resize() {
// }


// setupAlfrid({ignoreWebgl2:true}, {init, render, resize}).then((canvas)=> {
// 	console.log('canvas created:', canvas);
// })
// .catch((err) => {
// 	console.log('Error :', err);
// });