<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-scale v-scale1" :style="spinnerStyle1"></div>
    <div class="v-scale v-scale2" :style="spinnerStyle2"></div>
    <div class="v-scale v-scale3" :style="spinnerStyle3"></div>
    <div class="v-scale v-scale4" :style="spinnerStyle4"></div>
    <div class="v-scale v-scale5" :style="spinnerStyle5"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: '#5dc596',
  },
  height: {
    type: String,
    default: '35px',
  },
  width: {
    type: String,
    default: '4px',
  },
  margin: {
    type: String,
    default: '2px',
  },
  radius: {
    type: String,
    default: '2px',
  },
})

const spinnerStyle = computed(() => ({
  backgroundColor: props.color,
  height: props.height,
  width: props.width,
  margin: props.margin,
  borderRadius: props.radius,
  display: 'inline-block',
  animationName: 'v-scaleStretchDelay',
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
  animationFillMode: 'both',
}))

const spinnerStyle1 = computed(() => ({
  ...spinnerStyle.value,
  animationDelay: '0.1s',
}))

const spinnerStyle2 = computed(() => ({
  ...spinnerStyle.value,
  animationDelay: '0.2s',
}))

const spinnerStyle3 = computed(() => ({
  ...spinnerStyle.value,
  animationDelay: '0.3s',
}))

const spinnerStyle4 = computed(() => ({
  ...spinnerStyle.value,
  animationDelay: '0.4s',
}))

const spinnerStyle5 = computed(() => ({
  ...spinnerStyle.value,
  animationDelay: '0.5s',
}))
</script>

<style>
.v-spinner {
  text-align: center;
}

@keyframes v-scaleStretchDelay {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.4);
  }
}
</style>
