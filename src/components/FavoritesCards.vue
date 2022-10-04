<script setup lang="ts">


defineProps<{
  stationName: string
}>()

const emits = defineEmits(["button-select"]);

function buttonSelect(a:boolean){
    emits("button-select", a)
}

</script>
<template>
    <div class="drop-shadow-lg bg-gradient-to-r from-[#A4FBD6]/75 to-[#4CF3F0]/75 px-4 py-5 mt-4 w-60 rounded-md border-[1.2px] border-[#40ffac]">
        <p class="truncate font-semibold place-items-start text-xl">{{stationName}}</p>
        <br>
        <button @click="buttonSelect(true)" class="bg-[#3B5263] text-white rounded-md px-2 py-1 font-medium mr-2 text-lg">Start A</button>
        <button @click="buttonSelect(false)" class="bg-[#3B5263] text-white rounded-md px-2 py-1 font-medium ml-2 text-lg">Start B</button>
    </div>
</template>