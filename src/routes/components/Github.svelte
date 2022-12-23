<script>
    let headerInView = false;
    let observer;
    export let LaptopObject;

    function viewport(e) {
        if (observer) return;
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.dispatchEvent(new CustomEvent(
                    entry.isIntersecting ? 'enterViewport' : 'exitViewport'
                ));
            });
        });
        observer.observe(e);
        return {destroy() { observer.unobserve(e) }}
    }
</script>

<!-- Contents -->
<div use:viewport class="{headerInView?'opacity-1 -translate-y-8':'opacity-0 -translate-y-0'} duration-[3000ms] ease-in-out mt-20"
    on:enterViewport={() => {
        if (headerInView) return;
        headerInView = true;
    }}
>
    <a class="text-white text-4xl font-black tracking-widest">GITHUB</a>
    <div class="bg-[#38ffff] h-1 mt-2 rounded-full {headerInView?'w-24':'w-0'} duration-[2000ms] ease-in-out"></div>
    <div class="mt-16">
        <div class="lg:flex mt-12 mr-20 w-[32rem] lg:w-auto">
            <h2 class="text-white text-center text-xl font-black">Coming Soon</h2>
            <canvas bind:this={ LaptopObject } class="" style="z-index: 2;"/>
        </div>
    </div>
</div>
