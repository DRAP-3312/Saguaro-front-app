import type { RouteRecordRaw } from 'vue-router'

export const authRouter: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  redirect: { name: 'login' },
  component: () => import('@/modules/auth/layouts/AuthView.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/modules/auth/view/LoginView.vue'),
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/modules/auth/view/RegisterView.vue'),
    },
  ],
}
