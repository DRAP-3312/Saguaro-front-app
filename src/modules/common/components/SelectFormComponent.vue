<template>
  <div>
    <div class="text-center">
      <button
        @click="onOpen"
        type="button"
        class="flex items-center justify-between dark:text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none border border-gray-300 w-full"
      >
        <span class="pr-2">
          {{ selectedValue }}
        </span>
        <i class="fa-solid fa-arrow-down"></i>
      </button>

      <div
        v-if="isOpen"
        class="absolute mt-2 w-3/4 md:w-64 dark:bg-gray-700 bg-gray-50 dark:text-white text-gray-500 rounded-md shadow-lg z-10 p-2"
      >
        <div
          v-for="item in props.list"
          :key="item"
          class="p-2 flex items-center hover:bg-[#118B50] hover:text-white cursor-pointer rounded-md"
          :class="selectedValue === item ? 'bg-[#118B50] text-white' : ''"
          @click="onSelect(item)"
        >
          <div>
            <p class="font-semibold">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  list: string[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  selectItem: [string]
}>()

const isOpen = ref(false)
const selectedValue = ref('Elegir')

const onOpen = () => {
  isOpen.value = !isOpen.value
}

const onSelect = (item: string) => {
  selectedValue.value = item
  emit('selectItem', item)
  isOpen.value = false
}
</script>
