import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import assortiment from '../views/webshop.vue'
import services from '../views/services.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
     path: '/webshop', 
     name: 'Webshop',
     component: assortiment 
  },
  {
     path: '/services', 
     name: 'Services',
     component: services 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
