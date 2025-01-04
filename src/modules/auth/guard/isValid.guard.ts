import { AuthStatus } from '@/modules/auth/interfaces'
import { useAuthStore } from '@/modules/auth/store/auth.store'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const isValidGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = await useAuthStore()
  await authStore.checkAuthStatus()

  authStore.authStatus === AuthStatus.Valid ? next({ name: 'home' }) : next()
}

export default isValidGuard
