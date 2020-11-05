import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Chart from '../views/Chart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },

  {
    path: '/foods/detail/:id',
    name: 'FoodDetail',
    component: FoodDetail
  },
  {
    path: '/foods/Chart',
    name: 'Chart',
    component: Chart
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
