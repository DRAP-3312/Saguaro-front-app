import type { RouteRecordRaw } from 'vue-router'
import isValidGuard from '../guards/isValid.guard'

export const homeRouter: RouteRecordRaw = {
  path: '/home',
  name: 'home',
  beforeEnter: [isValidGuard],
  redirect: { name: 'menu' },
  component: () => import('@/modules/home/layout/HomeLayout.vue'),
  children: [
    {
      path: 'menu',
      name: 'menu',
      component: () => import('@/modules/home/view/MenuView.vue'),
      children: [
        {
          path: 'boards',
          component: () => import('@/modules/board/view/BoardView.vue'),
        },
        {
          path: 'friends',
          component: () => import('@/modules/user/view/FriendView.vue'),
        },
      ],
    },
  ],
}
