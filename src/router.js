import VueRouter from 'vue-router'
import MenuList from './components/MenuComponent.vue'
import Home from './components/HomeComponent.vue'
import About from './components/AboutComponent.vue'
import Contact from './components/ContactComponent.vue'

const routes = [
    { path: '/home', component: Home },
    { path: '/', redirect: '/home' },
    { path: '/aboutus', component: About },
    { path: '/menu', component: MenuList },
    { path: '/contactus', component: Contact }
  ]
  
export const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })