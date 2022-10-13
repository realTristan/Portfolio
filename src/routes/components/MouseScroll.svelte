<script>
    import { fade } from 'svelte/transition';

	// Mouse Scroll Click Indexing
	const SCROLL_INDICES = [0, "#projects", "#about"];
    export var scrollIndex;
</script>

<a 
    on:click={() => {
        if (scrollIndex > 1) scrollIndex = 0;
        scrollIndex++;
    }}
    href={SCROLL_INDICES[scrollIndex]} class="fixed hidden xl:block bottom-14 ml-[50%] opacity-60" in:fade={{ delay: 9500, duration: 1000 }} out:fade={{ delay: 500, duration: 100 }}>
    <div id="mouseScrollParent" class="rounded-full h-12 w-8 border-white border-2 cursor-pointer hover:opacity-30 ease-in-out duration-300">
        <div id="mouseScrollChild" class="rounded-full bg-white h-2.5 w-1"></div>
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