<script>
    import projectsInView from "$lib/Projects.json"
    let headerInView = false;
    let observer;

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

        // Enable the headers and show all the projects
        headerInView = true;
        for (let i = 0; i < projectsInView.length; i++) {
            for (let n = 0; n < projectsInView[i].length; n++) {
                setTimeout(() => projectsInView[i][n].visible = true, (i+1)*400);
            }
        }
    }}
>
    <div class="group">
        <a class="text-white text-4xl font-black tracking-widest" rel="noopener noreferrer" target="_blank" href="https://github.com/realTristan?tab=repositories">PROJECTS</a>
        <div class="bg-[#38ffff] h-1 mt-2 rounded-full {headerInView?'w-24':'w-0'} duration-[2000ms] ease-in-out group-hover:w-52"></div>
    </div>
    <div class="mt-16">
        {#each projectsInView as s}
            <div class="lg:flex mt-12 mr-20 w-[32rem] lg:w-auto">
                {#each s as p}
                    <a href={p.href} rel="noopener noreferrer" target="_blank" class="{p.visible?'opacity-1 -translate-y-8':'opacity-0 -translate-y-0'} mb-48 mr-10 h-64 px-10 pt-6 rounded-[2.5rem] ease-in-out tracking-widest shadow-[#202020] translate-y-0 hover:-translate-y-10 duration-[400ms]">
                        <h2 class="text-white text-center text-xl font-black">{p.title}</h2>
                        <h2 class="text-gray-200 text-center text-md font-base mt-4">{p.description}</h2>
                        <div class="flex justify-center">
                            <img src={p.image} alt="" class="mt-8 rounded-lg w-80"/>
                        </div>
                    </a>
                {/each}
            </div>
        {/each}
    </div>
</div>