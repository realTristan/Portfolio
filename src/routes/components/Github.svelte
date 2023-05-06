<script lang="ts">
  let headerInView: boolean = false;
  let observer: any;

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

<!-- Contents -->
<div
  use:viewport
  class="{headerInView ? 'opacity-1 -translate-y-8': 'opacity-0 -translate-y-0'} duration-[3000ms] ease-in-out mt-20"
  on:enterViewport={() => {
    if (!headerInView) {
      headerInView = true;
    }
  }}
>
  <a href="https://github.com/realTristan" class="text-white text-4xl font-black tracking-widest">GITHUB</a>
  <div class="bg-[#38ffff] h-1 mt-2 rounded-full {headerInView ? 'w-24': 'w-0'} duration-[2000ms] ease-in-out"/>
  <div class="flex mt-6 mb-12 ml-4 flex-wrap w-[23rem] xl:w-[30rem] 2xl:w-[40rem]">
    <h2 class="text-gray-300 mb-10 mr-1 text-left text-xl leading-relaxed xl:text-2xl tracking-widest xl:leading-loose">
      My <a href="https://github.com/realTristan" class="text-blue-600 hover:underline duration-200">Github</a> is home to over 30 projects, each built with various
      languages, stacks, and services. I'm most proficient in developing
      applications with Python, Go, Rust, and Typescript.
    </h2>
    <h2 class="text-gray-300 mb-4 mr-1 text-left text-xl leading-relaxed xl:text-2xl tracking-widest xl:leading-loose">
      I look forward to expanding my portfolio even further.
    </h2>
  </div>
</div>
