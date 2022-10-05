<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
import { store } from "@/models/store";
import LoadingResult from "../components/LoadingResult.vue";


const result = ref(false)
const startOfA = store.startA;
const startOfB = store.startB;

const response = ref();


fetch(`http://localhost:3001/calculate/${startOfA?.stop_id}/${startOfB?.stop_id}`).then(
    async x => {
        result.value = true;
        response.value = (await x.json()).middleStop.data.label;
        //console.log(response.value.middleStop.data.label)
    }
);

</script>
<template>
    <div class="min-h-screen -mb-6">
        <Header />
        <div v-if="!result">
            <LoadingResult></LoadingResult>
        </div>
        <div v-else class="mx-8">
            <div class="bg-[#A4FBD6] p-4 mt-8 rounded-md">
                <span class="material-symbols-rounded text-white relative top-1 text-4xl rotate-90">double_arrow</span>            
            </div>

            <h3 class="my-4 text-xl">Treffen in <span class="font-bold">{{response}}</span></h3>

            <div class="bg-[#4CF3F0] p-4 mb-8 rounded-md">
               <span class="material-symbols-rounded text-white relative top-1 text-4xl -rotate-90">double_arrow</span>            
            </div>
            <div class="text-center">
               <RouterLink to="/"><button class="mx-auto border-2 border-[#00A760] bg-[#A4FBD6] p-2 rounded-md font-semibold text-[#4a4a4a]">Neue Suche</button></RouterLink>
            </div>
        </div>
        
  <footer class="absolute bottom-0 min-h-4 bg-[#A4FBD6] p-2 content-none w-full"></footer>
  
    </div>
</template>