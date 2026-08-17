<template>
  <div
   role="button"
   class="cursor-pointer relative flex justify-center space-x-2.5 px-4 py-2.5 bg-green-600 rounded-xs" :class="[
    { 'bg-transparent! border border-green-600': styled === 'outlined' }
  ]"
  @click.stop="isLoading = !isLoading; $emit('click')"
  >
    <MorphIcon :icon="!isLoading ? LogIn : LoaderCircle" class="size-4 text-gray-300"
      :class="[{'animate-spin' : isLoading}]"
    />
    <button v-if="label" class="text-white text-xs leading-[100%]" :class="[
      { 'text-green-500!': styled === 'outlined' }
    ]">
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import {LoaderCircle, LogIn } from 'lucide';
import { MorphIcon } from "morphicons/vue";

interface ButtonProps {
  styled?: 'filled' | 'outlined';
  buttonClass?: string;
  label: string;
}

withDefaults(defineProps<ButtonProps>(), {
  styled: 'filled'
})

defineEmits(['click']);

const isLoading = ref(false);
</script>

<style scoped></style>