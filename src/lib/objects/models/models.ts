import { THREE } from "$lib/imports";

// Textures Map
export const Textures = {
    GithubWallpaper: new THREE.TextureLoader().load("./textures/github_wallpaper.jpg")
}

// Load the laptop model
export const LoadLaptopObject = async (Loader, Scene, Wallpaper) => Loader.load('./laptop.glb', async (model) => {
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
	const resize = () => {
		if (window.innerWidth > 1536) {
			model.scale.set(2.75, 2.75, 2.75);
		} else if (window.innerWidth > 1280 && window.innerWidth < 1536) {
			model.scale.set(2.3, 2.3, 2.3);
		} else {
			model.scale.set(1.9, 1.9, 1.9);
		}
	}
	resize();

	// Watch for when the user resizes the window
	window.addEventListener("resize", async () => resize());
});
