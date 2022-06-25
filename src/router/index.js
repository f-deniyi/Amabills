import { createWebHistory, createRouter } from 'vue-router'
import Dashboard from '../views/Dashboard/index.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
