<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
import type Stop from "@/models/stop";

var lat: any, long;
const startA = ref('')
const startB = ref('')
const stops = ref<Stop[]>([]);
const suggestion = ref<string[]>([]);
var aIsFocus:boolean;
var bIsFocus:boolean;

navigator.geolocation.getCurrentPosition(function (position) {   //We dont use this unless we want to locate the User to find the next station faster
  lat = position.coords.latitude;
  long = position.coords.longitude;

  lat.toFixed(2);
  long.toFixed(2);
  console.log(lat, long);
});


fetch("http://localhost:3000/stops").then(async result => stops.value = (await result.json()))

function getSuggestion(startPoint: string) {
  suggestion.value = []
  if (startPoint.length > 2) {
    for (var i = 0; i < stops.value.length; i++) {
      var includes = stops.value[i].stop_name.toLowerCase().includes(startPoint.toLowerCase())
      if (includes) {
        suggestion.value.push(stops.value[i].stop_name)
      }
    }
  }
}

function closeSuggestion(){

}

</script>

<template>
  <div class="min-h-screen">
    <Header />
    <div class="m-8">
      <div class="bg-[#A4FBD6] rounded-t-md pt-4 flex items-center">

        <div class="relative h-fit w-full ml-2">
          <input @focus="aIsFocus = true" @blur="aIsFocus = false" @input="getSuggestion(startA)" v-model="startA" type="text"
            class="border-2 border-white bg-white/50 h-10 w-full rounded-md px-2 text-lg font-semibold text-[#4a4a4]"
            placeholder="Start A" required>

            <div v-if="startA.length > 2 && aIsFocus" class="text-lg absolute mt-2 rounded p-4 min-w-full w-20 min-h-20 max-h-96 bg-black/75  z-10 overflow-y-scroll">
                <a @click="startA = stop" v-for="stop in suggestion">{{stop}}  <hr></a>
            </div>

        </div>
        <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px]">A</h1>
      </div>

      <div class="bg-[#4CF3F0] rounded-b-md pt-4 flex items-center">
        <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px]">B</h1>
        <div class="h-fit w-full mx-2 relative">
          <input @focus="bIsFocus = true" @blur="bIsFocus = false" @input="getSuggestion(startB)" v-model="startB" type="text"
            class="border-2 border-white bg-white/50 h-10 rounded-md min-w-full px-2 text-lg font-semibold text-[#4a4a4]"
            placeholder="Start B" required>

            <div v-if="startB.length > 2 && bIsFocus" class="text-lg absolute mt-2 rounded p-4 min-w-full w-20 min-h-20 max-h-80 bg-black/75  z-10 overflow-y-scroll">
                <a @click="startB = stop" v-for="stop in suggestion">{{stop}}  <hr></a>
            </div>
        </div>

      </div>

      <div class="mt-8" v-if="startA != '' && startB != '' && startA != startB">
        <RouterLink to="/result">
          <button class="bg-[#3B5263] rounded-md h-12 text-white w-full font-bold italic text-2xl">Finden
            <span>
              <span
                class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
              <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
            </span>
          </button>
        </RouterLink>
      </div>


      <div class="mt-8" v-if="startA == '' || startB == '' || startA == startB">
        <button class="bg-[#9ca9b1] rounded-md h-12 text-white w-full font-bold italic text-2xl">Finden
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
input::placeholder {
  font-weight: bold;
  font-style: italic;
  color: #4a4a4a91;
  font-size: 1.3rem;
}

input:focus {
  outline: none;
}
</style>
