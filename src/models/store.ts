import { reactive } from "vue"
import type Stop from "./stop"

export const store: {
    startA: Stop | undefined,
    startB: Stop  | undefined,
    stops: Stop[]
} = reactive({
    startA: undefined,
    startB: undefined,
    stops: []
})