
<template>
  <div class="relative drop-shadow-md">
    <div class="bg-primary-blue z-10 h-[5.25rem] w-1/2 absolute edgecut">
      <span @click="$router.back()" class="material-symbols-rounded text-white text-4xl relative top-6 left-4">arrow_back</span>
    </div>
    <div class="bg-primary-green py-6">
      <h1 class="text-3xl text-[#4a4a4a] text-right pr-12"><span class="font-bold">Menu</span></h1>
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