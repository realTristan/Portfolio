<script>
	// Library Imports
	import { setScene } from '$lib/wavySphere.js';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	// Import Components
	import AboutMe from './components/AboutMe.svelte';
	import MainProjects from './components/Projects.svelte';
	import MouseScroll from './components/MouseScroll.svelte';

    // Create a new wavy sphere scene
	let wavySphere;

	// Mouse Button Click Indexing
	let scrollIndex = 0

	// Sidebar Toggle
	let showSidebar = true;

	// Site and Title Mounts
	let SiteMounted, MountDesignerTitle, MountEngineerTitle, MountEnthusiastTitle = false;

	// On Site Load
	onMount(async () => {
		// Default Mounts
		SiteMounted = true;
		MountDesignerTitle = true;

		// Add the wavy sphere to the scene
		await setScene(wavySphere);

		// 'Engineer' and 'Enthusiast' Title Mounts
		setTimeout(async () => { MountDesignerTitle = false; MountEngineerTitle = true; }, 5000);
		setTimeout(async () => { MountEngineerTitle = false; MountEnthusiastTitle = true; }, 6800)
	});
</script>

<!-- Top left "TS" Header -->
<div class="group top-6 left-6 fixed">
	<a class="font-black text-4xl text-white tracking-widest" href="/">TS</a>
	<div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-full duration-1000 ease-in-out"></div>
</div>

<!-- Openings-->
<div> {#if SiteMounted}

	<!-- Sidebar Items -->
	<div class="hidden lg:block top-28 -left-2 fixed" in:fade={{ delay: 9200, duration: 1000 }}>
		{#if showSidebar}
			<div class="group mb-28 -rotate-90">
				<a class="text-sm text-white tracking-widest" href="/#projects">PROJECTS</a>
				<div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-700 ease-in-out"></div>
			</div>

			<div class="group mb-10 -rotate-90">
				<a class="text-sm text-white tracking-widest" href="/#about">ABOUT ME</a>
				<div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-700 ease-in-out"></div>
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="group mt-[9.7rem] -rotate-90" on:click={() => showSidebar = false}>
				<a class="text-sm text-white tracking-widest" href="/projects">MORE PROJECTS</a>
				<div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-700 ease-in-out"></div>
			</div>
		{/if}
	</div>

	<!-- Main Header Content -->
	<div class="ml-32 mt-36 xl:ml-64 xl:mt-44 mb-10">

		<!-- Tristan Simpson Header -->
		<h2 class="font-bold text-2xl xl:text-2xl text-gray-400" style="letter-spacing: 8px;"
			in:fade={{ delay: 300, duration: 1000 }}>
			TRISTAN SIMPSON
		</h2>

		<!-- Developer Header -->
		<div>
			<h2 class="font-black text-7xl xl:text-9xl text-white tracking-widest mt-6" 
				in:fade={{ delay: 1800, duration: 1000 }}>
				Developer
			</h2>
		</div>

		<!-- "+Designer" Header -->
		{#if MountDesignerTitle}
			<h2 class="font-black text-4xl xl:text-6xl text-white tracking-widest mt-4" style="z-index: -1;"
				in:fade={{ delay: 3350, duration: 1000 }} out:fade={{ duration: 200 }}>
				<mark style="background: none;" class="text-[#38ffff]">+</mark>Designer
			</h2>
		{/if}
		
		<!-- "+Engineer" Header -->
		{#if MountEngineerTitle}
			<h2 class="font-black text-4xl xl:text-6xl text-white tracking-widest mt-4" style="z-index: -1;"
				in:fade={{ delay: 200, duration: 1000 }} out:fade={{ duration: 300 }}>
				<mark style="background: none;" class="text-[#38ffff]">+</mark>Engineer
			</h2>
		{/if}

		<!-- "+Enthusiast." Header -->
		{#if MountEnthusiastTitle}
			<h2 class="font-black text-4xl xl:text-6xl text-white tracking-widest mt-4" style="z-index: -1;"
				in:fade={{ delay: 300, duration: 1000 }}>
				<mark style="background: none;" class="text-[#38ffff]">+</mark>Enthusiast.
			</h2>
		{/if}

		<!-- Projects and About Me Buttons (Last to Appear) -->
		<div class="hidden lg:flex mt-6 xl:mt-8 ml-6"	in:fade={{ delay: 9200, duration: 1000 }}>
			<a href="#projects"
				on:click={() => { if (scrollIndex > 1) scrollIndex = 0; scrollIndex++; }}
				class="text-center items-center justify-center flex w-32 h-10 xl:w-36 xl:h-12 text-base backdrop-blur-sm border-white border-2 text-white rounded-lg font-black tracking-widest hover:bg-white hover:text-black duration-100 ease-linear">
				PROJECTS
			</a>
			<a href="#about"
				on:click={() => { if (scrollIndex > 1) scrollIndex = 0; scrollIndex++; }}
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
	<div class="md:h-[200px] lg:h-[250px] xl:h-[300px]"></div>

	<!-- Main Projects -->
	<div id="projects"></div>
	<div class="ml-40 mt-[10rem]">
		<MainProjects/>
	</div>

	<!-- About Me -->
	<div id="about"></div>
	<div class="ml-40 mt-[10rem] mb-10">
		<AboutMe/>
	</div>

<!-- Closings -->
{/if} </div>

<!-- The 3D Wave Sphere -->
<canvas bind:this={wavySphere} style="top: 0px; right: 0px; z-index: -1; position: fixed;"/>
