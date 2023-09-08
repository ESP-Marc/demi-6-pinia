// @ts-nocheck

import Vue from 'vue'
import App from '@/App.vue'
import PortalVue from 'portal-vue'
import vuetify from '@/plugins/Vuetify'

import '@/registerServiceWorker'

Vue.use(PortalVue)

Vue.config.productionTip = false

/**
 * Initialize Vue App Instance.
 *
 * @type {Vue | any}
 */
window.App = new Vue({

    store,
    vuetify,

    render: h => h(App)

})
