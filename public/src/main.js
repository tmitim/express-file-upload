import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import router from './router'

// styles
import 'vue-material/dist/vue-material.css'
import './assets/app.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.material.registerTheme('default', {
  primary: 'teal',
  accent: 'amber',
  warn: 'red'
})

/* eslint-disable no-new */
new Vue({router}).$mount('#app')

