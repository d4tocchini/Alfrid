// main.js
import './global.scss';
import quickSetup from './utils/quickSetup';
import parser from 'collada-parser';

import { GL, Geom, GLShader, Mesh } from '../src/alfrid';

import vs from './shaders/cube.vert';
let cube, shader;

function render() {
	if(!cube) {
		return;
	}
	shader.bind();
	GL.draw(cube);
}


function onModelLoaded(o) {
	const { name, modelMatrix, mesh } = o;
	console.log('Model Loaded ', name);
	console.log('mesh : ', mesh);

	const { vertices, triangles, normals, coords, bone_indices, weights, bind_matrix, bones } = mesh;
	const position = getNormalisedArray(vertices, 3);
	const uv = getNormalisedArray(coords, 2);
	const normal = getNormalisedArray(normals, 3);

	const boneIndex = getNormalisedArray(bone_indices, 4);
	const weight = getNormalisedArray(weights, 4);


	console.table(bones);

	shader = new GLShader(vs);
	cube = new Mesh();
	cube.bufferVertex(position);
	cube.bufferTexCoord(uv);
	cube.bufferNormal(normal);
	cube.bufferIndex(triangles);

	cube.bufferData(boneIndex, 'aBoneIndex');
	cube.bufferData(weight, 'aWeight');
}


quickSetup(render)
.then(()=> {
	parser.load('assets/Bend.dae', (o)=>onModelLoaded(o[0]));
	// parser.load('assets/walter-animation.dae', (o)=>onModelLoaded(o[0]));
	// parser.load('assets/giantwalk.dae', (o)=>onModelLoaded(o[0]));
});


function getNormalisedArray(mAry, mNum) {
	const result = [];

	let i=0;
	while(i <mAry.length) {
		var t = [];
		for(let j=0; j<mNum; j++) {
			t.push(mAry[i+j]);
		}
		result.push(t)

		i += mNum;
	}

	return result;
}