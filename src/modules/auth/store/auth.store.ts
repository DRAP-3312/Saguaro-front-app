import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { loginAction } from '../actions/login.action'
import { useLocalStorage } from '@vueuse/core'
import { AuthStatus, type UserRes } from '../interfaces'
import type { LoginAuth } from '@/interfaces'
import { checkStatusAction } from '../actions/check-status.action'

export const useAuthStore = defineStore('auth', () => {
  const authStatus = useLocalStorage<AuthStatus>('authStatus', AuthStatus.Checking)
  const user = useLocalStorage<UserRes | undefined>('user', undefined)
  const token = useLocalStorage('token', '')

  const login = async (param: LoginAuth) => {
    try {
      const loginResp = await loginAction(param)
      if (!loginResp.ok) {
        logout()
        return false
      }

      user.value = loginResp.user
      token.value = loginResp.token
      authStatus.value = AuthStatus.Valid

      return true
    } catch (error) {
      return logout()
    }
  }

  const logout = () => {
    localStorage.removeItem('token')

    authStatus.value = AuthStatus.Invalid
    user.value = undefined
    token.value = ''
    return false
  }

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const statusResp = await checkStatusAction()

      if (!statusResp.ok) {
        logout()
        return false
      }
      console.log({ statusResp })
      authStatus.value = AuthStatus.Valid
      user.value = statusResp.user
      token.value = statusResp.token
      return true
    } catch (error) {
      //logout()
      return false
    }
  }

  return {
    user,
    token,
    authStatus,

    // Getters
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Valid),
    //isAdmin: computed(() => user.value?.roles.includes('admin') ?? false),
    username: computed(() => user.value?.name),

    // Actions
    login,
    logout,
    checkAuthStatus,
  }
})
