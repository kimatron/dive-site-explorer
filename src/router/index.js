import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import DiveSiteMap from '../components/DiveSiteMap.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'DiveSiteMap',
    component: DiveSiteMap
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router