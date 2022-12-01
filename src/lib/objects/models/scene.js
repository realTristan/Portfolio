import { OrbitControls, THREE } from "$lib/Imports.js";

// The SetModelScene() function is the primary function
// for updating the sphere's scene data.
export const SetModelScene = async (canvas) => {
	// Establish a new scene
	const SCENE = new THREE.Scene();
	SCENE.add(new THREE.AmbientLight("#FFFFFF", 0.5));

	// Point Lighting
	const POINT_LIGHTING = new THREE.PointLight();
	POINT_LIGHTING.position.set(1, 0, 1);
	SCENE.add(POINT_LIGHTING);

	// Camera
	const CAMERA = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
	CAMERA.position.set(3, -0.5, 4);
	SCENE.add(CAMERA);

	// Establish Renderer and Controls Variables
	let Renderer, Controls;

	// The resize() function is used to resize the scene.
	// This is required for if the user resizes the site,
	// which is caught using the Window Resize Listener
	const resize = () => {
		// Set the screen size
		Renderer.setSize(window.innerWidth, 900);
		// Set the camera aspect ratio
		CAMERA.aspect = window.innerWidth / 900;
		// Update projection matrix
		CAMERA.updateProjectionMatrix();
	};
	// Window Resize Listener
	window.addEventListener('resize', resize);

	// Scene Renderer
	Renderer = new THREE.WebGLRenderer({
		powerPreference: "high-performance",
		antialias: false,
		canvas: canvas,
		alpha: true
	});
	// Renderer Modifications
	Renderer.setPixelRatio(window.devicePixelRatio, 1);

	// Orbital Controls
	Controls = new OrbitControls(CAMERA, Renderer.domElement);
	Controls.enableZoom = false;
	Controls.rotateSpeed = 0.035;

	// Animation function
	const animate = () => {
		Renderer.render(SCENE, CAMERA);
		Controls.update();
		requestAnimationFrame(animate);
	}

	// Size the scene
	resize();

	// Animate the sphere
	animate();

	// Return the scene for modification
	// in svelte components
	return SCENE;
};
