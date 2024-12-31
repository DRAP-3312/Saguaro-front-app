<template>
  <div>
    <label :for="idElement" class="block mb-2 text-sm font-medium text-gray-300">{{ label }}</label>
    <input
      :type="type"
      @input="EmitValue"
      :id="idElement"
      :placeholder="placeholder"
      class="w-full p-2 border rounded-md text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  idElement: string
  label: string
  type: string
  placeholder: string
}

const emit = defineEmits<{
  inputValue: [string]
}>()

const EmitValue = (event: Event) => {
  const input = event.target as HTMLInputElement
  emit('inputValue', input.value)
}

const { idElement, label, placeholder, type } = defineProps<Props>()
</script>
