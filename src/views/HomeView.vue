<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
import type Stop from "@/models/stop";
import { store } from "@/models/store";
import UserLocation from "../components/UserLocation.vue";
import FavoritesCards from "../components/FavoritesCards.vue";

const stops = ref<Stop[]>([]);
const suggestion = ref<string[]>([]);
var aIsFocus:boolean;
var bIsFocus:boolean;
const favorites:boolean = true;


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

</script>

<template>
  <div class="min-h-screen">
    <Header />
    <UserLocation></UserLocation>
    <div class="m-8">
      <div class="bg-[#A4FBD6] rounded-t-md pt-4 flex items-center">

        <div class="relative h-fit w-full ml-2">
          <input @focus="aIsFocus = true" @blur="aIsFocus = false" @input="getSuggestion(store.startA)" v-model="store.startA" type="text"
            class="border-2 border-white bg-white/50 h-10 w-full rounded-md px-2 text-lg font-semibold text-[#4a4a4]"
            placeholder="Start A" required>

            <div v-if="store.startA.length > 2 && aIsFocus" class="text-lg absolute mt-2 rounded p-4 min-w-full w-20 min-h-20 max-h-96 bg-black/60 backdrop-blur  z-10 overflow-y-scroll">
                <a class="cursor-pointer w-full" @click="store.startA = stop" v-for="stop in suggestion">{{stop}}  <hr></a>
            </div>

        </div>
        <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px]">A</h1>
      </div>

      <div class="bg-[#4CF3F0] rounded-b-md pt-4 flex items-center">
        <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px]">B</h1>
        <div class="h-fit w-full mx-2 relative">
          <input @focus="bIsFocus = true" @blur="bIsFocus = false" @input="getSuggestion(store.startB)" v-model="store.startB" type="text"
            class="border-2 border-white bg-white/50 h-10 rounded-md min-w-full px-2 text-lg font-semibold text-[#4a4a4]"
            placeholder="Start B" required>

            <div v-if="store.startB.length > 2 && bIsFocus" class="pb-4 text-lg absolute mt-2 rounded p-4 min-w-full w-20 min-h-20 max-h-80 bg-black/60 backdrop-blur z-10 overflow-y-scroll">
                <a class="cursor-pointer" @click="store.startB = stop" v-for="stop in suggestion">{{stop}} <hr></a>
            </div>
        </div>

      </div>

      <div class="mt-8" v-if="store.startA != '' && store.startB != '' && store.startA != store.startB">
        <router-link to="/result">
          <button class="bg-[#3B5263] rounded-md h-12 text-white w-full font-bold italic text-2xl">Finden
            <span>
              <span
                class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
              <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
            </span>
          </button>
        </router-link>
      </div>

      <div class="mt-8" v-if="store.startA == '' || store.startB == '' || store.startA == store.startB">
        <button class="bg-[#9ca9b1] rounded-md h-12 text-white w-full font-bold italic text-2xl">Finden
          <span>
            <span class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
            <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
          </span>
        </button>
      </div>

      <div v-if="store.startA == store.startB && store.startA != '' && store.startB != ''" class="mt-4 text-red-600 font-medium"><span class="material-symbols-rounded text-red-600 relative top-[6px] alig">warning</span> Deine beiden Stationen sind identisch</div>
  
      <div v-if="favorites" class="mt-28">
        <h3 class="font-semibold text-xl text-center"><span class="material-symbols-rounded text-[#4a4a4a] relative top-[6px] text-3xl">star</span> Favoriten</h3>
        <FavoritesCards></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
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
