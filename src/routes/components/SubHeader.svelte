<script>
    import { fade } from 'svelte/transition';
    export let title;
    export let infade;
    export let outfade;
</script>

<h2 class="font-black text-4xl lg:text-[4vw] 2xl:text-6xl italic text-white tracking-widest mt-6 lg:mt-[2vw] font-sans" in:fade={infade} out:fade={outfade}>
    <mark style="background: none;" class="text-[#38ffff] mr-2">+</mark>{title}
</h2>