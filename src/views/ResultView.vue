<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
import { store } from "@/models/store";
import LoadingResult from "../components/LoadingResult.vue";
import { API_URL } from "@/models/utils";


const result = ref(false)
const startOfA = store.startA;
const startOfB = store.startB;

const relevantStopsA = ref();
const relevantStopsB = ref();

const response = ref();

function findNextLink(searchString: any, next: any, result: any, stops: any) {

    for (let l of result.links) {
        if (l.fromId === searchString && l.toId === next) {
            return { from: stops.get(searchString), to: stops.get(l.toId), name: l.data.name ? l.data.name : "transfer" }
        } else if (l.toId === searchString && l.fromId === next) {
            return { from: stops.get(searchString), to: stops.get(l.fromId), name: l.data.name ? l.data.name : "transfer" }
        }
    }
    return { name: "TRANSFER" };
}

fetch(`${API_URL}/calculate/${startOfA?.stop_id}/${startOfB?.stop_id}`).then(
    async fetchRes => {
        result.value = true;
        var fetchResJson = await fetchRes.json();
        response.value = fetchResJson.middleStop.data.label;
        console.log(fetchResJson)

        let stops = new Map();
        fetchResJson.path.forEach((stop: any) => (stops.set(stop.id, stop.data.label)));
        let routeB = [];
        for (let i = 0; i < fetchResJson.indexOfMiddleStop; i++) {
            routeB.push(findNextLink(fetchResJson.path[i].id, fetchResJson.path[i + 1].id, fetchResJson, stops));
        }
        let routeA = [];
        for (let i = fetchResJson.indexOfMiddleStop; i < fetchResJson.path.length - 1; i++) {
            routeA.push(findNextLink(fetchResJson.path[i + 1].id, fetchResJson.path[i].id, fetchResJson, stops));
        }

        relevantStopsA.value = getRelevantStops(routeA.reverse());
        relevantStopsB.value = getRelevantStops(routeB.reverse());

        console.log("routeA", routeA);

        console.log("routeB", routeB);
    }
);

function getRelevantStops(route: any): any[] {
    let length = route.length;
    let relevantArr = [];
    for (let i = 0; i < length; i++) {
        if (route[i].name == "TRANSFER") {
            continue;
        }
        if (relevantArr.length == 0) {
            if (route[i].name == "transfer") {
                continue;
            } else {
                relevantArr.push({ from: route[i].from, to: route[i].to, name: route[i].name });
            }
        }
        if (i == length - 1) {
            if (route[i].name == "TRANSFER") {
                relevantArr.push({ from: route[i - 1].from, to: route[i - 1].to });
            } else {
                relevantArr.push({ from: route[i].from, to: route[i].to });
            }
        } else {
            if (route[i].name == "transfer") {
                relevantArr.push({ from: route[i].from, to: route[i].to, name: route[i + 1].name });
            }
        }
    }
    console.log(relevantArr);
    return relevantArr
}



</script>
<template>
    <div>
        <div class="min-h-screen -mb-6">
            <Header />
            <div v-if="!result">
                <LoadingResult></LoadingResult>
            </div>
            <div v-else class="m-8">
                <div class="bg-primary-green p-4 mt-8 rounded-md">
                    <div class="flex justify-between">
                        <h1 class="text-7xl font-bold text-white text-left italic -ml-4 -mt-7">A</h1>
                        <span
                            class="material-symbols-rounded text-right text-white relative top-1 text-4xl rotate-90">double_arrow</span>
                    </div>
                    <div class="ml-6">
                        <div class="text-primary-text mb-4" v-for="(stop, index) in relevantStopsA">
                            <div v-if="index == 0" class="font-bold text-lg"><span
                                    class="text-white font-bold text-lg -ml-4 mr-4">&#x25EF</span> {{ stop.from }}</div>
                            <div v-else class="text-md font-semibold"
                                :class="{ 'font-bold text-lg': index == relevantStopsA.length - 1 }"><span
                                    class="text-white font-bold text-lg -ml-4 mr-4">&#x25EF</span>{{ stop.to }}</div>
                            <div v-if="index != relevantStopsB.length" class="ml-8 italic mt-2">{{ stop.name }}</div>
                        </div>
                    </div>
                </div>

                <h3 class="my-4 text-xl text-center text-primary-text">Treffen in <span
                        class="font-bold">{{ response }}</span></h3>

                <div class="bg-primary-blue p-4 mb-8 rounded-md">
                    <div class="flex justify-between">
                        <span
                            class="material-symbols-rounded text-white relative top-1 text-4xl -rotate-90">double_arrow</span>
                        <h1 class="text-7xl font-bold text-white text-right italic -mt-7 -mr-5">B</h1>
                    </div>
                    <div class="ml-6">
                        <div class="text-primary-text mb-4" v-for="(stop, index) in relevantStopsB">
                            <div v-if="index == relevantStopsB.length - 1" class="font-bold text-lg"><span
                                    class="text-white font-bold text-lg -ml-4 mr-4">&#x25EF</span>{{ stop.from }}</div>
                            <div v-else class="text-md font-semibold" :class="{ 'font-bold text-lg': index == 0 }"><span
                                    class="text-white font-bold text-lg -ml-4 mr-4">&#x25EF</span>{{ stop.to }}</div>
                            <div v-if="index != relevantStopsB.length - 1" class="ml-8 italic mt-2">{{ stop.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <RouterLink to="/"><button
                            class="mx-auto border-2 border-[#00A760] bg-primary-green p-2 rounded-md font-semibold text-primary-text">Neue
                            Suche</button></RouterLink>
                </div>
            </div>
        </div>
        <footer class="relative bottom-0 h-4 bg-primary-green mt-2 content-none w-full"></footer>
    </div>
</template>