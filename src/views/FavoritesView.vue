<script setup lang="ts">
    import PagesHeader from "../components/PagesHeader.vue";
    import DestinationInput from "@/components/DestinationInput.vue";
    import { ref } from "vue";
    import type Stop from "@/models/stop";

    var favorite = ref<Stop | undefined>();
    var favoritesArr = ref<Stop[]>([])

    function setLocalStorageFavorite() {
      if(favorite.value !== undefined) {
        let storedFavorites = localStorage.getItem("favorites");
        favoritesArr.value = storedFavorites ? JSON.parse(storedFavorites) : [];
        favoritesArr.value.push(favorite.value);
        localStorage.setItem('favorites', JSON.stringify(favoritesArr.value));
        console.log(localStorage.getItem('favorites'));
      }
      
    }//das design kann man mega gut mit props dann beeinflussen

</script>
<template>
    <div class="min-h-screen">
        <PagesHeader title="Favoriten"/>
        <div class="mx-8 mt-8">
          <DestinationInput :dark-mode="true" @stopSelect="(stop: Stop | undefined) => favorite = stop"></DestinationInput>

            <div v-if="favorite !== undefined" class="mt-10">
          <button @click="setLocalStorageFavorite" class="bg-[#3B5263] rounded-md h-12 text-white w-full font-bold italic text-2xl">Hinzufügen
            <span>
              <span
                class="material-symbols-rounded text-white relative top-1 left-4 text-right">arrow_forward_ios</span>
              <span class="material-symbols-rounded text-white relative top-1 text-right">arrow_forward_ios</span>
            </span>
          </button>
      </div>

      <div v-else class="mt-12">
        <button class="bg-[#9ca9b1] rounded-md h-12 text-white w-full font-bold italic text-2xl">Hinzufügen
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