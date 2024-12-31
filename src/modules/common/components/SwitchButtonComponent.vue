<script lang="ts" setup>
import { ref, watch } from 'vue'

const emit = defineEmits<{
  isDark: [boolean]
}>()

const isDark = ref(false)

const changeTheme = () => {
  isDark.value = !isDark.value
  emit('isDark', isDark.value)
}
</script>

<template>
  <div class="absolute right-2 top-2" :class="{ dark: isDark }">
    <button
      @click="changeTheme"
      class="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      {{ isDark ? 'Dark' : 'Light' }}
    </button>
  </div>
</template>
