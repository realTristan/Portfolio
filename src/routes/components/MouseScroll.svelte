<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

	// Mouse Scroll Click Indexing
	const SCROLL_INDICES = [0, "#projects", "#about"];
    export let scrollIndex;
    
    // Hide the mouse button when the user scrolls
    let showMouse = true;
    onMount(async () => {
        let timeout = null;
        // Scroll event listener
        document.addEventListener('scroll', (_) => {
            if (showMouse) showMouse = false;
            // After two seconds of not scrolling, show the mouse again
            clearTimeout(timeout);
            timeout = setTimeout(() => showMouse = true, 5000);
        });
    });
</script>

<a
    on:click={() => {
        if (scrollIndex > 1) scrollIndex = 0;
        scrollIndex++;
    }}
    href={SCROLL_INDICES[scrollIndex]} class="hidden fixed xl:block bottom-14 opacity-60" in:fade={{ delay: 9500, duration: 1000 }} out:fade={{ delay: 500, duration: 100 }}>
    <div class="{showMouse?'opacity-1':'opacity-0'} duration-700 ease-in-out">
        <div id="mouseScrollParent" class="rounded-full h-12 w-8 border-white border-2 cursor-pointer hover:opacity-30 ease-in-out duration-300">
            <div id="mouseScrollChild" class="rounded-full bg-white h-2.5 w-1"></div>
        </div>
    </div>
</a>

<style>
	@keyframes mouseScrollFade {
		0%   	{ opacity: 0; transform: translate(0.75rem, 0.7rem) }
		70%   	{ opacity: 1; }
		100%   	{ opacity: 0; transform: translate(0.75rem, 1.6rem) }
	}
	#mouseScrollChild {
		animation: mouseScrollFade ease-in-out 5s infinite;
		transform: translate(0.7rem, 1)
    }
</style>