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

	// Directional Light
	const DIRECT_LIGHTING = new THREE.DirectionalLight("#ffffee", 1);
	DIRECT_LIGHTING.position.set(0, 0, -1);
	SCENE.add(DIRECT_LIGHTING);

	// Camera
	const CAMERA = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
	CAMERA.position.set(3, -0.5, 4);
	SCENE.add(CAMERA);

	// Establish Renderer and Controls Variables
	let Renderer, Controls;

	// The resize() function is used to resize the scene.
	// This is required for if the user resizes the site,
	// which is caught using the Window Resize Listener
	const resize = async () => {
		// Set the pixel ratio
		Renderer.setPixelRatio(window.devicePixelRatio);
		// Set the screen size
		Renderer.setSize(window.innerWidth, window.innerHeight);
		// Set the camera aspect ratio (most likely 16:9)
		CAMERA.aspect = window.innerWidth / window.innerHeight;
		// Update projection matrix
		CAMERA.updateProjectionMatrix();
	};
	// Window Resize Listener
	window.addEventListener('resize', resize);

	// Scene Renderer
	Renderer = new THREE.WebGLRenderer({
		powerPreference: "high-performance",
		antialias: true,
		canvas: canvas,
		alpha: true
	});
	// Renderer Modifications
	Renderer.setPixelRatio(window.devicePixelRatio, 1);
	Renderer.setSize(window.innerWidth, window.innerHeight);
	Renderer.setClearColor(0x000000, 0);

	// Orbital Controls
	Controls = new OrbitControls(CAMERA, Renderer.domElement);
	Controls.enableZoom = false;
	Controls.rotateSpeed = 0.035;

	// Animation function
	const animate = async () => {
		Renderer.render(SCENE, CAMERA);
		Controls.update();
		requestAnimationFrame(animate);
	}

	// Size the scene
	await resize();

	// Animate the sphere
	await animate();

	// Return the scene for modification
	// in svelte components
	return SCENE;
};
