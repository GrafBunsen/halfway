<script setup lang="ts">
import type Stop from '@/models/stop';
import { store } from "@/models/store";

defineProps<{
  station: Stop
}>()

const emits = defineEmits(["button-select"]);

function buttonSelect(a:boolean){
    emits("button-select", a)
}


</script>
<template>
    <div class="mb-4 drop-shadow-lg bg-gradient-to-r from-primary-green/75 to-primary-blue/75 px-4 py-5 mt-4 w-60 rounded-md border-[1.2px] border-[#40ffac]">
        <p class="truncate font-semibold place-items-start text-xl">{{station.stop_name}}</p>
        <br>
        <button v-if="store.startA !== station" @click="buttonSelect(true)" class="bg-button-active text-white rounded-md px-2 py-1 font-medium mr-2 text-lg">Start A</button>
        <button v-else class="bg-button-disabled text-white rounded-md px-2 py-1 font-medium mr-2 text-lg">Start A</button>
        <button v-if="store.startB !== station" @click="buttonSelect(false)" class="bg-button-active text-white rounded-md px-2 py-1 font-medium ml-2 text-lg">Start B</button>
        <button v-else class="bg-button-disabled text-white rounded-md px-2 py-1 font-medium ml-2 text-lg">Start B</button>
    </div>
</template>