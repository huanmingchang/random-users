import { createWebHistory, createRouter } from 'vue-router'
import Users from '../views/Users.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: 'users',
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: () => import('../views/Favorite.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not-found',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
