import { createPinia, PiniaVuePlugin } from 'pinia'
import Vue from 'vue'

Vue.use(PiniaVuePlugin)

const Pinia = createPinia()

export default Pinia
