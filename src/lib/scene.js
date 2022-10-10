import * as THREE from 'three';
import noise from 'simplenoise';

// Establish a new scene
const SCENE = new THREE.Scene();

// Establish a new Sphere then add it to the scene
const SPHERE = new THREE.Mesh(
	new THREE.SphereGeometry(1, 128, 128), 
	new THREE.MeshNormalMaterial()
);
SCENE.add(SPHERE);

// Establish a new perspective camera and set it's position
const CAMERA = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
CAMERA.position.z = 5;

// Establish an empty renderer for later use
var renderer;

// The animate() function is used to manipulate the sphere,
// adding noise to it's vertices which in return gives it
// that wavy kind of look.
const animate = () => {
	// three.js animation function
	requestAnimationFrame(animate);

	// The Size of the "waves"
	const SIZE = performance.now() * 0.001;

	// Iterate over the spheres vertices
	for (var i = 0; i < SPHERE.geometry.vertices.length; i++) {
		var v = SPHERE.geometry.vertices[i];
		v.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(v.x * 3 + SIZE, v.y * 3, v.z * 3));
	}
	// Remove below to give a graphic/comical look
	SPHERE.geometry.computeVertexNormals();

	// Update the vertices and render the new sphere
	SPHERE.geometry.verticesNeedUpdate = true;
	renderer.render(SCENE, CAMERA);
};

// The resize() function is used to resize the scene.
// This is required for if the user resizes the site,
// which is caught using the Window Resize Listener
export const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	CAMERA.aspect = window.innerWidth / window.innerHeight;
	CAMERA.updateProjectionMatrix();
};
// Window Resize Listener
window.addEventListener('resize', resize);

// The newScene() function is the primary function
// for updating the sphere's scene data.
export const newScene = (canvas) => {
	// Canvas: The element the sphere is established as
	// Antialias: Object Blurring on Edges.
	// Alpha: Transparent Scene Background
	renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	
	// Animate the sphere
	animate();
};
