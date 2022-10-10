<script>
	import { onMount } from 'svelte';
	import { newScene, resize } from '$lib/scene.js';

    // Create a new wavy sphere scene
	var _newScene;
	onMount(() => {
		newScene(_newScene);
        resize()
	});
</script>

<svelte:head>
	<title>Tristan Simpson</title>
	<meta name="description" content="Tristan Simpson's Portfolio" />
</svelte:head>

<body>
    <div>
        <canvas bind:this={_newScene}/>
    </div>
</body>
