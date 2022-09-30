<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref, type Ref } from "vue";
import type Stop from "@/models/stop";
import { store } from "@/models/store";
import UserLocation from "../components/UserLocation.vue";
import FavoritesCards from "../components/FavoritesCards.vue";
import DestinationInput from "../components/DestinationInput.vue";

var aIsFocus:boolean;
var bIsFocus:boolean;
const favorites:boolean = true;

function select(stop: Stop | undefined, destination: 'startA' | 'startB') {
  store[destination] = stop;
  console.log("SELECTED");
}

</script>

<template>
  <div class="min-h-screen">
    <Header />
    <UserLocation></UserLocation>
    <div class="m-8">
      <div class="bg-[#A4FBD6] rounded-t-md pt-4 flex items-center">

        <DestinationInput class="mx-2" @stopSelect="(stop: Stop | undefined) => select(stop, 'startA')"></DestinationInput>
        
        <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px]">A</h1>
      </div>

      <div class="bg-[#4CF3F0] rounded-b-md pt-4 flex items-center">
        <h1 class="text-7xl font-bold text-white text-right italic -mb-[6px]">B</h1>
        <DestinationInput class="mx-2" @stopSelect="(stop: Stop | undefined) => select(stop, 'startB')"></DestinationInput>
        
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

      <div v-if="store.startA == store.startB && store.startA != undefined" class="mt-4 text-red-600 font-medium"><span class="material-symbols-rounded text-red-600 relative top-[6px] alig">warning</span> Deine beiden Stationen sind identisch</div>
  
      <div v-if="favorites" class="mt-16">

        <div class="flex justify-center">
          <h3 class="mb-4 font-semibold text-xl text-center"><span class="material-symbols-rounded text-[#4a4a4a] relative top-[6px] text-3xl">star</span> Favoriten </h3>  
         <RouterLink to="/favorites"><button class="relative top-2 ml-8 bg-[#3B5263] h-10 px-1 rounded-md"><span class="material-symbols-rounded text-white relative text-3xl">add</span></button></RouterLink>
        </div>        
        
      <div class="relative flex gap-4 snap-x snap-mandatory overflow-x-auto pb-4">
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
        <div class="snap-always snap-center shrink-0 first:pl-8 last:pr-8">
          <FavoritesCards></FavoritesCards> <!--NUmber of Favorite Cards will be the number of Favorites-->
        </div>
      </div>  
      
      </div>
    </div>
    <footer class="relative bottom-0 min-h-4 bg-[#A4FBD6] p-2 content-none w-full"></footer>
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
