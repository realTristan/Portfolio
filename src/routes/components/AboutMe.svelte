<script>
    // Import each of the summaries
    import summary1 from "$lib/Summary1.txt?raw"
    import summary2 from "$lib/Summary2.txt?raw"

    // Control word fade speed
    let wordFadeInterval = 400;

    // Store the summary words in a list
    let summary1Words = setSummaryData(summary1.split(" "),[{visible:false,word:"Hi,",delay: 0}])
    let summary2Words = setSummaryData(summary2.split(" "), [])

    // Function to set the append the words in the summary along
    // with their corresponding visibility status and appearance delay
    function setSummaryData(SummaryConstant, summaryWordsArray) {
        // Add The About Me Summary Word Animations
        for (let i = 1; i < SummaryConstant.length; i++) {
            // If previous split was the end of a sentance
            if (SummaryConstant[i-1].includes(".")) wordFadeInterval += 1000;
            // If the previous split requires a pause
            if (SummaryConstant[i-1].includes(",")) wordFadeInterval += 500;

            // Append the word to the array
            summaryWordsArray.push({
                visible: false,
                word: SummaryConstant[i],
                delay: ((i+1)*200)+wordFadeInterval
            });
        }
        // Return the new array
        return summaryWordsArray;
    }

    // Page Observer Viewport Variables
    let headerInView = false;
    let observer;

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
        return {destroy() { observer.unobserve(e) }};
    }
</script>

<!-- ABOUT ME Header-->
<div use:viewport class="{headerInView?'opacity-1 -translate-y-8':'opacity-0 -translate-y-0'} duration-[2000ms] ease-in-out"
    on:enterViewport={() => {
        if (headerInView) return;

        // Show all of the words
        headerInView = true;
        for (let i = 0; i < summary1Words.length; i++) {
            setTimeout(() => summary1Words[i].visible = true, summary1Words[i].delay+1000);
        }
        for (let i = 0; i < summary2Words.length; i++) {
            setTimeout(() => summary2Words[i].visible = true, summary2Words[i].delay+11200);
        }
    }}>
    <!-- Contents -->
    <a class="text-white text-start text-4xl font-black tracking-widest" href="#about">ABOUT ME</a>
    <div class="bg-[#38ffff] h-1 mt-2 rounded-full {headerInView?'w-24':'w-0'} duration-[2000ms] ease-in-out"></div>
</div>

<!-- First Paragraph -->
<div class="flex mt-6 mb-12 ml-4 w-[30rem] flex-wrap lg:w-[40rem]">
    {#each summary1Words as s}
        <h2 class="{s.visible?'opacity-1 -translate-y-2':'opacity-0 -translate-y-0'} text-gray-300 mb-4 mr-1 text-center text-2xl duration-1000 ease-in-out tracking-widest">{s.word}&nbsp;</h2>
    {/each}
</div>

<!-- Second Paragraph -->
<div class="flex mt-6 ml-4 w-[40rem] flex-wrap">
    {#each summary2Words as s}
        <h2 class="{s.visible?'opacity-1 -translate-y-2':'opacity-0 -translate-y-0'} text-gray-300 mb-4 mr-1 text-center text-2xl duration-1000 ease-in-out tracking-widest">{s.word}&nbsp;</h2>
    {/each}
</div>
