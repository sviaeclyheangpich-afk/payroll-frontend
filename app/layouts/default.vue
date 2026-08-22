<script setup lang="ts">
import { SystemDigitalClock } from '#components';
import IconSearch from '~~/public/icons/search.svg';
import IconBell from '~~/public/icons/bell.svg';
import IconMoon from '~~/public/icons/moon.svg';
import IconCalendarWeek from '~~/public/icons/calendar-week.svg';
import IconChinaFlag from '~~/public/icons/china-flag.svg';
</script>

<template>
  <div
    class="relative w-screen h-screen bg-radial-[at_150%_60%] from-blue-950 to-black overflow-hidden"
  >
    <div
      class="w-full h-14 flex items-center justify-between bg-secondary-02 px-4 border-b border-white/2"
    >
      <!-- Login Section -->
      <div class="flex items-end gap-1.5 basis-62">
        <p
          class="text-transparent bg-clip-text bg-linear-90 via-blue-900 from-30% from-blue-500 to-gray-700 text-[36px] leading-[100%] font-bold"
        >
          HR
        </p>
        <div>
          <h2 class="text-white text-base leading-tight">
            <span class="text-gray-300 font-bold">PAYROLL</span> SYSTEM
          </h2>
          <p class="text-[11px] text-gray-400/80 font-light leading-tight">
            AEC Public Company Limited
          </p>
        </div>
      </div>

      <!-- Toolbar section -->
      <div class="flex items-center justify-between grow">
        <SystemDigitalClock />

        <div class="relative drop-shadow-2xl">
          <IconSearch
            class="size-4! text-white absolute top-1/2 left-3 -translate-y-1/2"
            filled
          />

          <input
            class="bg-black w-96 h-9 rounded-lg outline-0 border border-white/15 ring-0 pl-9 pr-2.5 text-gray-200 text-sm font-normal placeholder:text-[13px] placeholder:text-gray-500"
            placeholder="Search Menu keyword ..."
          />

          <p
            class="absolute top-1/2 -translate-y-1/2 right-1.5 text-[11px] text-gray-200 px-2 rounded-md py-1 bg-white/10"
          >
            CTR + K
          </p>
        </div>

        <div class="flex items-center gap-3.5">
          <div class="flex items-center border-r border-r-gray-600 pr-3.5">
            <NuxtLink
              href="#"
              class="text-xs text-gray-300 font-semibold"
            >
              VER. <span class="font-light text-gray-400">1.0.0</span>
            </NuxtLink>
          </div>

          <div class="flex items-center gap-2.5 border-r border-r-gray-600 pr-3.5">
            <div class="size-2.5 rounded-full bg-green-600" />
            <span class="text-xs text-gray-300">Officer</span>
          </div>

          <IconBell
            class="size-5! text-gray-200"
            filled
          />

          <IconMoon
            class="size-5! text-gray-200"
            filled
          />

          <IconCalendarWeek
            class="size-5! text-gray-200"
            filled
          />

          <button
            class="group/logout hover:border-blue-900 cursor-pointer px-2 py-1 rounded-sm leading-tight border border-white/10 flex items-center gap-1.5"
          >
            <IconChinaFlag
              class="w-5! h-4!"
              filled
            />
            <span
              class="text-xs text-gray-100 group-hover/logout:text-gray-400 leading-[100%] mb-0.5"
            >
              KH</span
            >
          </button>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
