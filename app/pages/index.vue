<template>
  <div
    class="relative h-screen w-screen flex items-center justify-center bg-radial-[at_0%_20%] from-black to-green-900/90 from-55% to-95%"
  >
    <div
      class="flex flex-col space-y-3 flex-1 items-center justify-center h-fit"
    >
      <div
        class="size-full flex flex-col items-center justify-center space-y-3 bg-white/5 w-fit rounded-sm py-10 px-16 border border-white/10"
      >
        <div class="w-full flex flex-col justify-center items-center">
          <h3 class="text-2xl font-semibold text-gray-50 space-x-1.5 uppercase">
            <span class="text-gray-300 font-light">HR</span>
            <span class="text-shadow-lg">Payroll</span>
            <span class="text-green-600 text-shadow-lg">System</span>
          </h3>
          <p class="text-sm text-gray-400 font-light text-center">
            fast modern and relaiable
          </p>
        </div>

        <div class="w-5/6 h-0.5 bg-gray-400/10" />
        <!-- <Alert /> -->

        <div class="w-full grid grid-cols-2 gap-4 my-2">
          <div class="flex items-center relative">
            <div class="py-1 px-1.5 rounded-xs bg-green-600/25 absolute left-1">
              <IconUser class="size-5 text-gray-200" filled />
            </div>
            <input
              aria-label="Email address"
              autoComplete="additional-name"
              class="w-full focus:border-green-500 focus:outline-0 focus:ring-0 border text-sm text-gray-200 border-gray-50/10 rounded-xs bg-white/2 py-1.5 pl-10 pr-2.5 placeholder:text-[13px] placeholder:text-gray-300"
              type="email"
              placeholder="Enter email ..."
              maxLength="{80}"
              required
            />
          </div>

          <div class="flex items-center relative">
            <div class="py-1 px-1.5 rounded-xs bg-green-600/25 absolute left-1">
              <IconKey class="size-5 text-gray-200" filled />
            </div>
            <input
              aria-label="Password"
              autoComplete="additional-name"
              class="w-full focus:border-green-500 focus:outline-0 focus:ring-0 border text-sm text-gray-200 border-gray-50/10 rounded-xs bg-white/2 py-1.5 pl-10 pr-2.5 placeholder:text-[13px] placeholder:text-gray-300"
              type="password"
              placeholder="Password ..."
              maxLength="{50}"
              required
            />
          </div>
        </div>

        <div
          class="flex justify-center space-x-2.5 mt-4 w-1/3 px-4 py-2.5 bg-green-600 rounded-xs"
        >
          <button class="cursor-pointer text-white text-xs leading-[100%]">
            Login Now
          </button>
        </div>

        <!-- <div
              class="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-full mt-4"
            >
              <div class="relative size-4 animate-spin">
                <div class="grid grid-cols-1 grid-rows-1 w-full h-full">
                  <div
                    class="col-start-1 row-start-1 rounded-full border-4 border-gray-200 dark:border-gray-700"
                  ></div>
                  <div
                    class="col-start-1 row-start-1 rounded-full border-4 border-green-500 mask-conic-from-80% mask-conic-to-80%"
                  ></div>
                </div>
              </div>
              <span class="text-xs animate-pulse">Authenticating ...</span>
            </div> -->
      </div>

      <div>
        <p class="text-xs text-gray-500">SVI AEC All right reserved © 2026</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconUser from "~/assets/icons/user-round.svg";
import IconKey from "~/assets/icons/key.svg";
</script>
