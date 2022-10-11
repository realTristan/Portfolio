import * as THREE from 'three';
import noise from 'simplenoise';

// Establish a new scene
const SCENE = new THREE.Scene();

// Establish a new Sphere then add it to the scene
const SPHERE = new THREE.Mesh(
	new THREE.SphereGeometry(1, 128, 128), 
	new THREE.MeshDepthMaterial()
);
SCENE.add(SPHERE);

// Establish a new perspective camera and set it's position
const CAMERA = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
CAMERA.position.z = 1.5;
CAMERA.position.x = -1.2;
CAMERA.position.y = -0.40;

// Establish an empty renderer for later use
let renderer;

// Establish a mouse move listener for modifying
// the sphere's rotational axis
var mouse = new THREE.Vector2()
document.addEventListener('mousemove', (e) => {
	e.preventDefault();
    mouse.x = e.clientX / (window.innerWidth * 370)
    mouse.y = e.clientY / (window.innerHeight * 870);
}, false);

// The animate() function is used to manipulate the sphere,
// adding noise to it's vertices which in return gives it
// that wavy kind of look.
const animate = () => {
	// three.js animation function
	requestAnimationFrame(animate);

	// The Sphere's "Wave" Variables
	const SPEED = performance.now() * 0.001;
	const SPIKES = 3;

	// Iterate over the spheres vertices
	for (let i = 0; i < SPHERE.geometry.vertices.length; i++) {
		let v = SPHERE.geometry.vertices[i];
		// Use the noise.perlin3 function to create
		// the "wavy" look.
		v.normalize().multiplyScalar(
			1 + 0.3 * noise.perlin3(v.x * SPIKES + SPEED, v.y * SPIKES, v.z * SPIKES)
		);
	}
	// Rotate the sphere depending on the mouse position
	SPHERE.rotateX(mouse.x);
	SPHERE.rotateY(mouse.y);

	// Update the vertices and render the new sphere
	SPHERE.geometry.verticesNeedUpdate = true;
	renderer.render(SCENE, CAMERA);
};

// The resize() function is used to resize the scene.
// This is required for if the user resizes the site,
// which is caught using the Window Resize Listener
export const resize = () => {
	// Set the pixel ratio
	renderer.setPixelRatio(window.devicePixelRatio);
	// Set the screen size
	renderer.setSize(window.innerWidth, window.innerHeight);
	// Set the camera aspect ratio (most likely 16:9)
	CAMERA.aspect = window.innerWidth / window.innerHeight;
	// Update projection matrix
	CAMERA.updateProjectionMatrix();
};
// Window Resize Listener
window.addEventListener('resize', resize);

// The setScene() function is the primary function
// for updating the sphere's scene data.
export const setScene = (canvas) => {
	// Render the new scene
	renderer = new THREE.WebGLRenderer({
		// Canvas: The element the sphere is established as
		canvas: canvas,
		// Antialias: Object Blurring on Edges.
		antialias: true,
		// Alpha: Transparent Scene Background
		alpha: true
	});
	// Size the scene
	resize();
	// Animate the sphere
	animate();
};
