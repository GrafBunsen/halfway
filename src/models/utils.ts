import type Stop from "./stop";
import { store } from "./store";

export async function getStops(): Promise<Stop[]> {
    if(!store.stops || store.stops.length === 0) {
        let result = await fetch(`${API_URL}/stops`);
        let stops = (await result.json());
        store.stops = stops;
    }
    return store.stops;
}

export const API_URL = "http://127.0.0.1:3001";