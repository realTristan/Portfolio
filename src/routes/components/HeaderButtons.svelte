<script>
    import MouseScroll from './MouseButton.svelte';
    let isButtonClicked = false;
</script>

<!-- Mouse Scroll Element -->
<div class="flex justify-center items-center {isButtonClicked ? 'opacity-0' : 'opacity-1'}">
    <MouseScroll/>
</div>