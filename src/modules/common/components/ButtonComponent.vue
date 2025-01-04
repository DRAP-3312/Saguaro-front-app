<script lang="ts" generic="T" setup>
const props = defineProps<{
  content: T
  isActivate?: boolean
  type: 'select' | 'create' | 'delete' | 'update'
}>()

// watch(
//   () => props.isActivate,
//   (newValue) => {
//     status.value = newValue
//   },
// )
</script>
<template>
  <div v-if="props.type == 'select'">
    <button
      :class="isActivate ? 'bg-[#118B50] ' : ''"
      class="p-1 rounded-md dark:hover:bg-gray-700 hover:bg-gray-300 w-11/12 active:bg-[#118B50]"
    >
      {{ props.content }}
    </button>
  </div>
  <div v-if="props.type == 'create'">
    <button class="py-1 px-3 rounded-md hover:bg-[#118B50]/70 w-full bg-[#118B50]">
      {{ props.content }}
    </button>
  </div>
</template>
