<script setup lang="ts">
interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'Success' | 'Error' | 'Warning' | 'Info';
}

withDefaults(defineProps<LoaderProps>(), {
  size: 'sm',
  variant: 'Success'
});
</script>

<template>
  <div
    class="relative size-4 animate-spin"
    :class="{
      'size-4': size === 'sm',
      'size-6': size === 'md',
      'size-8': size === 'lg'
    }"
  >
    <div class="grid grid-cols-1 grid-rows-1 w-full h-full">
      <div
        class="col-start-1 row-start-1 rounded-full border-4 border-gray-200 dark:border-gray-700"
      ></div>
      <div
        class="col-start-1 row-start-1 rounded-full border-4 mask-conic-from-80% mask-conic-to-80%"
        :class="{
          'border-green-600': variant === 'Success',
          'border-red-600': variant === 'Error',
          'border-amber-600': variant === 'Warning',
          'border-blue-600': variant === 'Info'
        }"
      ></div>
    </div>
  </div>
</template>
