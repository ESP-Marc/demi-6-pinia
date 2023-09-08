import {defineStore} from 'pinia'
import {reactive} from 'vue'

export const useHello = defineStore('bootstrap', () => {

    const state = reactive({
        title: 'Hello',
        message: 'Welcome aboard'
    })

    return { state }

})
