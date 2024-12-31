import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/modules/about/view/AboutView.vue'
import { authRouter } from '@/modules/auth/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
    },
    authRouter,
  ],
})

export default router
