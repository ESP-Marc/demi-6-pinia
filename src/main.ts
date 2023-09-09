// @ts-nocheck

import Vue from 'vue'
import App from '@/App.vue'

Vue.config.productionTip = false

/**
 * Initialize Vue App Instance.
 *
 * @type {Vue | any}
 */
window.App = new Vue({

    store,
    render: h => h(App)

})
