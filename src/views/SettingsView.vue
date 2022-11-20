<script setup lang="ts">
import PagesHeader from "../components/PagesHeader.vue";
import { ref, type Ref } from "vue";


var toggled = ref(true);
const emits = defineEmits(["themeValue"]);

function themeValue(){
    emits('themeValue', toggled);
}

</script>
<template>
<div class="min-h-screen -mb-6 dark:bg-bg-dark">
        <PagesHeader title="Einstellungen"/>
    <div class="mx-8">
        <div class="block mt-10">
            <div class="mb-2">
                <span class="dark:text-slate-200 text-primary-text text-lg">Dark Mode Ein-/Ausschalten</span>
            </div>
            <button v-on:click="toggled = false; themeValue()" class="bg-slate-700 text-white px-2 text-xl rounded-l-md" :class="{'bg-red-400': !toggled}">
                <span class="material-symbols-rounded text-white text-2xl">light_mode</span>
            </button>
            <button v-on:click="toggled = true; themeValue()" class="bg-slate-700 text-white px-2 text-xl rounded-r-md" :class="{'bg-emerald-400': toggled}">
                <span class="material-symbols-rounded text-white text-2xl">dark_mode</span>
            </button>         
            
        </div>
    </div>
</div>
<footer class="relative bottom-0 h-4 bg-primary-green mt-2 content-none w-full"></footer>
</template>
<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>