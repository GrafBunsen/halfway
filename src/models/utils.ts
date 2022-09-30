import type Stop from "./stop";
import { store } from "./store";

export async function getStops(): Promise<Stop[]> {
    if(!store.stops || store.stops.length === 0) {
        let result = await fetch("http://localhost:3001/stops");
        let stops = (await result.json());
        store.stops = stops;
    }
    return store.stops;
}