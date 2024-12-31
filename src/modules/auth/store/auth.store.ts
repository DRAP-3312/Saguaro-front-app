import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { loginAction } from '../actions/login.action'
import { useLocalStorage } from '@vueuse/core'
import { AuthStatus, type UserRes } from '../interfaces'
import type { LoginAuth } from '@/interfaces'

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.Checking)
  const user = ref<UserRes | undefined>()
  const token = ref(useLocalStorage('token', ''))

  const login = async (params: LoginAuth) => {
    try {
      const loginRes = await loginAction(params)

      if (!loginRes.ok) {
        logout()
        return false
      }

      user.value = loginRes.user
      token.value = loginRes.token
      authStatus.value = AuthStatus.Valid

      return true
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  const logout = () => {
    authStatus.value = AuthStatus.Invalid
    user.value = undefined
    token.value = ''
    return false
  }

  return {
    user,
    authStatus,
    token,
    login,

    //getters
    isCheking: computed(() => authStatus.value === AuthStatus.Checking),
    isValid: computed(() => authStatus.value === AuthStatus.Valid),
    isInvalid: computed(() => authStatus.value === AuthStatus.Invalid),
  }
})
