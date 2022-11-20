<script setup lang="ts">
import PagesHeader from "../components/PagesHeader.vue";
</script>
<template>
    <div class="dark:bg-bg-dark">
        <div class="min-h-screen -mb-6">
        <PagesHeader title="Informationen"/>
    
        <div class="text-center mx-16 mb-8">
            <h2 class="text-2xl font-bold text-primary-text dark:text-slate-200 mb-4">Version</h2>
            <p class="mb-4 font-bold">v. 1.0.0</p>
            <hr>
            <br>
            <h2 class="text-2xl font-bold text-primary-text dark:text-slate-200 mb-4">Über</h2>
            <p class="mb-4 text-sm dark:text-white">Finde die Mitte - Gib in die Eingabefelder die Startpunkte von zwei Personen ein, die App findet dann die passende Station, zu welcher beide etwa gleich lang brauchen, um diese zu erreichen.</p>
            <p class="mb-4 text-sm dark:text-white">Die App basiert auf statischen soll-Daten (GTFS-Daten). Deshalb ist es zur Zeit leider nicht möglich eine Reiseauskunft mit ist-Daten zu geben.</p>
            <h4 class="text-lg font-bold text-primary-text dark:text-slate-200">Berliiiin!!</h4>
            <p class="text-sm mb-4 dark:text-white">Für alle die enttäuscht sind dass sie ihre Station nicht finden... Die App funktioniert <i>(zur Zeit)</i> nur mit Öffi-Stationen in und um Berlin.</p>
            <hr>
            <h2 class="text-2xl font-bold text-primary-text dark:text-slate-200 mb-4">Speicherung von Daten</h2>
            <p class="mb-4 text-sm dark:text-white">Die App speichert keine personengebundenen Daten, und ertellt auch keinen Suchverlauf der Nutzer:innen. Um jedoch die favorisierten Stationen
                zu speichern, greift die App auf den local storage des Browsers zurück. Diese Daten können unter Favoriten "Alle löschen" entfernt werden. Achtung: Auch beim löschen von Browserdaten können diese Informationen verloren gehen.
            </p>
            <hr>
            <h2 class="text-2xl font-bold text-primary-text dark:text-slate-200 mb-4">Credits</h2>
            <div class="dark:text-white">
                <p>Conner Slipsager</p>
                <p>Daniel Omran</p>
                <p>Malte Eisermann</p>
                <p class="mb-4">Niklas Labitzke</p>
            </div>
            <hr>
            <a href="https://github.com/GrafBunsen/halfway">
                <img class="mt-4 mx-auto" src="src\assets\github.svg" width="30px" alt="">
            </a>
        </div>

    
    </div>
    <footer class="relative bottom-0 h-4 bg-primary-green mt-2 content-none w-full"></footer>

    </div>
    
</template>
