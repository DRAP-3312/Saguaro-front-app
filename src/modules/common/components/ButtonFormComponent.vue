<template>
  <div>
    <button
      @click="execAction"
      class="bg-[#118B50] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      :type="type"
    >
      {{ content }}
    </button>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  content: string
  type: 'button' | 'submit' | 'reset' | undefined
  action?: Function
}

const { content, type, action } = defineProps<Props>()

const execAction = () => {
  if (action) {
    action()
  }
}
</script>
