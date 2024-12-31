<script setup lang="ts">
import SwitchButtonComponent from '@/modules/common/components/SwitchButtonComponent.vue'
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const btnActive = ref<number | null>(1)
const isDark = ref(true)
const onClic = (selected: number) => {
  btnActive.value = selected
}

const changeTheme = (state: boolean) => {
  isDark.value = state
}
</script>

<template>
  <div :class="{ dark: isDark }">
    <div
      class="flex items-center justify-center min-h-screen dark:bg-slate-900 text-black dark:text-green-500"
    >
      <div
        class="w-4/5 h-auto flex flex-col md:flex-row dark:bg-gray-800 bg-gray-200 rounded-lg shadow-lg"
      >
        <div class="flex items-center justify-center md:w-1/3 p-2 w-2/5">
          <div class="text-center">
            <img src="../../../assets/newlogo.png" alt="img logo" class="w-3/4 animate-sway" />
          </div>
        </div>

        <div class="flex flex-col flex-grow p-2">
          <div class="flex">
            <RouterLink :to="{ name: 'login' }" class="w-1/2" @click="onClic(1)">
              <button
                class="w-full py-2 rounded-tl-lg dark:hover:bg-slate-700 hover:bg-slate-300"
                :class="
                  btnActive === 1
                    ? 'dark:bg-gray-900 bg-white font-bold  dark:text-green-400 text-green-600'
                    : 'text-gray-500 dark:text-white'
                "
              >
                Login
              </button>
            </RouterLink>
            <RouterLink to="/auth/register" class="w-1/2" @click="onClic(2)">
              <button
                class="w-full py-2 rounded-tr-lg dark:hover:bg-slate-700 hover:bg-slate-300"
                :class="
                  btnActive === 2
                    ? 'dark:bg-gray-900 bg-white font-bold  dark:text-green-400 text-green-600'
                    : 'text-gray-500 dark:text-white'
                "
              >
                Register
              </button>
            </RouterLink>
          </div>

          <div
            class="flex-grow flex justify-center dark:bg-gray-900 bg-white rounded-bl-lg rounded-br-lg p-1"
          >
            <RouterView />
          </div>
        </div>
      </div>
      <div class="">
        <SwitchButtonComponent @is-dark="changeTheme" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes sway {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}
.animate-sway {
  animation: sway 3s ease-in-out infinite;
}
@keyframes wave {
  0%,
  100% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
}
</style>
