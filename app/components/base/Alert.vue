<template>
  <div
    class="w-full border p-1 rounded-xs"
    :class="[
      { 'border-blue-600/30': type === 'info' },
      { 'border-green-600/30': type === 'success' },
      { 'border-yellow-600/30': type === 'warning' },
      { 'border-red-600/30': type === 'error' }
    ]"
  >
    <div
      class="py-1.5 px-1.5 rounded-xs flex items-center gap-1.5 shadow-xl"
      :class="[
        { 'bg-blue-600/5': type === 'info' },
        { 'bg-green-600/5': type === 'success' },
        { 'bg-yellow-600/5': type === 'warning' },
        { 'bg-red-600/5': type === 'error' }
      ]"
    >
      <h4
        class="text-xs font-semibold leading-[100%] px-1.5 py-1 bg-white/5 rounded-xs w-fit"
        :class="[
          { 'text-blue-600': type === 'info' },
          { 'text-green-600': type === 'success' },
          { 'text-yellow-600': type === 'warning' },
          { 'text-red-600': type === 'error' }
        ]"
      >
        {{ typeLabel }}
      </h4>
      <p class="text-xs font-light text-gray-300 px-1">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { capitalize } from 'vue'

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info'
  message: string
}
const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info'
})

const typeLabel = computed(() => {
  switch (props?.type) {
    case 'info':
      return capitalize(props.type)
    case 'error':
      return capitalize(props.type)
    case 'success':
      return capitalize(props.type)
    default:
    case 'warning':
      return capitalize(props.type)
  }
})
</script>
