<script setup lang="ts">

import type Stop from '@/models/stop';
import { getStops } from '@/models/utils';
import { ref, type Ref } from 'vue';

const stops = ref<Stop[]>([]);
const suggestion = ref<Stop[]>([]);
const userInput = ref("");
let isFocus = ref(false);

const emits = defineEmits(["stop-select"]);
const darkModeProp = defineProps({darkMode: {default: false, type: Boolean}});

getStops().then(stopResult => stops.value = stopResult);

function getSuggestion(startPoint: string) {
  suggestion.value = []
  if (startPoint.length > 2) {
    for (var i = 0; i < stops.value.length; i++) {
      var includes = stops.value[i].stop_name.toLowerCase().includes(startPoint.toLowerCase())
      if (includes) {
        suggestion.value.push(stops.value[i])
      }
    }
  }
}

function input() {
  getSuggestion(userInput.value);
  let foundStop;
  for(let stop of stops.value) {
    if(stop.stop_name.toLowerCase() === userInput.value.toLowerCase()) {
      foundStop = stop;
    }
  } 
  select(foundStop);
}


function select(stop: Stop | undefined) {
    if(stop) {
        userInput.value = stop.stop_name;
        (document.activeElement as any).blur();
    }
    emits("stop-select", stop);
}

function unfocus() {
    setTimeout(() => isFocus.value = false, 1);
}


</script>
<template>
    <div @focusin="isFocus = true" @focusout="unfocus()" class="relative h-fit w-full" :class="{'dark': darkModeProp.darkMode}">
          <input @input="input()" v-model="userInput" type="text"
            class="border-2 border-white bg-white/50 h-10 w-full rounded-md px-2 text-lg font-semibold text-[#4a4a4]"
            placeholder="Start A" required>
            <div v-if="userInput.length > 2 && isFocus" class="text-lg absolute mt-2 rounded p-4 min-w-full w-20 min-h-20 max-h-96 bg-black/60 backdrop-blur  z-10 overflow-y-scroll">
                <a class="cursor-pointer w-full" @click="select(stop)" v-for="stop in suggestion">{{stop.stop_name}}  <hr></a>
            </div>

        </div>
</template>

<style>

    .dark {
        border: none;
        background-color: rgba(0, 0, 0, 0.214);
        border-radius: 0.375rem;
    }

</style>