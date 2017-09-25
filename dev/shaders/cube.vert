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

varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec4 vBoneIndex;
varying vec4 vWeight;

void main(void) {

	vec3 position = aVertexPosition + aBoneIndex.xyz * 0.0 + aWeight.xyz * 0.0;
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);
    vTextureCoord = aTextureCoord;
    vNormal = aNormal;


    vBoneIndex = aBoneIndex;
    vWeight = aWeight;
}