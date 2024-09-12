import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import DiveSiteMap from '../components/DiveSiteMap.vue'
import DiveSiteList from '../components/DiveSiteList.vue'

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
  },
  {
    path: '/list',
    name: 'DiveSiteList',
    component: DiveSiteList
  },
  {
    path: '/site/:id',
    name: 'DiveSiteDetail',
    component: () => import('../components/DiveSiteDetail.vue') // We'll create this component next
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router