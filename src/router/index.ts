import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/teamList',
    name: 'teamList',
    component : () => import(/* webpackChunkName: "about" */ '../views/teamList.vue')
  },
  {
    path: '/favorite',
    name: 'favorite',
    component : () => import(/* webpackChunkName: "about" */ '../views/favoriteTeams.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
