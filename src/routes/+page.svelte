<script>
	import { onMount } from 'svelte';
	import { setScene } from '$lib/scene.js';

    // Create a new wavy sphere scene
	var scene;
	onMount(() => {
		setScene(scene);
	});
</script>

<svelte:head>
	<title>Tristan Simpson</title>
	<meta name="description" content="Tristan Simpson's Portfolio" />
</svelte:head>

<body class="bg-[#202020]">
    <div class="bg-black h-screen w-screen absolute opacity-40"></div>
    
    <div class="flex absolute justify-center items-center ml-96 mt-96">
        <h2 class="text-center text-2xl text-white">Tristan Simpson</h2>
    </div>
    <canvas bind:this={scene} style="z-index: -1;"/>
</body>
