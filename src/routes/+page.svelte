<script>
	// Library Imports
	import { onMount } from 'svelte';
	import { setScene } from '$lib/wavySphere.js';
	import { fade } from 'svelte/transition';

	// Import Components
	import AboutMe from './components/AboutMe.svelte';
	import MainProjects from './components/Projects.svelte';
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

	// Mouse Button Click Indexing
	var scrollIndex = 0
</script>

<!-- Top left "TS" Header -->
<div class="top-6 left-6 fixed">
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
			<a href="#projects"
				on:click={() => {
					if (scrollIndex > 1) scrollIndex = 0;
					scrollIndex++;
				}}
				class="text-center items-center justify-center flex w-32 h-10 xl:w-36 xl:h-12 text-base backdrop-blur-sm border-white border-2 text-white rounded-lg font-black tracking-widest hover:bg-white hover:text-black duration-100 ease-linear">
				PROJECTS
			</a>
			<a href="#about"
				on:click={() => {
					if (scrollIndex > 1) scrollIndex = 0;
        			scrollIndex++;
				}}
				class="text-center items-center justify-center flex ml-6 w-32 h-10 xl:w-36 xl:h-12 text-base backdrop-blur-sm border-white border-2 text-white rounded-lg font-black tracking-widest hover:bg-white hover:text-black duration-100 ease-linear">
				ABOUT ME
			</a>
		</div>
	</div>

	<!-- Mouse Scroll Element -->
	<MouseScroll scrollIndex={scrollIndex}/>

	<!-- Main Projects -->
	<div class="top-[700px] md:top-[1000px] left-[500px] absolute" id="projects"></div>
	<div class="text-white absolute top-[800px] md:top-[1100px] left-[10%]">
		<MainProjects/>
	</div>

	<!-- About Me -->
	<div class="top-[2300px] left-[500px] absolute" id="about"></div>
	<div class="text-white absolute top-[2400px] left-[10%]">
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