<script setup lang="ts">
import PagesHeader from "../components/PagesHeader.vue";
</script>
<template>
    <div class="min-h-screen">
        <PagesHeader title="Informationen"/>
    
        <div class="text-center mx-16">
            <h2 class="text-2xl font-bold text-[#4a4a4a] mb-4">Version</h2>
            <p class="mb-4 font-bold">v. 1.0.0</p>
            <hr>
            <br>
            <h2 class="text-2xl font-bold text-[#4a4a4a] mb-4">Über</h2>
            <p class="mb-4 text-sm">Finde die Mitte - Gib in die Eingabefelder die Startpunkte von zwei Personen ein, die App findet dann die passende Station, zu welcher beide etwa gleich lang brauchen, um diese zu erreichen.</p>
            <p class="mb-4 text-sm">Die App basiert auf statischen soll-Daten (GTFS-Daten). Deshalb ist es zur Zeit leider nicht möglich eine Reiseauskunft mit ist-Daten zu geben.</p>
            <hr>
            <a href="https://github.com/GrafBunsen/halfway">
                <img class="mt-4 mx-auto" src="src\assets\github.svg" width="30px" alt="">
            </a>
        </div>

    
    <footer class="absolute bottom-0 min-h-4 bg-[#A4FBD6] p-2 content-none w-full"></footer>
    </div>
</template>
