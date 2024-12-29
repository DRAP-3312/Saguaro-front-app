<script lang="ts" setup>
// @ts-ignore
import LoadingView from '@/modules/common/animation/LoadingView.vue'
import { reactive, ref } from 'vue'

const loading = ref(false)
const params = reactive<{ userName: string; password: string }>({
  userName: '',
  password: '',
})
</script>

<template>
  <form
    class="flex items-center justify-center h-screen text-start"
    @submit.prevent="
      () => {
        loading = !loading
      }
    "
  >
    <div class="p-4 flex flex-col sm:flex-row justify-around items-center w-full max-w-4xl">
      <LoadingView
        v-if="loading"
        class="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
      />
      <div class="w-1/2 max-w-sm">
        <img src="../../../assets/newlogo.png" alt="img logo" class="w-full animate-sway" />
      </div>

      <div class="p-3 mt-4 sm:mt-0 sm:ml-4 w-full max-w-md">
        <div>
          <label class="block text-white text-sm font-semibold mb-2" for="username"
            >User Name</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            v-model="params.userName"
            placeholder="Username"
          />
        </div>
        <div class="mt-4">
          <label class="block text-white text-sm font-bold mb-2" for="password">Password</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            v-model="params.password"
            placeholder="******************"
          />
        </div>
        <div class="flex items-center justify-between mt-4">
          <button
            class="bg-[#118B50] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </form>
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
