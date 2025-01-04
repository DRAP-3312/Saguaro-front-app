<template>
  <div>
    <div>
      <button class="" @click="onOpen">
        <div>
          <img src="../../../assets/logo.png" alt="img" class="w-8" />
        </div>
      </button>

      <div
        v-if="isOpen"
        class="flex flex-col container absolute right-0 bg-gray-200 dark:bg-slate-800 w-auto h-[60%] px-3 py-2 shadow-md rounded-tl-lg rounded-bl-lg text-sm text-center dark:text-white text-gray-600"
      >
        <span class="font-semibold">Bienvenido</span>
        <hr class="dark:border-gray-600 border-gray-400 m-1" />
        <div class="justify-between">
          <div
            v-for="(act, index) in actions"
            class="p-2 hover:bg-[#118B50] hover:text-white cursor-pointer rounded-md"
          >
            <button @click="execFuntion(act.clicAction)">
              {{ act.name }}
            </button>
          </div>
          <div class="">
            <ButtonFormComponent content="Cerrar Sesion" type="button" :action="closeSesion" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonFormComponent from '@/modules/common/components/ButtonFormComponent.vue'
import SwitchButtonComponent from '@/modules/common/components/SwitchButtonComponent.vue'
import { ref } from 'vue'

interface Props {
  imgPerfil: string
  closeSesion: Function
  actions?: { name: string; clicAction: Function }[]
}

const isOpen = ref(false)
const onOpen = () => {
  isOpen.value = !isOpen.value
}

const { imgPerfil, actions, closeSesion } = defineProps<Props>()

const execFuntion = (funtion: Function) => {
  funtion()
}
</script>
