<script>
	// Library Imports
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { 
		Textures, 
		SetWavySphereScene, 
		SetModelScene, 
		LoadLaptopObject, 
		GLTFLoader, 
		THREE, 
		DRACO_LOADER 
	} from "$lib/Imports.js";

	// Import Components
	import MouseButton from './components/MouseButton.svelte';
	import MainProjects from './components/Projects.svelte';
	import SubHeader from "./components/SubHeader.svelte";
	import AboutMe from './components/AboutMe.svelte';
	import Sidebar from "./components/Sidebar.svelte";

	// Particles imports
	import * as ParticleData from '$lib/static/particles.json';
	import Particles from "svelte-particles";
	import { loadFull } from "tsparticles";

    // Variables
	let WavySphere, LaptopObject, ShowSidebar;
	let SiteMounted,
		MountDesignerTitle,
		MountEngineerTitle,
		MountEnthusiastTitle = false;

	// Function to toggle the mounts
	const ToggleMounts = () => {
		document.getElementById("loading-header").classList.add("hidden", "fade-out");

		// Default Mounts
		SiteMounted = true;
		MountDesignerTitle = true;

		// 'Engineer' and 'Enthusiast' Title Mounts
		setTimeout(async () => { MountDesignerTitle = false; MountEngineerTitle = true; }, 5000);
		setTimeout(async () => { MountEngineerTitle = false; MountEnthusiastTitle = true; }, 6800);
	}

	// On Site Load
	onMount(async () => {
		// Load the wavy sphere
		await SetWavySphereScene(WavySphere);

		// Whether to show the sidebar or not
		ShowSidebar = window.innerHeight > 700;
		window.addEventListener("resize", () => ShowSidebar = window.innerHeight > 700);

		// Make sure user's not on mobile
		if (window.innerWidth < 1024) return ToggleMounts();

		// Load the 3D Object
		const Loader = new GLTFLoader(new THREE.LoadingManager(
			onload = () => ToggleMounts(),
			onprogress = (obj) => console.log(`Object Loaded: ${obj}`)
		));
		Loader.setDRACOLoader(DRACO_LOADER);

		let LaptopModelScene = await SetModelScene(LaptopObject);
		await LoadLaptopObject(Loader, LaptopModelScene, Textures.GithubWallpaper);
	});
</script>

<!--THREEJS Object Loading Header -->
<div id="loading-header" class="fade-in">
	<h2 class="flex justify-items-start mx-60 items-start mt-[40vh] text-white text-3xl font-black tracking-widest">LOADING<mark style="color: #38ffff; background: none;">&nbsp;3D OBJECTS</mark></h2>
	<h2 class="flex justify-items-start mx-60 items-start mt-6 text-white text-xl font-black tracking-widest">This may take awhile..</h2>
</div>

<!-- Background Gradient -->
<div class="h-screen w-screen" style="background: linear-gradient(0deg, rgba(5, 5, 5, 0.2) 15%, rgba(39, 39, 39, 0) 80%); position: fixed;"></div>
	
<!-- Top left "TS" Header -->
<div class="group top-14 left-12 fixed">
	<a class="font-bold text-4xl text-white tracking-widest font-serif" href="/">TS</a>
	<div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-full duration-1000 ease-in-out"></div>
</div>

<!-- When the site loads -->
{#if SiteMounted}
	<!-- Side Menu -->
	{#if ShowSidebar} <Sidebar style="z-index: 2;"/> {/if}

	<!-- Main Header Content -->
	<div class="mb-10 ml-[17vw] 2xl:ml-64 3xl:ml-72 mt-36 2xl:mt-48 3xl:mt-56 relative" style="z-index: 2;">

		<!-- Tristan Simpson Header -->
		<h2 class="font-black text-xl xl:text-2xl text-gray-300 tracking-[8px]" in:fade={{ delay: 300, duration: 1000 }}>
			TRISTAN SIMPSON
		</h2>

		<!-- Developer Header -->
		<h2 class="font-black text-6xl lg:text-[7vw] 2xl:text-9xl text-white tracking-widest mt-[1vw]" in:fade={{ delay: 1800, duration: 1000 }}>
			Developer
		</h2>

		<!-- "+" SubHeaders -->
		{#if MountDesignerTitle} <SubHeader title="Designer" infade={{ delay: 3350, duration: 1000 }} outfade={{ duration: 200 }}/> {/if}
		{#if MountEngineerTitle} <SubHeader title="Engineer" infade={{ delay: 220, duration: 1000 }} outfade={{ duration: 300 }}/> {/if}
		{#if MountEnthusiastTitle} <SubHeader title="Enthusiast." infade={{ delay: 320, duration: 1000 }} outfade={{}}/> {/if}
	</div>

	<!-- Projects and About Me Buttons -->
	<div class="flex justify-center items-center">
		<MouseButton/>
	</div>

	<!-- Seperator -->
	<div class="md:h-[200px] lg:h-[250px] xl:h-[300px]"></div>

	<!-- Main Projects -->
	<div id="projects"></div>
	<section class="ml-44 mt-40" style="z-index: 2; position: relative;">
		<MainProjects/>
	</section>

	<!-- About Me -->
	<div id="about"></div>
	<section class="ml-44 mt-40" style="z-index: 2; position: relative;">
		<AboutMe/>
	</section>
{/if}

<!-- The 3D Laptop -->
<canvas bind:this={ LaptopObject } class="absolute top-0 hidden lg:block lg:-mt-[10vw] xl:-mt-[5vh] 2xl:mt-[7vh] 3xl:mt-1 ml-[28vw] 2xl:ml-[30vw] 3xl:ml-[26vw]" style="z-index: 2;"/>

<!-- The 3D Wave Sphere -->
<canvas bind:this={ WavySphere } style="top: 0px; right: 0px; position: fixed; z-index: 1;"/>

<!-- Particles -->
<Particles options={ ParticleData } particlesInit={(e) => loadFull(e)} style="z-index: -2;"/>
