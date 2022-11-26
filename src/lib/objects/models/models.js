import { THREE } from "$lib/Imports.js";

// Load the laptop model
export const LoadLaptopObject = async (Loader, Scene, Wallpaper) => Loader.load('./laptop.gltf', async (model) => {
	model.material = new THREE.MeshPhysicalMaterial({ roughness: 0, metalness: 1 });

	// Set the new model variable
	model = model.scene;
	model.traverse((obj) => {
		if (obj.name == "Laptop_screen_NakedSingularity_MI_laptop_01_screen_0") {
			obj.material.map = Wallpaper;
			obj.material.needsUpdate = true;
		};
	});
	// Update the model position and rotation
	model.position.set(0, -0.2, 0);
	model.rotation.set(0.1, 0, 0);
	Scene.add(model);

	// Resize the models with the screen size
	const resize = async () => {
		if (window.innerWidth > 1500) model.scale.set(3, 3, 3);
		else {
			const SIZE = window.innerWidth / 500;
			model.scale.set(SIZE, SIZE, SIZE);
		}
	}
	resize();

	// Watch for when the user resizes the window
	window.addEventListener("resize", async () => resize());
});
