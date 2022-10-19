<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
import { store } from "@/models/store";
import LoadingResult from "../components/LoadingResult.vue";


const result = ref(false)
const startOfA = store.startA;
const startOfB = store.startB;

const response = ref();

function findNextLink(searchString: any, result: any) {

    for(let l of result.links) {
        if(l.fromId === searchString) {
            return {from: searchString, to: l.toId, name: l.data.name}
        } else if(l.toId === searchString) {
            return {from: searchString, to: l.fromId, name: l.data.name}
        }
    }
    return { name: "TRANSFER" };
}

fetch(`http://localhost:3001/calculate/${startOfA?.stop_id}/${startOfB?.stop_id}`).then(
    async fetchRes => {
        result.value = true;
        var fetchResJson = await fetchRes.json();
        response.value = fetchResJson.middleStop.data.label;
        console.log(fetchResJson)

        let stops = new Map();
        let trips = new Map();
        fetchResJson.path.forEach((stop: any) => (stops.set(stop.id, stop.data.label)));
        let routeA = [];
        for(let i = 0; i < fetchResJson.indexOfMiddleStop; i++) {
            routeA.push(findNextLink(fetchResJson.path[i].id, fetchResJson));
        }
        let routeB: any = [];
        for(let i = fetchResJson.path.length - 1; i >= fetchResJson.indexOfMiddleStop; i--) {
            routeB.push(findNextLink(fetchResJson.path[i].id, fetchResJson));
        }
        console.log("routeA", routeA);
        console.log("routeB", routeB);


       /* fetchResJson.links.forEach((l: any) => {
            if(l.data.name) {
                var list;
                if(trips.has(l.data.name)) {
                    list = trips.get(l.data.name);
                } else {
                    list = [];
                }
                list.push({from: stops.get(l.fromId), to: stops.get(l.toId)});
                trips.set(l.data.name, list)
            } 
        })*/
        console.log(trips);

        //split trips
        
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
                <span class="material-symbols-rounded text-white relative top-1 text-4xl rotate-90">double_arrow</span>            
            </div>

            <h3 class="my-4 text-xl">Treffen in <span class="font-bold">{{response}}</span></h3>

            <div class="bg-[#4CF3F0] p-4 mb-8 rounded-md">
               <span class="material-symbols-rounded text-white relative top-1 text-4xl -rotate-90">double_arrow</span>            
            </div>
            <div class="text-center">
               <RouterLink to="/"><button class="mx-auto border-2 border-[#00A760] bg-[#A4FBD6] p-2 rounded-md font-semibold text-[#4a4a4a]">Neue Suche</button></RouterLink>
            </div>
        </div>
    </div>
    <footer class="relative bottom-0 h-4 bg-[#A4FBD6] mt-2 content-none w-full"></footer>
</div>
</template>