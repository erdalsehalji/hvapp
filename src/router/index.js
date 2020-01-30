import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "pocetna" */ '../views/Home.vue')
  },

  {
    path: '/izbornik',
    name: 'izbornik',
    component: () => import(/* webpackChunkName: "izbornik" */ '../views/izbornik.vue')
  },

  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "izbornik" */ '../views/info.vue')
  },

  {
    path: '/oaplikaciji',
    name: 'oaplikaciji',
    component: () => import(/* webpackChunkName: "izbornik" */ '../views/oaplikaciji.vue')
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
