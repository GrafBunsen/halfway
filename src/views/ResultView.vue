<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
import { store } from "@/models/store";
import LoadingResult from "../components/LoadingResult.vue";


const result = ref(false)
const startOfA = store.startA;
const startOfB = store.startB;

const routeOfB = ref();
const routeOfA = ref();

const response = ref();

function findNextLink(searchString: any, next: any, result: any, stops: any) {

    for(let l of result.links) {
        if(l.fromId === searchString && l.toId === next) {
            return {from: stops.get(searchString), to: stops.get(l.toId), name: l.data.name ? l.data.name : "transfer"}
        } else if(l.toId === searchString && l.fromId === next) {
            return {from: stops.get(searchString), to: stops.get(l.fromId), name: l.data.name ? l.data.name : "transfer"}
        }
    }
    return { name: "TRANSFER" };
}

fetch(`http://80.240.25.172:3001/calculate/${startOfA?.stop_id}/${startOfB?.stop_id}`).then(
    async fetchRes => {
        result.value = true;
        var fetchResJson = await fetchRes.json();
        response.value = fetchResJson.middleStop.data.label;
        console.log(fetchResJson)

        let stops = new Map();
        fetchResJson.path.forEach((stop: any) => (stops.set(stop.id, stop.data.label)));
        let routeA = [];
        for(let i = 0; i < fetchResJson.indexOfMiddleStop; i++) {
            routeA.push(findNextLink(fetchResJson.path[i].id, fetchResJson.path[i+1].id, fetchResJson, stops));
        }
        let routeB = [];
        for(let i = fetchResJson.indexOfMiddleStop; i < fetchResJson.path.length - 1; i++) {
            routeB.push(findNextLink(fetchResJson.path[i].id, fetchResJson.path[i+1].id, fetchResJson, stops));
        }

        routeOfB.value = routeB;
        routeOfA.value = routeA;
        console.log("routeA", routeA);
        console.log("routeB", routeB);
    }
);




</script>
<template>
    <div>
    <div class="min-h-screen -mb-6">
        <Header />
        <div v-if="!result">
            <LoadingResult></LoadingResult>
        </div>
        <div v-else class="mx-8">
            <div class="bg-[#A4FBD6] p-4 mt-8 rounded-md">
                <div class="flex">
                    <h1 class="text-7xl font-bold text-white text-left italic -ml-4 -mt-7">A</h1>
                    <span class="material-symbols-rounded text-white relative top-1 text-4xl rotate-90">double_arrow</span>            
                </div>
                <div class="ml-14">
                    {{routeOfA[0].from}} 
                    <div v-for="stop in routeOfA">{{stop.to}}</div>
                </div>
            </div>

            <h3 class="my-4 text-xl text-center">Treffen in <span class="font-bold">{{response}}</span></h3>

            <div class="bg-[#4CF3F0] p-4 mb-8 rounded-md"> 
                <div class="flex justify-between">
                    <span class="material-symbols-rounded text-white relative top-1 text-4xl -rotate-90">double_arrow</span>
                    <h1 class="text-7xl font-bold text-white text-right italic -mt-7 -mr-5">B</h1>     
                </div> 
                <div class="ml-4">
                    {{routeOfB[0].from}} 
                    <div v-for="stop in routeOfB">{{stop.to}}</div>
                </div>    
            </div>
            <div class="text-center">
               <RouterLink to="/"><button class="mx-auto border-2 border-[#00A760] bg-[#A4FBD6] p-2 rounded-md font-semibold text-[#4a4a4a]">Neue Suche</button></RouterLink>
            </div>
        </div>
    </div>
    <footer class="relative bottom-0 h-4 bg-[#A4FBD6] mt-2 content-none w-full"></footer>
</div>
</template>