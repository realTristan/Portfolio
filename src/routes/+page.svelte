<script>
	import { onMount } from 'svelte';
	import { setScene } from '$lib/scene.js';

	let title = "Developer";

    // Create a new wavy sphere scene
	var scene;
	onMount(async () => {
		setScene(scene);
		
		setInterval(async function() {
			let i = 0;
			const TITLES = ["Developer", "Engineer", "Designer", "Enthusiast"]
			
				i++;
				title = TITLES[i];
				if (i = TITLES.length) i = 0
			
		}, 4000);
	});
</script>

<svelte:head>
	<title>Tristan Simpson</title>
	<meta name="description" content="Tristan Simpson's Portfolio" />
</svelte:head>

<body class="bg-[#202020]">
    <div class="bg-black h-screen w-screen absolute opacity-0"></div>
	
	<div class="absolute ml-6 mt-6">
		<h2 class="font-black text-4xl text-black tracking-wider italic opacity-60">TS</h2>
	</div>

    <div class="absolute ml-56 mt-64">
        <h2 class="font-black text-4xl text-white tracking-widest">Tristan Simpson</h2>
		<h2 class="font-black text-2xl text-white tracking-widest">+ {title}</h2>
		<div class="flex mt-4 ml-6">
			<button class="w-32 h-10 text-base backdrop-blur-sm border-white border-2 text-white rounded-lg font-black tracking-wider hover:bg-white hover:text-black duration-100 ease-linear">
				PROJECTS
			</button>
			<button 
				class="ml-6 w-32 h-10 text-base backdrop-blur-sm border-white border-2 text-white rounded-lg font-black tracking-wider hover:bg-white hover:text-black duration-100 ease-linear">
				ABOUT ME
			</button>
		</div>
	</div>

    <canvas bind:this={scene} style="z-index: -1;"/>
</body>
