<script setup lang="ts">
import IconUser from '~/assets/icons/user-round.svg';
import IconKey from '~/assets/icons/key.svg';

import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

import { MorphIcon } from 'morphicons/vue';
import { LogIn, MessageCircleWarning } from 'lucide';

const state = reactive({ isloading: false, isError: false, msg: '' });
const infoModal = reactive({ isOpen: false, title: '', subtitle: '' });

const database = {
  email: 'lyheangdev@gmail.com',
  password: '1234@svi'
};

const loginValidationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .min(1, { error: 'Please input email address.' })
      .pipe(z.email({ error: 'Please input valid email address.' })),
    password: z
      .string()
      .min(1, { error: 'Please input password.' })
      .max(8, { error: 'Allow maximum 8 characters.' })
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema: loginValidationSchema,
  initialValues: {
    email: '',
    password: ''
  }
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const onSubmit = handleSubmit((values) => {
  state.isloading = true;
  state.isError = false;
  state.msg = '';

  setTimeout(async () => {
    if (values.email != database.email || values.password != database?.password) {
      state.isError = true;
      state.msg = 'Invalid user login';
      state.isloading = false;
      return;
    }
    state.isloading = false;
    return await navigateTo('/dashboard');
  }, 2000);
});

const openModal = () => {
  infoModal.isOpen = true;
  infoModal.title = 'Contact For System Support';
  infoModal.subtitle = 'lyheang.pich@svi-aec.com';
};

const closeModal = () => {
  infoModal.isOpen = false;
};
</script>

<template>
  <InfoModal
    variant="Info"
    :is-open="infoModal.isOpen"
    :title="infoModal.title"
    :description="infoModal.subtitle"
    btn-label="Dismiss"
    @click="closeModal"
  />

  <div
    class="relative h-screen w-screen flex items-center justify-center bg-radial-[at_0%_20%] from-black to-green-900/90 from-55% to-95%"
  >
    <!-- Background pattern -->
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

    <!-- Login Form -->
    <form
      class="z-20 absolute w-175 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 flex-1 items-center justify-center h-fit rounded-lg py-10 px-16 border border-white/15 bg-black/45 backdrop-blur-md drop-shadow-2xl"
      @submit.prevent="onSubmit"
    >
      <div class="w-full flex flex-col justify-center gap-0.5 items-center">
        <h3 class="text-2xl font-semibold text-gray-50 flex items-center gap-1.5 uppercase">
          <span class="text-gray-300 font-light">HR</span>
          <span class="text-shadow-lg">Payroll</span>
          <span class="text-green-600 text-shadow-lg">System</span>
        </h3>
        <p class="text-sm text-gray-400 font-light text-center">
          Fast, flexiblity, modern and relaiable
        </p>
      </div>

      <div class="w-5/6 h-0.5 bg-gray-400/10" />

      <Transition name="slide-y">
        <Alert
          v-if="state.isError"
          type="error"
          :message="state?.msg || ''"
        />
      </Transition>

      <!-- Form -->
      <div class="w-full grid grid-cols-2 gap-4">
        <div>
          <Input
            v-model="email"
            aria-label="Email address"
            name="email"
            type="email"
            placeholder="Enter Email ..."
            :max-length="60"
          >
            <template #leadingIcon>
              <span class="py-1 px-1.5 rounded-sm bg-green-600/30">
                <IconUser
                  class="size-5 text-gray-200"
                  filled
                />
              </span>
            </template>
          </Input>

          <ErrorMessage :error-message="errors?.email" />
        </div>

        <div>
          <InputPassword
            name="password"
            v-model="password"
            placeholder="Enter Password ..."
            :max-length="80"
          >
            <span class="py-1 px-1.5 rounded-sm bg-green-600/30">
              <IconKey
                class="size-5 text-gray-200"
                filled
              />
            </span>
          </InputPassword>
          <ErrorMessage :error-message="errors?.password" />
        </div>
      </div>

      <div
        role="button"
        class="group/support py-0.75 px-1.5 rounded-full bg-white/5 absolute bottom-2 right-2 flex items-center gap-1 border border-white/5 cursor-pointer"
        @click.stop="openModal"
      >
        <MorphIcon
          :icon="MessageCircleWarning"
          class="size-3.5 text-gray-500 group-hover/support:text-gray-300 duration-300"
        />
        <span class="text-[10px] text-gray-400 group-hover/support:text-gray-300 duration-300"
          >Support?</span
        >
      </div>

      <Transition
        name="fade"
        mode="out-in"
      >
        <Button
          v-if="!state.isloading"
          type="submit"
          class="w-1/3 mt-4"
          label="Login Now"
          styled="Filled"
          variant="Success"
        >
          <template #leadingIcon>
            <MorphIcon
              :icon="LogIn"
              class="size-4 text-gray-300"
            />
          </template>
        </Button>
        <div
          v-else
          class="flex items-center gap-2 px-4 py-2 bg-white/5 border-2 border-green-600/80 rounded-full mt-4"
        >
          <Loader variant="Success" />
          <span class="text-xs animate-pulse text-gray-200">Authenticating ...</span>
        </div>
      </Transition>
      <p class="text-xs text-gray-400 absolute top-full mt-4">SVI AEC All right reserved © 2026</p>
    </form>
    <div
      class="group/support px-2 w-32 py-1.5 rounded-md absolute bottom-10 right-20 flex items-center justify-center gap-1 bg-linear-270 from-transparent via-white/15 to-transparent"
      @click.stop="openModal"
    >
      <span class="text-xs text-gray-400 group-hover/support:text-gray-300 duration-300"
        ><span class="font-light text-gray-100">Version</span> 1.0.0</span
      >
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-y-enter-active {
  transition: transform 700ms ease;
}

.slide-y-leave-active {
  transition: transform 200ms ease;
}

.slide-y-enter-from,
.slide-y-leave-to {
  transform: translateX(-15px);
}
</style>
