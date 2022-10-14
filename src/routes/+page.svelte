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

<!-- The 3D Wave Sphere -->
<!-- <canvas bind:this={wavySphere} style="top: 0px; right: 0px; z-index: -1; position: fixed;"/> -->

<!-- Top left "TS" Header -->
<div class="group top-6 left-6 fixed">
	<a class="font-black text-4xl text-white tracking-wider" href="/">TS</a>
	<div class="bg-[#1014FF] h-1 mt-2 rounded-full w-0 group-hover:w-full duration-[1000ms] ease-in-out"></div>
</div>
<div class="top-24 left-6 fixed">
	
	<div class="group my-10">
		<a class="font-black text-sm text-white tracking-wider" href="#projects">PROJECTS</a>
		<div class="bg-[#1014FF] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-[1000ms] ease-in-out"></div>
	</div>

	<div class="group my-10">
		<a class="font-black text-sm text-white tracking-wider" href="#about">ABOUT ME</a>
		<div class="bg-[#1014FF] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-[1000ms] ease-in-out"></div>
	</div>

	<div class="group my-10">
		<a class="font-black text-sm text-white tracking-wider" href="/projects">MORE PROJECTS</a>
		<div class="bg-[#1014FF] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-[1000ms] ease-in-out"></div>
	</div>
</div>

<!-- Openings-->
<div> {#if SiteMounted}
	<!-- Main Header Content -->
	<div class="ml-32 mt-36 xl:ml-64 xl:mt-44 mb-10">

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
	<div class="flex justify-center items-center">
		<MouseScroll scrollIndex={scrollIndex}/>
	</div>

	<!-- Seperator -->
	<div class="h-[300px]"></div>

	<!-- Main Projects -->
	<div id="projects"></div>
	<div class="ml-40 mt-[10rem]">
		<MainProjects/>
	</div>

	<!-- About Me -->
	<div id="about"></div>
	<div class="ml-40 mt-[10rem]">
		<AboutMe/>
	</div>

<!-- Closings -->
{/if} </div>

<style>
	/* Scroll Bar */
	:root::-webkit-scrollbar { width: 0.25rem; }
	:root::-webkit-scrollbar-track { background: transparent; }
	:root::-webkit-scrollbar-thumb { background: #696969; }
	:root::-webkit-scrollbar-thumb:hover { background: #1014FF; }
</style>