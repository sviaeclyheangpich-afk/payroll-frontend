<script setup lang="ts">
import { CircleAlert } from 'lucide';
import { MorphIcon } from 'morphicons/vue';

defineProps<{ errorMessage?: string }>();
</script>

<template>
  <Transition
    name="slide-up"
    mode="out-in"
  >
    <div
      v-if="Boolean(errorMessage)"
      class="flex items-center gap-0.5 px-1 mt-1 relative"
    >
      <span class="p-1 rounded-full bg-white/2 border border-white/5">
        <MorphIcon
          :icon="CircleAlert"
          class="size-3.5 text-red-600"
        />
      </span>
      <p class="text-xs text-red-600 px-1 py-1">
        {{ errorMessage }}
      </p>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.15s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
