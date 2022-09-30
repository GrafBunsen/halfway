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
        response.value = await x.json();
    }
);

</script>
<template>
    <div class="min-h-screen">
        <Header />
        <div v-if="!result">
            <LoadingResult></LoadingResult>
        </div>
        <div v-else>
            {{ response }}
            {{ response.middleStop.label }}
        </div>
        
  <footer class="absolute bottom-0 min-h-4 bg-[#A4FBD6] p-2 content-none w-full"></footer>
  
    </div>
</template>