import { createRouter, createWebHistory } from 'vue-router'
import DashboardHome from '../views/DashboardHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardHome
    }
  ]
})

export default router

