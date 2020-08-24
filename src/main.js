import Vue from 'vue'
import App from './App.vue'
import { MdApp, MdToolbar, MdDrawer, MdContent, MdList, MdIcon, MdButton, MdAvatar, MdDivider, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdToolbar)
Vue.use(MdDrawer)
Vue.use(MdApp)
Vue.use(MdIcon)
Vue.use(MdButton)
Vue.use(MdAvatar)
Vue.use(MdDivider)
Vue.use(MdCard)

new Vue({
  render: h => h(App),
}).$mount('#app')
