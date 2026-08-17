<template>
  <ActionModal
    :is-open="openModal"
    title="Summition confirmation"
    description="Are you sure to summit, this operation will not be undo ?"
    @close="toggleModal"
  />

  <div
    class="relative h-screen w-screen flex items-center justify-center bg-radial-[at_0%_20%] from-black to-green-900/90 from-55% to-95%"
  >
    <div
      class="absolute inset-0 z-0"
      :style="[
        {
          backgroundColor: '#020617',
          backgroundImage: `linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,85,105,0.2) 1px, transparent 1px), radial-gradient(circle at 50% 50%, rgba(139,92,246,0.30) 0%, transparent 50%)`,
          backgroundSize: '32px 32px, 32px 32px, 100% 100%'
        }
      ]"
    ></div>

    <div
      class="absolute z-20 w-175 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-3 flex-1 items-center justify-center h-fit"
    >
      <div
        class="flex w-full flex-col items-center justify-center space-y-3 bg-black/10 rounded-sm py-10 px-16 border border-white/15 backdrop-blur-md drop-shadow-2xl"
      >
        <div class="w-full flex flex-col justify-center items-center">
          <h3 class="text-2xl font-semibold text-gray-50 space-x-1.5 uppercase">
            <span class="text-gray-300 font-light">HR</span>
            <span class="text-shadow-lg">Payroll</span>
            <span class="text-green-600 text-shadow-lg">System</span>
          </h3>
          <p class="text-sm text-gray-400 font-light text-center">
            Fast, flexiblity, modern and relaiable
          </p>
        </div>

        <div class="w-5/6 h-0.5 bg-gray-400/10" />
        <!-- <Alert type="error" message="Your login attemp get successfully."/> -->

        <div class="w-full grid grid-cols-2 gap-4 my-2">
          <div class="flex items-center relative">
            <div class="py-1 px-1.5 rounded-xs bg-green-600/25 absolute left-1">
              <IconUser class="size-5 text-gray-200" filled />
            </div>
            <Input
              aria-label="Email address"
              type="email"
              placeholder="Enter Email ..."
              :max-length="80"
              required
            />
          </div>

          <div class="flex items-center relative">
            <div class="py-1 px-1.5 rounded-xs bg-green-600/25 absolute left-1">
              <IconKey class="size-5 text-gray-200" filled />
            </div>
            <Input
              aria-label="Password"
              :type="revealPassword ? 'text' : 'password'"
              placeholder="Enter Password ..."
              :max-length="80"
              required
            />
            <div
              role="button"
              class="cursor-pointer absolute right-2"
              @click.stop="revealPassword = !revealPassword"
            >
              <MorphIcon :icon="!revealPassword ? Eye : EyeOff" class="size-4 text-gray-500" />
            </div>
          </div>
        </div>

        <Button class="w-1/3 mt-4" label="Login Now" styled="filled" @click="handleLogin" />

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
                                                                                                                              <span class="text-xs animate-pulse text-gray-200">Authenticating ...</span>
                                                                                                                            </div> -->
      </div>

      <div>
        <p class="text-xs text-gray-500">SVI AEC All right reserved © 2026</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconUser from '~/assets/icons/user-round.svg'
import IconKey from '~/assets/icons/key.svg'

import { MorphIcon } from 'morphicons/vue'
import { Eye, EyeOff } from 'lucide'

const revealPassword = ref(false)

const openModal = ref(false)

const toggleModal = () => {
  openModal.value = !openModal.value
}

const handleLogin = async () => {
  setTimeout(() => {
    toggleModal()
  }, 3000)
}
</script>
