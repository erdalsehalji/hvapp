import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/pocetna',
    name: 'pocetna',
    component: () => import(/* webpackChunkName: "pocetna" */ '../views/pocetna.vue')
  },

  {
    path: '/izbornik',
    name: 'izbornik',
    component: () => import(/* webpackChunkName: "izbornik" */ '../views/izbornik.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },

  {
    path: '/nutricalc',
    name: 'nutricalc',
    component: () => import(/* webpackChunkName: "nutricalc" */ '../views/nutricalc.vue')
  },

  {
    path: '/pracenje',
    name: 'pracenje',
    component: () => import(/* webpackChunkName: "pracenje" */ '../views/pracenje.vue')
  },

  {
    path: '/bodycalc',
    name: 'bodycalc',
    component: () => import(/* webpackChunkName: "bodycalc" */ '../views/bodycalc.vue')
  },

  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "bodycalc" */ '../views/signup.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
