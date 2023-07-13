<script lang="ts">
  // Import the info.json file
  import info from "../../info.json";

  // Control word fade speed
  let fadeInterval: number = 400;

  // Store the summaries in a list
  let summary1: any[] = summaryToMap(info.summaries[0].split(" "), [
    { visible: false, word: "Hi,", delay: 0 },
  ]);
  let summary2: any[] = summaryToMap(info.summaries[1].split(" "), []);

  // Update the fade interval
  function updateFadeInterval(word: string): void {
    if (word.includes(".")) fadeInterval += 1000;
    if (word.includes(",")) fadeInterval += 500;
  }

  // Function to set the append the words in the summary along
  // with their corresponding visibility status and appearance delay
  function summaryToMap(summary: string[], words: any[]): any[] {
    // Add The About Me Summary Word Animations
    for (let i = 1; i < summary.length; i++) {
      // Update the fade interval
      updateFadeInterval(summary[i - 1]);

      // Append the word to the array
      words.push({
        visible: false,
        word: summary[i],
        delay: (i + 1) * 200 + fadeInterval,
      });
    }

    // Return the new array
    return words;
  }

  // Page Observer Viewport Variables
  let headerInView: boolean = false;
  let observer: any;

  // Page Observer Viewport Function
  function viewport(e: any): any {
    if (observer) return;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.dispatchEvent(
          new CustomEvent(
            entry.isIntersecting ? "enterViewport" : "exitViewport"
          )
        );
      });
    });
    observer.observe(e);
    return {
      destroy() {
        observer.unobserve(e);
      },
    };
  }
</script>

<!-- ABOUT ME Header-->
<div
  use:viewport
  class="{headerInView
    ? 'opacity-1 -translate-y-8'
    : 'opacity-0 -translate-y-0'} duration-[2000ms] ease-in-out"
  on:enterViewport={() => {
    if (headerInView) return;

    // Show all of the words
    headerInView = true;
    for (let i = 0; i < summary1.length; i++) {
      setTimeout(() => (summary1[i].visible = true), summary1[i].delay + 1000);
    }
    for (let i = 0; i < summary2.length; i++) {
      setTimeout(() => (summary2[i].visible = true), summary2[i].delay + 11200);
    }
  }}
>
  <!-- Contents -->
  <a
    class="text-white text-start text-4xl font-black tracking-widest"
    href="#about">ABOUT ME</a
  >
  <div
    class="bg-[#38ffff] h-1 mt-2 rounded-full {headerInView
      ? 'w-24'
      : 'w-0'} duration-[2000ms] ease-in-out"
  />
</div>

<!-- First Paragraph -->
<div class="flex flex-wrap mt-6 mb-12 ml-4 w-[30rem] lg:w-[40rem]">
  {#each summary1 as s}
    <h2
      class="{s.visible
        ? 'opacity-1 -translate-y-2'
        : 'opacity-0 -translate-y-0'} mb-4 mr-1 text-gray-300 text-center text-md md:text-2xl duration-1000 ease-in-out tracking-widest"
    >
      {s.word}&nbsp;
    </h2>
  {/each}
</div>

<!-- Second Paragraph -->
<div class="flex mt-6 ml-4 w-[40rem] flex-wrap">
  {#each summary2 as s}
    <h2
      class="{s.visible
        ? 'opacity-1 -translate-y-2'
        : 'opacity-0 -translate-y-0'} mb-4 mr-1 text-gray-300 text-center text-md md:text-2xl duration-1000 ease-in-out tracking-widest"
    >
      {s.word}&nbsp;
    </h2>
  {/each}
</div>
