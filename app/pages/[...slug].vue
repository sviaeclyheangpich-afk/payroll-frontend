<script setup lang="ts">
import IconHome from '~~/public/icons/home.svg';

definePageMeta({
  name: 'Not found page',
  pageTransition: true,
  layout: 'auth'
});

const router = useRouter();
</script>

<template>
  <div class="relative w-screen h-screen bg-black">
    <div
      class="absolute inset-0 z-0 flex flex-col gap-4 justify-center items-center"
      :style="[
        {
          backgroundColor: '#020617',
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 50%)`
        }
      ]"
    >
      <div
        class="flex flex-col gap-4 justify-center items-center bg-primary/50 backdrop-blur-2xl px-16 py-8 rounded-xl border border-white/10"
      >
        <div class="flex flex-col items-center">
          <h2 class="text-2xl md:text-3xl text-gray-200 capitalize font-bold">Page Unavailable</h2>
          <p class="text-gray-400">Sorry, your request resouce is not available!</p>
        </div>
        <Button
          variant="Success"
          styled="Filled"
          label="Go to homepage"
          class="gap-1.5! items-center!"
          @click="router.back"
        >
          <template #leadingIcon>
            <IconHome
              class="size-4! text-gray-200"
              filled
            />
          </template>
        </Button>
      </div>
      <p class="text-xs text-gray-400">SVI AEC All right reserved © 2026</p>
    </div>
  </div>
</template>
