import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/map',
    name: 'DiveSiteMap',
    component: () => import('../components/DiveSiteMap.vue')
  },
  {
    path: '/list',
    name: 'DiveSiteList',
    component: () => import('../components/DiveSiteList.vue')
  },
  {
    path: '/site/:id',
    name: 'DiveSiteDetail',
    component: () => import('../components/DiveSiteDetail.vue')
  },
  {
    path: '/favorites',
    name: 'FavoriteDiveSites',
    component: () => import('../components/FavoriteDiveSites.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router