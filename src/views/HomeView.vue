<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <div class="min-h-screen">
    <Header />
  <div class="m-8">
    <div class="bg-[#A4FBD6] rounded-t-md relative pt-4">
      <h1 class="text-7xl font-bold text-white text-right italic relative top-[6px]">A</h1>
      <div class="absolute z-10 bottom-4 left-4">
          <input type="text" class="border-2 border-white bg-white/50 h-10 w-56 rounded-md px-2 text-lg text-[#4a4a4]" placeholder="Start A" required>
      </div>
    </div>


    <div class="bg-[#4CF3F0] rounded-b-md pt-4">
      <h1 class="text-7xl font-bold text-white text-left italic relative top-[6px]">B</h1>
      <div class="absolute z-10 bottom-4 right-4">
          <input type="text" class="border-2 border-white bg-white/50 h-10 w-56 rounded-md px-2 text-lg text-[#4a4a4]" placeholder="Start B" required>
      </div>
    </div>

    <div class="mt-8">
      <button class="bg-[#3B5263] rounded-md h-12 text-white w-full font-bold italic text-2xl">Finden 
        <span>
          <span class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
          <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
        </span>
      </button>  
    </div>
  </div>
  
  <footer class="absolute bottom-0 min-h-4 bg-[#A4FBD6] p-2 content-none w-full"></footer>
  </div>
</template>

<style>
  input::placeholder{
    font-weight: bold;
    font-style: italic;
    color: #4a4a4a91;
    font-size: 1.3rem;
  }

  input:focus{
    outline: none;
  }


</style>
