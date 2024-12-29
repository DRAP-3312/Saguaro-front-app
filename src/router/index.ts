import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/modules/auth/view/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView,
    },
  ],
})

export default router
