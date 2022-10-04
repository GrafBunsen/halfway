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
            <h2 class="text-2xl font-bold text-[#4a4a4a] mb-4">Speicherung von Daten</h2>
            <p class="mb-4 text-sm">Die App speihert keine personengebundenen Daten, und ertellt auch keinen Suchverlauf der Nutzer:innen. Um jedoch die favorisierten Stationen
                zu speichern, greift die App auf den local storage des Browsers zurück. Diese Daten können unter Favoriten "Alle löschen" entfernt werden. Achtung: Auch beim löschen von Browserdaten können diese Informationen verloren gehen.
            </p>
            <hr>
            <h2 class="text-2xl font-bold text-[#4a4a4a] mb-4">Credits</h2>
            <p>Conner Slipsager</p>
            <p>Daniel Omran</p>
            <p>Malte Eisermann</p>
            <p class="mb-4">Niklas Labitzke</p>
            <hr>
            <a href="https://github.com/GrafBunsen/halfway">
                <img class="mt-4 mx-auto" src="src\assets\github.svg" width="30px" alt="">
            </a>
        </div>

    
    </div>
  <footer class="relative bottom-0 h-4 bg-[#A4FBD6] mt-2 content-none w-full"></footer>
</template>
