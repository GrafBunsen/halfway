<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
    <div class="relative drop-shadow-md">
      <div class="bg-[#4CF3F0] z-10 h-[7.25rem] w-5/12 absolute edgecut-high">
        <span @click="$router.back()" class="material-symbols-rounded text-white text-4xl relative top-10 left-4">arrow_back</span>
      </div>
      <div class="bg-[#A4FBD6] py-10">
        <h1 class="text-3xl text-[#4a4a4a] text-right pr-4"><span class="font-bold">{{title}}</span></h1>
      </div>
    </div>
    <br>
  </template>
  
  <style>
    .edgecut-high:before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      border-top: 7.25rem solid #A4FBD6;
      border-left: 7.25rem solid #4CF3F0;
      width: 0;
  }
  </style>