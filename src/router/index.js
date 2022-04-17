import { createWebHistory, createRouter } from 'vue-router'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: 'users',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
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
    path: '/:pathMatch(.*)*',
    name: 'Not-found',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
