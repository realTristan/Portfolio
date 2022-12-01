<script>
    import { fade } from 'svelte/transition';
	let showSidebar = true;
</script>

<!-- Sidebar Items -->
<div class="hidden md:block ml-1 top-36 fixed" style="z-index: 2;" in:fade={{ delay: 300, duration: 2000 }}>
    {#if showSidebar}
        <div class="group mb-32 -rotate-90">
            <a class="text-sm font-bold text-gray-200 tracking-[0.2rem]" href="/#projects">PROJECTS</a>
            <div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-700 ease-in-out"></div>
        </div>

        <div class="group mb-[11.5rem] -rotate-90">
            <a class="text-sm font-bold text-gray-200 tracking-[0.2rem]" href="/#about">ABOUT ME</a>
            <div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-700 ease-in-out"></div>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="group -rotate-90 mb-80" on:click={() => showSidebar = false}>
            <a class="text-sm font-bold text-gray-200 tracking-[0.2rem]" href="/projects">MORE PROJECTS</a>
            <div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-700 ease-in-out"></div>
        </div>
    {/if}
</div>