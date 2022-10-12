<script>
    // Store the summary words in a list
    var summaryWords = [ { visible: false, word: "Hi,", delay: 0 } ];
    const SUMMARY = `* i'm Tristan. I'm a full-stack developer with over two years of experience designing, developing, and implementing solutions using a vast range of technologies and programming languages. Although I am dominant in Python, Go, Rust and Svelte, I can confidently understand the majority of other Languages and Services.`.split(" ");

    // Control word fade in speed
    var n = 800;

    // Add The About Me Summary Word Animations
    for (let i = 1; i < SUMMARY.length; i++) {
        // If previous split was the end of a sentance
        if (SUMMARY[i-1].includes(".")) n += 1000;
        // If the previous split requires a pause
        if (SUMMARY[i-1].includes(",")) n += 600;

        // Append the word to the array
        summaryWords.push({
            visible: false,
            word: SUMMARY[i],
            delay: ((i+1)*200)+n
        })
    }

    // Page Observer Viewport Variables
    var headerInView = false;
    var observer;

    // Page Observer Viewport Function
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

<!-- ABOUT ME Header-->
<div use:viewport class="{headerInView?'opacity-1 -translate-y-8':'opacity-0 -translate-y-0'} duration-[2000ms] ease-in-out"
    on:exitViewport={() => {
        headerInView = false;
        for (let i = 0; i < summaryWords.length; i++) {
            summaryWords[i].visible = false;
        }
    }}
    on:enterViewport={() => {
        headerInView = true;
        for (let i = 0; i < summaryWords.length; i++) {
            setTimeout(() => summaryWords[i].visible = true, summaryWords[i].delay+1000);
        }
    }}>
    <!-- Contents -->
    <h1 class="text-white text-start text-4xl font-black tracking-widest">ABOUT ME</h1>
    <div class="bg-[#1014FF] h-1 w-24 mt-2 rounded-full"></div>
</div>

<!-- My Summary -->
<div class="flex mt-6 ml-4 mr-[1000px] flex-wrap">
    {#each summaryWords as s}
        <h2 class="{s.visible?'opacity-1 -translate-y-2':'opacity-0 -translate-y-0'} text-white text-center text-2xl duration-1000 ease-in-out tracking-widest">{s.word}&nbsp;</h2>
    {/each}
</div>
