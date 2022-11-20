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
<div class="dark:bg-bg-dark">
  <div class="min-h-screen -mb-6">
    <Header />
    <UserLocation></UserLocation>
    <div class="m-8">
      <div class="dark: drop-shadow-md">
                  <div class="bg-primary-green rounded-t-md pt-4 flex items-center">

          <DestinationInput placeholder="Start A" :cardValue="store.startA" class="mx-2" @stopSelect="(stop: Stop | undefined) => select(stop, 'startA')"></DestinationInput>

          <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px]">A</h1>
          </div>

          <div class="bg-primary-blue rounded-b-md pt-4 flex items-center">
          <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px] ml-[3px]">B</h1>
          <DestinationInput placeholder="Start B" :cardValue="store.startB" class="mx-2" @stopSelect="(stop: Stop | undefined) => select(stop, 'startB')"></DestinationInput>

          </div>
      </div>
      

      <div class="mt-8" v-if="store.startA != undefined && store.startB != undefined && store.startA != store.startB">
        <router-link to="/result">
          <button class="dark:border-2 dark:broder-white dark:drop-shadow-md bg-button-active rounded-md h-12 text-white w-full font-bold italic text-2xl">Finden
            <span>
              <span
                class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
              <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
            </span>
          </button>
        </router-link>
      </div>

      <div class="mt-8" v-else>
        <button class="bg-button-disabled rounded-md h-12 text-white w-full font-bold italic text-2xl">Finden
          <span>
            <span class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
            <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
          </span>
        </button>
      </div>

      <div v-if="store.startA === store.startB && store.startA != undefined" class="mt-4 text-red-600 font-medium text-center bg-red-100 rounded-md"><span class="material-symbols-rounded text-red-600 relative top-[6px]">warning</span><br> Deine beiden Stationen sind identisch</div>
  
      <div v-if="favorites" class="mt-20">

        <div class="flex justify-center">
          <h3 class="mb-4 font-semibold text-xl text-center text-primary-text dark:text-white"><span class="material-symbols-rounded relative top-[6px] text-3xl">star</span> Favoriten </h3>  
         <RouterLink to="/favorites"><button class="relative top-2 ml-8 border-2 border-button-active dark:border-white h-10 px-1 rounded-md"><span class="material-symbols-rounded text-[#3B5263] dark:text-white relative text-3xl">add</span></button></RouterLink>
        </div>        
        
      <div class="relative flex gap-4 snap-x snap-mandatory overflow-x-auto pb-4">
        <div v-for="favorite in favoritesArr" class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards :station="favorite" @button-select="(a: boolean) => setStation(favorite, a)"></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
      </div> 
      <div v-if="favoritesArr.length == 0">
          <p class="text-center text-tertiary-text font-medium">Du hast noch keine Favoriten</p>
        </div> 
      </div>
    </div>
  </div>
  <footer class="relative bottom-0 h-4 bg-primary-green mt-2 content-none w-full"></footer>
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
