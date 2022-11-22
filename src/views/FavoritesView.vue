<script setup lang="ts">
import PagesHeader from "../components/PagesHeader.vue";
import DestinationInput from "@/components/DestinationInput.vue";
import {onMounted, ref} from "vue";
import type Stop from "@/models/stop";

var favorite = ref<Stop | undefined>();
var favoritesArr = ref<Stop[]>([]);

onMounted(() => {
    let storedFavorites = localStorage.getItem("favorites");
    favoritesArr.value = storedFavorites ? JSON.parse(storedFavorites) : [];
  });

function setLocalStorageFavorite() {
  if (favorite.value !== undefined) {
    let storedFavorites = localStorage.getItem("favorites");
    if(checkIfLegal(favorite.value.stop_name)){
      favoritesArr.value = storedFavorites ? JSON.parse(storedFavorites) : [];
      favoritesArr.value.push(favorite.value);
      localStorage.setItem('favorites', JSON.stringify(favoritesArr.value));
    }
  }

}

function checkIfLegal(fav:any): boolean{
  for(let i=0; i<favoritesArr.value.length; i++){
      if(fav === favoritesArr.value[i].stop_name){
        return false;
      }else{
        continue;
      }
    }
    return true;
}

function removeFavorite(index:number){
  favoritesArr.value.splice(index, 1)
  localStorage.setItem('favorites', JSON.stringify(favoritesArr.value));
}

function removeAllFavorites(){
  favoritesArr.value.splice(0)
  localStorage.setItem('favorites', JSON.stringify(favoritesArr.value));
}

</script>
<template>
  <div class="min-h-screen -mb-6 dark:bg-bg-dark">
    <PagesHeader title="Favoriten" />
    <div class="mx-8 mt-8">
      <DestinationInput placeholder="Station eingeben" :dark-text="true"
                        @stopSelect="(stop: Stop | undefined) => favorite = stop"></DestinationInput>

      <div v-if="favorite !== undefined" class="mt-10">
        <button @click="setLocalStorageFavorite"
          class="bg-[#3B5263] dark:drop-shadow-md dark:border-2 dark:border-white rounded-md h-12 text-white w-full font-bold italic text-2xl">Hinzufügen
          <span>
            <span class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
            <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
          </span>
        </button>
      </div>

      <div v-else class="mt-10">
        <button class="bg-[#9ca9b1] rounded-md h-12 text-white w-full font-bold italic text-2xl">Hinzufügen
          <span>
            <span class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
            <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
          </span>
        </button>
      </div>
      <br>
      <p class="text-center font-thin dark:text-white">Du hast {{favoritesArr.length}} Favoriten</p>
      <hr>
      <div v-for="(favorite, index) in favoritesArr" class="my-2">
        <div class="flex">
          <span class="flex-auto font-semibold text-lg w-10/12 truncate dark:text-white">{{favorite.stop_name}}</span>
          <span @click="removeFavorite(index)" class="flex-auto w-2/12 text-center material-symbols-rounded dark:bg-red-600/20 text-red-600 border-2 rounded-md border-red-600 float-right ml-1">delete</span>
        </div>
      </div>
      <hr v-if="favoritesArr.length > 0">

      <button v-if="favoritesArr.length > 0" @click="removeAllFavorites()" class="dark:drop-shadow-md border-2 border-red-600 bg-red-200/50 text-red-600 font-medium p-1 rounded-md mt-8">Alle löschen</button>
    </div>

  </div>
  <footer class="relative bottom-0 h-4 bg-primary-green p-2 mt-2 content-none w-full"></footer>

</template>
