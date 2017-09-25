// cube.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec3 aNormal;
attribute vec4 aBoneIndex;
attribute vec4 aWeight;

uniform mat4 uModelMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;

uniform mat4 joint0;
uniform mat4 joint1;
uniform mat4 joint2;
uniform mat4 joint3;

varying vec2 vTextureCoord;
varying vec3 vNormal;


mat4 getJoint(float index) {
	if(index < 1.0) {
		return joint0;
	} else if(index < 2.0) {
		return joint1;
	} else if(index < 3.0) {
		return joint2;
	} else {
		return joint3;
	}
}



void main(void) {

	//	0
	mat4 j0 = getJoint(aBoneIndex.x);
	vec4 pos0 = j0 * vec4(aVertexPosition, 1.0) * aWeight.x;

	//	1
	mat4 j1 = getJoint(aBoneIndex.y);
	vec4 pos1 = j1 * vec4(aVertexPosition, 1.0) * aWeight.y;

	//	2
	mat4 j2 = getJoint(aBoneIndex.z);
	vec4 pos2 = j2 * vec4(aVertexPosition, 1.0) * aWeight.z;

	vec4 position = pos0 + pos1 + pos2;

	// vec3 position = aVertexPosition + aBoneIndex.xyz * 0.0 + aWeight.xyz * 0.0;
	gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * position;
	vTextureCoord = aTextureCoord;
	vNormal = aNormal;
}