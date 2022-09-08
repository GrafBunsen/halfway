<script setup lang="ts">
    import Header from "../components/Header.vue";
    </script>
<template>


    <div class="w-5/6 shadow-lg min-h-screen">
        <Header />
        <div class="mx-6">
            <RouterLink to="/"><h1 class="text-[#4a4a4a] font-bold text-2xl text-center my-8"><span class="material-symbols-rounded text-[#4a4a4a] relative top-1 text-3xl">home</span> Home</h1></RouterLink>
            <hr>
            <h1 @click="$router.back()" class="text-[#4a4a4a] font-bold text-2xl text-center my-8"><span class="material-symbols-rounded text-[#4a4a4a] relative top-1 text-3xl">settings</span> Einstellungen</h1>
            <hr>
            <h1 class="text-[#4a4a4a] font-bold text-2xl text-center my-8"><span class="material-symbols-rounded text-[#4a4a4a] relative top-1 text-4xl">star</span> Favoriten</h1>
            <hr>
            <h1 class="text-[#4a4a4a] font-bold text-2xl text-center my-8"><span class="material-symbols-rounded text-[#4a4a4a] relative top-1 text-3xl">info</span> Informationen</h1>
        </div>
    </div>

</template>