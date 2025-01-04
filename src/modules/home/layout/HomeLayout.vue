<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store/auth.store'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import PerfilOption from '../components/PerfilOption.vue'
import SwitchButtonComponent from '@/modules/common/components/SwitchButtonComponent.vue'
const dropOpc = ref(false)
const router = useRouter()
const isDark = ref(true)
const authStore = useAuthStore()

const closeSesion = () => {
  authStore.logout()
  router.push({ name: 'auth' })
}

const switchTheme = () => {
  isDark.value = !isDark.value
}

const actions = [
  {
    name: 'Mi Perfil',
    clicAction: () => console.log('Mi perfil'),
  },
]
</script>

<template>
  <div :class="{ dark: isDark }">
    <div class="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white text-gray-600">
      <!-- 118B50 -->
      <header class="text-white p-2">
        <div class="flex flex-row items-center justify-between">
          <div class="flex items-center space-x-4">
            <img src="../../../assets/newlogo.png" alt="saguaroLogo" class="h-8 w-10" />
          </div>
          <div>
            <span class="text-[#118B50] text-lg font-semibold">Saguaro App</span>
          </div>
          <div class="flex items-center space-x-4 dark:text-white text-gray-600">
            <SwitchButtonComponent @is-dark="switchTheme" />
            <button class="">notify</button>
            <PerfilOption img-perfil="logo.png" :actions="actions" :close-sesion="closeSesion" />
          </div>
        </div>
      </header>
      <hr class="border-t-1 dark:border-gray-600 border-gray-300 mx-2" />

      <main class="flex-1 container mx-auto px-4 justify-center items-center text-center">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
