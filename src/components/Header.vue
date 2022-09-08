
<template>
  <div class="relative drop-shadow-md">
    <div class="bg-[#4CF3F0] z-10 h-[5.25rem] w-1/2 absolute edgecut">
      <RouterLink to="/menu"><span class="material-symbols-rounded text-white text-4xl relative top-6 left-4">menu</span></RouterLink>
    </div>
    <div class="bg-[#A4FBD6] py-6">
      <h1 class="text-3xl text-[#4a4a4a] text-right pr-8"><span class="font-bold underline decoration-4">halfwa</span><span class="font-bold">y</span></h1>
    </div>
  </div>
</template>

<style>
  .edgecut:before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    border-top: 5.25rem solid #A4FBD6;
    border-left: 5.25rem solid #4CF3F0;
    width: 0;
}
</style>