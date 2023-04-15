<script lang="ts">
    // Imports
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    // Hide the mouse button when the user scrolls
    let showMouse: boolean = true;
    onMount(async () => {
        document.addEventListener('scroll', function(this: any) {
            showMouse = false;
            document.removeEventListener('scroll', this);
        });
    });
</script>

<a href="/#projects" class="hidden fixed xl:block bottom-14 opacity-60" 
    on:click={() => showMouse = false} 
    in:fade={{ delay: 8000, duration: 1000 }} 
    out:fade={{ delay: 500, duration: 100 }}
>
    <div class="{showMouse ? 'opacity-1' : 'opacity-0'} duration-700 ease-in-out">
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