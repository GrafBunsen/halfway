import { reactive, ref, } from "vue"

export const theme: {
    dark: boolean
} = reactive({
    dark: ref(true),
})