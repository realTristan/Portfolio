<script>
	// Library Imports
	import { onMount } from 'svelte';
	import { setScene } from '$lib/wavySphere.js';
	import { fade } from 'svelte/transition';

	// Import Components
	import AboutMe from './components/AboutMe.svelte';
	import MainProjects from './components/MainProjects.svelte';
	import MouseScroll from './components/MouseScroll.svelte';

    // Create a new wavy sphere scene
	var wavySphere;

	// Site and Title Mounts
	let SiteMounted, MountDesignerTitle, MountEngineerTitle, MountEnthusiastTitle = false;

	// On Site Load
	onMount(() => {
		setScene(wavySphere);
		// Default Mounts
		SiteMounted =  true;
		MountDesignerTitle = true;

		// 'Engineer' and 'Enthusiast' Title Mounts
		setTimeout(() => { MountDesignerTitle = false; MountEngineerTitle = true; }, 5000);
		setTimeout(() => { MountEngineerTitle = false; MountEnthusiastTitle = true; }, 6800)
	});
</script>

<!-- Top left "TS" Header -->
<div class="absolute ml-6 mt-6">
	<h2 class="font-black text-4xl text-white tracking-wider">TS</h2>
</div>

<!-- Openings-->
<div> {#if SiteMounted}
	<!-- Main Header Content -->
	<div class="absolute ml-32 mt-36 xl:ml-64 xl:mt-44 mb-10">

		<!-- Tristan Simpson Header -->
		<h2 class="font-bold text-2xl xl:text-2xl text-gray-400" style="letter-spacing: 8px;"
			transition:fade={{ delay: 300, duration: 1000 }}>
			TRISTAN SIMPSON
		</h2>

		<!-- Developer Header -->
		<div>
			<h2 class="font-black text-7xl xl:text-9xl text-white tracking-widest mt-6" 
				transition:fade={{ delay: 1800, duration: 1000 }}>
				Developer
			</h2>
		</div>

		<!-- "+Designer" Header -->
		{#if MountDesignerTitle}
			<h2 class="font-black text-4xl xl:text-6xl text-white tracking-widest mt-4" style="z-index: -1;"
				in:fade={{ delay: 3350, duration: 1000 }} out:fade={{ duration: 200 }}>
				<mark style="background: none;" class="text-gray-400">+</mark>Designer
			</h2>
		{/if}
		
		<!-- "+Engineer" Header -->
		{#if MountEngineerTitle}
			<h2 class="font-black text-4xl xl:text-6xl text-white tracking-widest mt-4" style="z-index: -1;"
				in:fade={{ delay: 200, duration: 1000 }} out:fade={{ duration: 500 }}>
				<mark style="background: none;" class="text-gray-400">+</mark>Engineer
			</h2>
		{/if}

		<!-- "+Enthusiast." Header -->
		{#if MountEnthusiastTitle}
			<h2 class="font-black text-4xl xl:text-6xl text-white tracking-widest mt-4" style="z-index: -1;"
				transition:fade={{ delay: 500, duration: 1000 }}>
				<mark style="background: none;" class="text-gray-400">+</mark>Enthusiast.
			</h2>
		{/if}

		<!-- Projects and About me Buttons (Last to Appear)-->
		<div class="flex mt-6 xl:mt-8 ml-6"	transition:fade={{ delay: 9200, duration: 1000 }}>
			<a href="#main-projects"
				class="text-center items-center justify-center flex w-32 h-10 xl:w-36 xl:h-12 text-base backdrop-blur-sm border-white border-2 text-white rounded-lg font-black tracking-widest hover:bg-white hover:text-black duration-100 ease-linear">
				PROJECTS
			</a>
			<a href="#about-me"
				class="text-center items-center justify-center flex ml-6 w-32 h-10 xl:w-36 xl:h-12 text-base backdrop-blur-sm border-white border-2 text-white rounded-lg font-black tracking-widest hover:bg-white hover:text-black duration-100 ease-linear">
				ABOUT ME
			</a>
		</div>
	</div>

	<!-- Mouse Scroll Element -->
	<MouseScroll/>

	<!-- Main Projects -->
	<div class="mt-[700px] md:mt-[1000px] ml-[500px] absolute" id="main-projects"></div>
	<div class="text-white absolute mt-[800px] md:mt-[1100px] ml-[30%]">
		<MainProjects/>
	</div>

	<!-- About Me -->
	<div class="mt-[2500px] ml-[500px] absolute" id="about-me"></div>
	<div class="text-white absolute mt-[2600px] ml-[30%]">
		<AboutMe/>
	</div>

<!-- Closings -->
{/if} </div>

<!-- The 3D Wave Sphere -->
<canvas bind:this={wavySphere} style="z-index: -1;"/>

<style>
	/* Scroll Bar */
	:root::-webkit-scrollbar { width: 0.25rem; }
	:root::-webkit-scrollbar-track { background: transparent; }
	:root::-webkit-scrollbar-thumb { background: #696969; }
	:root::-webkit-scrollbar-thumb:hover { background: #1014FF; }
</style>