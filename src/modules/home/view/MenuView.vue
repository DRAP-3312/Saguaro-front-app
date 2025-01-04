<script lang="ts" setup>
import ButtonComponent from '@/modules/common/components/ButtonComponent.vue'
import { ref } from 'vue'

const activeButton = ref<number | null>(null)
const loading = ref(false)

// const emit = defineEmits<{
//   btnSelected: [boolean]
// }>()

const changeSelect = (selectedIndex: number) => {
  if (activeButton.value === selectedIndex) {
    activeButton.value = null
  } else {
    activeButton.value = selectedIndex
  }
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-5 my-5 gap-4">
    <aside
      class="col-span-1 dark:text-white text-gray-500 hidden md:block dark:bg-black/5 bg-gray-100 rounded-md"
    >
      <ul class="space-y-1 text-center py-2">
        <li class="">
          <RouterLink to="/home/menu/boards" @click="changeSelect(1)">
            <ButtonComponent
              content="Mis tableros"
              type="select"
              :is-activate="activeButton === 1"
            />
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/home/menu/friends" @click="changeSelect(2)">
            <ButtonComponent content="Amigos" type="select" :is-activate="activeButton === 2" />
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/home/menu/friends" @click="changeSelect(3)">
            <ButtonComponent content="Otro" type="select" :is-activate="activeButton === 3" />
          </RouterLink>
        </li>
      </ul>
    </aside>

    <!-- bg-black/5  rounded-md -->
    <div class="col-span-4 p-2 text-center">
      <RouterView />
    </div>
  </div>
</template>
