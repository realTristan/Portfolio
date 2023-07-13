import * as THREE from "three";
import noise from "simplenoise";

// Establish a new scene
const SCENE: THREE.Scene = new THREE.Scene();

// Establish a new Sphere then add it to the scene
const SPHERE: THREE.Mesh = new THREE.Mesh(
  new THREE.SphereGeometry(1, 75, 75),
  new THREE.MeshDepthMaterial()
);
SCENE.add(SPHERE);
SPHERE.position.set(1.3, 0.4);
SPHERE.rotation.set(2, 1, 2);

// Establish a new perspective camera and set it's position
const CAMERA: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
CAMERA.position.z = 1.5;

// Establish an empty renderer for later use
let Renderer: THREE.WebGLRenderer;

// The animate() function is used to manipulate the sphere,
// adding noise to it's vertices which in return gives it
// that wavy kind of look.
const animate = async () => {
  requestAnimationFrame(animate);

  // The Wave Speed
  const SPEED: number = performance.now() * 0.001;

  // Iterate over the spheres vertices
  let vertices: THREE.Vector3[] = SPHERE.geometry.vertices;
  for (let i = 500; i < vertices.length; i++) {
    let v: THREE.Vector3 = vertices[i];
    v.normalize().multiplyScalar(
      1 + 0.3 * noise.perlin3(v.x * 3 + SPEED, v.y * 3, v.z * 3)
    );
  }

  // Update the vertices and render the new sphere
  SPHERE.geometry.verticesNeedUpdate = true;
  Renderer.render(SCENE, CAMERA);
};

// The resize() function is used to resize the scene.
// This is required for if the user resizes the site,
// which is caught using the Window Resize Listener
export const resize = async () => {
  // Set the screen size
  Renderer.setSize(window.innerWidth, window.innerHeight);
  // Update projection matrix
  CAMERA.updateProjectionMatrix();
};

// Window Resize Listener
window.addEventListener("resize", resize);

// The SetWavySphereScene() function is the primary function
// for updating the sphere's scene data.
export const SetWavySphereScene = async (canvas: any) => {
  // Render the new scene
  Renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    powerPreference: "high-performance",
    antialias: false,
  });
  Renderer.setPixelRatio(window.devicePixelRatio);

  // Size the scene
  await resize();

  // Animate the sphere
  await animate();
};
