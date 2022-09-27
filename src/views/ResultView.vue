<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";

const result = ref(false)

</script>
<template>
    <div class="min-h-screen">
        <Header />

        <div v-if="!result">
            <div class="my-auto text-center relative top-48">
                <h2 class="text-3xl font-bold text-[#A3A3A3]">Mitte wird gesucht...</h2>
                <h3 class="text-lg font-bold text-[#A3A3A3] mb-4">kleinen Moment noch</h3>
                <img src="src\assets\search.svg" class="w-60 mx-auto" alt="searchImage">
                <RouterLink to="/"><button class="text-black border-[1.2px] border-black px-4 py-1 rounded-md mt-4 font-semibold text-lg">Abbrechen</button></RouterLink>
            </div>
        </div>
        
  <footer class="absolute bottom-0 min-h-4 bg-[#A4FBD6] p-2 content-none w-full"></footer>
  
    </div>
</template>