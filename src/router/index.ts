import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component : () => import(/* webpackChunkName: "about" */ '../views/teamList.vue')
  },
  {
    path: '/teamList',
    name: 'teamList',
    component : () => import(/* webpackChunkName: "about" */ '../views/teamList.vue')
  },
  {
    path: '/favorite',
    name: 'favorite',
    component : () => import(/* webpackChunkName: "about" */ '../views/favoriteTeams.vue')
  },
  {
    path: '/team/:teamId',
    name: 'team',
    component : () => import(/* webpackChunkName: "about" */ '../views/team.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
