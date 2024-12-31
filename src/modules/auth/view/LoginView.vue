<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useAuthStore } from '../store/auth.store'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'

const route = useRoute()
const isDark = computed(() => route.query.dark === 'true')
const userNameInputRef = ref<HTMLInputElement | null>(null)
const passwordInputRef = ref<HTMLInputElement | null>(null)
const authStore = useAuthStore()
const toast = useToast()
const myLogin = reactive<{ userName: string; password: string }>({
  userName: '',
  password: '',
})

const onLogin = async () => {
  if (myLogin.userName === '' || myLogin.password.length < 6) {
    return toast.warning('User name o password no pueden estar vacios')
  }

  const ok = await authStore.login(myLogin)
  if (ok) return

  toast.error('Credenciales inválidas')
}
</script>

<template>
  <div class="w-3/5" :class="{ dark: isDark }">
    <form class="" @submit.prevent="onLogin">
      <div class="mt-4 sm:mt-0 sm:ml-4 dark:text-white text-gray-700 text-start">
        <div>
          <label class="p-1" for="username">User Name</label>
          <input
            class="border rounded-md w-full py-2 px-3 dark:text-gray-300 text-gray-500 dark:bg-gray-800 leading-tight focus:outline-none"
            id="username"
            ref="userNameInputRef"
            type="text"
            v-model="myLogin.userName"
            placeholder="Username"
          />
        </div>
        <div class="mt-4">
          <label class="p-1" for="password">Password</label>
          <input
            class="border rounded-md w-full py-2 px-3 dark:text-gray-300 text-gray-500 dark:bg-gray-800 leading-tight focus:outline-none"
            id="password"
            ref="passwordInputRef"
            type="password"
            v-model="myLogin.password"
            placeholder="******************"
          />
        </div>
        <div class="mt-3">
          <button
            class="bg-[#118B50] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
