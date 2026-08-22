<script setup lang="ts">
import IconClock24 from '~~/public/icons/clock24.svg';

const clock = reactive({ hours: '00', minutes: '00', seconds: '00' });
const intervalRef = shallowRef<number>(null!);

function recuringClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clock.hours = hours;
  clock.minutes = minutes;
  clock.seconds = seconds;
}

onMounted(() => {
  recuringClock();
  intervalRef.value = window.setInterval(recuringClock, 1000);
});

onBeforeUnmount(() => {
  window.clearInterval(intervalRef.value);
});
</script>

<template>
  <div
    class="flex items-center gap-1 w-33 justify-center py-1.5 rounded-md bg-black/20 border border-white/5 select-none"
  >
    <IconClock24
      class="size-5! text-blue-500 stroke-1 mr-1"
      filled
    />

    <p class="text-sm text-gray-200 font-semibold leading-[100%] text-center">
      {{ clock.hours }}
    </p>

    <p class="text-gray-400 text-sm leading-[100%]">&#58;</p>

    <p class="text-sm text-gray-200 font-semibold leading-[100%] w-5 text-center">
      {{ clock.minutes }}
    </p>

    <span class="text-gray-400 flex text-sm leading-[100%]">&#58;</span>

    <p class="text-sm text-gray-200 font-semibold leading-[100%] w-5 text-center">
      {{ clock.seconds }}
    </p>
  </div>
</template>
