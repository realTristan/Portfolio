<script>
    import { fade } from 'svelte/transition';
    export let title;
    export let infade;
    export let outfade;
</script>

<h2 class="font-black text-4xl xl:text-6xl italic text-white tracking-widest mt-10 font-sans" style="z-index: -1;" in:fade={infade} out:fade={outfade}>
    <mark style="background: none;" class="text-[#38ffff] mr-2">+</mark>{title}
</h2>