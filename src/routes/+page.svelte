<script>
	// Library Imports
	import { LoadLaptopObject, Textures, SetWavySphereScene, SetModelScene } from "$lib/Imports.js";
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

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
	let WavySphere, LaptopObject;
	let SiteMounted,
		MountDesignerTitle,
		MountEngineerTitle,
		MountEnthusiastTitle = false;

	// On Site Load
	onMount(async () => {
		let Scene1 = await SetModelScene(LaptopObject);
		await LoadLaptopObject(Scene1, Textures.GithubWallpaper);

		await SetWavySphereScene(WavySphere);

		// Default Mounts
		SiteMounted = true;
		MountDesignerTitle = true;

		// 'Engineer' and 'Enthusiast' Title Mounts
		setTimeout(async () => { MountDesignerTitle = false; MountEngineerTitle = true; }, 5000);
		setTimeout(async () => { MountEngineerTitle = false; MountEnthusiastTitle = true; }, 6800);
	});
</script>

<!-- Particles -->
<Particles options={ ParticleData } particlesInit={(e) => loadFull(e)} style="z-index: -2;"/>

<!-- The 3D Laptop -->
<canvas bind:this={LaptopObject} class="absolute top-0 hidden lg:block lg:-mt-16 xl:-mt-2 2xl:mt-10 3xl:mt-1 ml-[28vw] 2xl:ml-[30vw] 3xl:ml-[26vw]" style="z-index: 1;"/>

<!-- The 3D Wave Sphere -->
<canvas bind:this={WavySphere} style="top: 0px; right: 0px; position: fixed; z-index: 0;"/>

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
	<Sidebar/>

	<!-- Main Header Content -->
	<div class="mb-10 ml-32 mt-36 lg:ml-44 2xl:ml-64 2xl:mt-48 3xl:mt-56 3xl:ml-72 relative">

		<!-- Tristan Simpson Header -->
		<h2 class="font-black text-xl xl:text-2xl text-gray-300" style="letter-spacing: 8px;" in:fade={{ delay: 300, duration: 1000 }}>
			TRISTAN SIMPSON
		</h2>

		<!-- Developer Header -->
		<h2 class="font-black text-7xl xl:text-8xl 2xl:text-9xl text-white tracking-widest mt-10" in:fade={{ delay: 1800, duration: 1000 }}>
			Developer
		</h2>
		

		<!-- "+" SubHeaders -->
		{#if MountDesignerTitle} <SubHeader title="Designer" infade={{ delay: 3350, duration: 1000 }} outfade={{ duration: 200 }}/> {/if}
		{#if MountEngineerTitle} <SubHeader title="Engineer" infade={{ delay: 200, duration: 1000 }} outfade={{ duration: 300 }}/> {/if}
		{#if MountEnthusiastTitle} <SubHeader title="Enthusiast." infade={{ delay: 300, duration: 1000 }} outfade={{}}/> {/if}
	</div>

	<!-- Projects and About Me Buttons -->
	<div class="flex justify-center items-center">
		<MouseButton/>
	</div>

	<!-- Seperator -->
	<div class="md:h-[200px] lg:h-[250px] xl:h-[300px]"></div>

	<!-- Main Projects -->
	<div id="projects"></div>
	<div class="ml-44 mt-[10rem]">
		<MainProjects/>
	</div>

	<!-- About Me -->
	<div id="about"></div>
	<div class="ml-44 mt-[10rem]">
		<AboutMe/>
	</div>
{/if}