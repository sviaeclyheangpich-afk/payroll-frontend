<template>
  <Input
    aria-label="Password"
    v-model="model"
    :name="name"
    :type="revealPassword ? 'text' : 'password'"
    :variant="variant"
    :disabled="disabled"
    :placeholder="placeholder"
    :max-length="maxLength"
    :required="required"
    :class="inputClass"
  >
    <template #leadingIcon>
      <slot />
    </template>
    <template #trailingIcon
      ><button
        class="cursor-pointer absolute right-2"
        @click.stop.prevent="handleToggleRevealPassword"
      >
        <MorphIcon
          :icon="!revealPassword ? Eye : EyeOff"
          class="size-4! text-gray-600"
        /></button
    ></template>
  </Input>
</template>

<script setup lang="ts">
import { Eye, EyeOff } from 'lucide';
import { MorphIcon } from 'morphicons/vue';

type InputVariant = 'Success' | 'Destructive' | 'Info' | 'Warning' | 'Normal';

interface InputProps {
  name?: string;
  variant?: InputVariant;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  disabled?: boolean;
  inputClass?: string;
  leadingIcon?: boolean;
}
withDefaults(defineProps<InputProps>(), {
  variant: 'Normal',
  leadingIcon: false
});

const model = defineModel();
const revealPassword = ref(false);

const handleToggleRevealPassword = () => {
  revealPassword.value = !revealPassword.value;
};
</script>
