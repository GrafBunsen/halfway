<script setup lang="ts">
import MenuHeader from "../components/MenuHeader.vue";
    </script>
<template>
<div>

    <div class="w-full shadow-2xl min-h-screen -mb-6">
        <MenuHeader />
        <nav class="mx-6">
            <RouterLink to="/"><h1 class="text-[#4a4a4a] font-bold text-2xl text-center my-8"><span class="material-symbols-rounded text-[#4a4a4a] relative top-1 text-3xl">home</span> Home</h1></RouterLink>
            <hr>
            <RouterLink to="/settings"><h1 class="text-[#4a4a4a] font-bold text-2xl text-center my-8"><span class="material-symbols-rounded text-[#4a4a4a] relative top-1 text-3xl">settings</span> Einstellungen</h1></RouterLink>
            <hr>
            <RouterLink to="/favorites"><h1 class="text-[#4a4a4a] font-bold text-2xl text-center my-8"><span class="material-symbols-rounded text-[#4a4a4a] relative top-1 text-4xl">star</span> Favoriten</h1></RouterLink>
            <hr>
            <RouterLink to="/info"><h1 class="text-[#4a4a4a] font-bold text-2xl text-center my-8"><span class="material-symbols-rounded text-[#4a4a4a] relative top-1 text-3xl">info</span> Informationen</h1></RouterLink>
        </nav>
    </div>
    <footer class="relative bottom-0 h-4 bg-[#A4FBD6] mt-2 content-none w-full"></footer>
</div>
</template>