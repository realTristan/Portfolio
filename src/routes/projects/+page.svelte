<svelte:head>
	<title>Tristan Simpson - Projects</title>
</svelte:head>

<script>
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';
    import { setScene } from '$lib/wavySphere.js';

    // Create a new wavy sphere scene
    let wavySphere;
    let SiteMounted = false;

    // Github Repo Data
    let repos = [];
    onMount(async () => {
        SiteMounted = true;

        // Add the wavy sphere to the scene
        setScene(wavySphere);

        // Get 'realTristan' Github Data
        await self.fetch("https://api.github.com/users/realTristan/repos")
            .then(response => response.json())
            .then(json => repos = json)
            .catch(error => console.log(error));
    });
</script>

<div> {#if SiteMounted}
    <!-- Main Header Content -->
    <div class="ml-32 mt-36 xl:ml-64 xl:mt-44 mb-10 fixed">
        <div class="group">
            <!-- /realTristan Header -->
            <a class="font-black text-4xl text-white group-hover:text-gray-300 tracking-widest mt-8 ml-2 ease-linear duration-100" style="z-index: -1;"
                href="https://github.com/realTristan?tab=repositories" rel="noopener noreferrer" target="_blank"
                in:fade={{ delay: 500, duration: 1000 }}>
                <mark style="background: none;" class="text-[#38ffff]">/</mark>&nbsp;realTristan
            </a>
            <div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-8 duration-700 ease-in-out"></div>
        </div>

        <!-- Projects Header -->
        <div><h2 class="font-black text-7xl xl:text-9xl text-white tracking-widest mt-6" in:fade={{ delay: 1500, duration: 2000 }}>
            Projects
        </h2></div>
    </div>

    <!-- Top left "TS" Header -->
    <div class="group top-6 left-6 fixed">
        <a class="font-black text-4xl text-white tracking-widest" href="/">TS</a>
        <div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-full duration-1000 ease-in-out"></div>
    </div>

    <!-- Sidebar Items -->
    <div class="top-28 left-[0.9rem] fixed" in:fade={{ delay: 2500, duration: 2000 }}>
        <div class="group mb-28 -rotate-90">
            <a class="text-sm text-white tracking-widest" href="/">HOME</a>
            <div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-700 ease-in-out"></div>
        </div>

        <div class="group mb-10 -rotate-90">
            <a class="text-sm text-white tracking-widest" href="/#projects">PROJECTS</a>
            <div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-700 ease-in-out"></div>
        </div>

        <div class="group mt-[7.7rem] -rotate-90">
            <a class="text-sm text-white tracking-widest" href="/#about">ABOUT ME</a>
            <div class="bg-[#38ffff] h-1 mt-2 rounded-full w-0 group-hover:w-12 duration-700 ease-in-out"></div>
        </div>
    </div>

    <!-- Github Repositories -->
    <div class="flex justify-end items-end"><div>
        {#each repos as data, i}
            <div class="my-20 mr-24 translate-y-0 hover:-translate-y-8 duration-[400ms] ease-in-out w-[50rem]" in:fade={{ delay: 2200+(250*i), duration: 1000 }}>
                <a href={data.html_url} rel="noopener noreferrer" target="_blank" class="mb-48 mr-10 h-64 px-10 pt-6 rounded-[2.5rem] tracking-widest shadow-[#202020]">
                    <h2 class="text-white text-center text-xl font-black">{data.name}</h2>
                    <h2 class="text-gray-200 text-center text-md font-base mt-4">{data.description}</h2>
                </a>
                <div class="flex justify-center items-center">
                    {#each data.topics as topic}
                        <div class="">
                            <h2 class="text-[0.60rem] text-gray-50 tracking-widest mx-4 uppercase">{topic}</h2>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div></div>
{/if}</div>

<!-- The 3D Wave Sphere -->
<canvas bind:this={wavySphere} style="top: 0px; right: 0px; z-index: -1; position: fixed;"/>
