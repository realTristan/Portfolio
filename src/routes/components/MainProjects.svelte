<script>
    var projectsInView = [
        {
            title: "Versa Anti Cheat",
            description: "A Gaming Anti-Cheat built for discord integration.",
            image: "",
            visible: false
        },
        {
            title: "Athena",
            description: "A Matchmaking Discord Bot",
            image: "",
            visible: false
        },
        {
            title: "class.io",
            description: "Advanced Classroom Built with Svelte, Rust and Tailwind CSS",
            image: "",
            visible: false
        }
    ];
    var headerInView = false;
    var observer;

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

<div use:viewport class="{headerInView?'opacity-1 -translate-y-8':'opacity-0 -translate-y-0'} duration-[3000ms] ease-in-out"
    on:exitViewport={() => {
        headerInView = false;
        for (let i = 0; i < projectsInView.length; i++) {
            projectsInView[i].visible = false;
        }
    }}
    on:enterViewport={() => {
        headerInView = true;
        for (let i = 0; i < projectsInView.length; i++) {
            setTimeout(() => projectsInView[i].visible = true, (i+1)*400);
        }
    }}>
    <!-- Contents -->
    <h1 class="text-white text-start text-4xl font-black tracking-widest">PROJECTS</h1>
    <div class="bg-[#1014FF] h-1 w-24 mt-2 rounded-full"></div>
</div>

<div class="flex">
    {#each projectsInView as p}
        <div class="{p.visible?'opacity-1 -translate-y-8':'opacity-0 -translate-y-0'} bg-white mt-20 mr-10 px-20 py-6 rounded-full duration-[3000ms] ease-in-out tracking-widest shadow-lg shadow-[#202020]">
            <h2 class="text-black text-center text-2xl font-black">{p.title}</h2>
            <h2 class="text-black text-center text-1xl font-black mt-4">{p.description}</h2>
        </div>
    {/each}
</div>
