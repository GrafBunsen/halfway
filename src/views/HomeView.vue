<script setup lang="ts">
import Header from "../components/Header.vue";
import { onMounted,ref, type Ref } from "vue";
import type Stop from "@/models/stop";
import { store } from "@/models/store";
import UserLocation from "../components/UserLocation.vue";
import FavoritesCards from "../components/FavoritesCards.vue";
import DestinationInput from "../components/DestinationInput.vue";

const favorites:boolean = true;
var favoritesArr = ref<Stop[]>([])
var buttonSelectValue = ref<string>('')

onMounted(() => {
    let storedFavorites = localStorage.getItem("favorites");
    favoritesArr.value = storedFavorites ? JSON.parse(storedFavorites) : [];
    console.log(favoritesArr.value.length)
});

function select(stop: Stop | undefined, destination: 'startA' | 'startB') {
  store[destination] = stop;
  console.log("SELECTED");
}

function setStation(station:Stop, a:boolean){
  a ? select(station, 'startA') : select(station, 'startB')
}

</script>

<template>
  <div class="min-h-screen -mb-6">
    <Header />
    <UserLocation></UserLocation>
    <div class="m-8">
      <div class="bg-[#A4FBD6] rounded-t-md pt-4 flex items-center">

        <DestinationInput placeholder="Start A" :cardValue="store.startA" class="mx-2" @stopSelect="(stop: Stop | undefined) => select(stop, 'startA')"></DestinationInput>
        
        <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px]">A</h1>
      </div>

      <div class="bg-[#4CF3F0] rounded-b-md pt-4 flex items-center">
        <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px]">B</h1>
        <DestinationInput placeholder="Start B" :cardValue="store.startB" class="mx-2" @stopSelect="(stop: Stop | undefined) => select(stop, 'startB')"></DestinationInput>
        
      </div>

      <div class="mt-8" v-if="store.startA != undefined && store.startB != undefined && store.startA != store.startB">
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

      <div class="mt-8" v-else>
        <button class="bg-[#9ca9b1] rounded-md h-12 text-white w-full font-bold italic text-2xl">Finden
          <span>
            <span class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
            <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
          </span>
        </button>
      </div>

      <div v-if="store.startA === store.startB && store.startA != undefined" class="mt-4 text-red-600 font-medium"><span class="material-symbols-rounded text-red-600 relative top-[6px]">warning</span> Deine beiden Stationen sind identisch</div>
  
      <div v-if="favorites" class="mt-20">

        <div class="flex justify-center">
          <h3 class="mb-4 font-semibold text-xl text-center"><span class="material-symbols-rounded text-[#4a4a4a] relative top-[6px] text-3xl">star</span> Favoriten </h3>  
         <RouterLink to="/favorites"><button class="relative top-2 ml-8 border-2 border-[#3B5263] h-10 px-1 rounded-md"><span class="material-symbols-rounded text-[#3B5263] relative text-3xl">add</span></button></RouterLink>
        </div>        
        
      <div class="relative flex gap-4 snap-x snap-mandatory overflow-x-auto pb-4">
        <div v-for="favorite in favoritesArr" class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards @button-select="(a: boolean) => setStation(favorite, a)" :stationName="favorite.stop_name"></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
      </div> 
      <div v-if="favoritesArr.length == 0">
          <p class="text-center text-[#a3a3a3] font-medium">Du hast noch keine Favoriten</p>
        </div> 
      </div>
    </div>
  </div>
  <footer class="relative bottom-0 h-4 bg-[#A4FBD6] mt-2 content-none w-full"></footer>
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
