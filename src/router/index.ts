import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/modules/about/view/AboutView.vue'
import { authRouter } from '@/modules/auth/router'
import { homeRouter } from '@/modules/home/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/common/NotFound.vue'),
    },
    authRouter,
    homeRouter,
  ],
})

export default router
