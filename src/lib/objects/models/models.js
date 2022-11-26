import { GLTFLoader, THREE, DRACO_LOADER } from "$lib/Imports.js";

// Load the 3D Object
const GLTF_LOADER = new GLTFLoader(new THREE.LoadingManager(
	onload = () => console.log("Loaded All Objects!"),
	onprogress = (obj) => console.log(`Object Loaded: ${obj}`)
));
GLTF_LOADER.setDRACOLoader(DRACO_LOADER);

// Load the laptop model
export const LoadLaptopObject = async (Scene, Wallpaper) => GLTF_LOADER.load('./laptop.gltf', async (model) => {
	model.material = new THREE.MeshPhysicalMaterial({ roughness: 0, metalness: 1 });

	// Set the new model variable
	model = model.scene;
	model.traverse((obj) => {
		if (obj.name == "Laptop_screen_NakedSingularity_MI_laptop_01_screen_0") {
			obj.material.map = Wallpaper;
			obj.material.needsUpdate = true;
		};
	});
	model.scale.set(3, 3, 3);
	model.position.set(0, -0.2, 0);
	model.rotation.set(0.1, 0, 0);
	Scene.add(model);

	window.addEventListener("resize", () => {
		if (window.innerWidth > 1500) {
			return SIZE = 3;
		}
		else {
			const SIZE = window.innerWidth / 500;
			model.scale.set(SIZE, SIZE, SIZE)
		}
	})
});
