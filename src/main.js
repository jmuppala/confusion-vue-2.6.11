import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { router } from './router';
import { MdApp, MdToolbar, MdDrawer, MdContent, MdList, MdIcon, MdButton, MdAvatar, MdDivider, MdCard, MdTable, MdDialog, MdField, MdCheckbox, MdMenu, MdProgress } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import store from './store';

Vue.use(VueRouter)
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
Vue.use(MdTable)
Vue.use(MdDialog)
Vue.use(MdField)
Vue.use(MdCheckbox)
Vue.use(MdMenu)
Vue.use(MdProgress)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
