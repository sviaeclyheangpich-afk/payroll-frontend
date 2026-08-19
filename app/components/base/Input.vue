<template>
  <div
    class="relative flex items-center gap-2.5 grow bg-white/4 p-1.5 rounded-sm outline focus-within:outline-2"
    :class="[
      inputClass,
      {
        'focus-within:outline-green-600 outline-gray-50/10': variant === 'Normal',
        'focus-within:outline-green-700 outline-green-600': variant === 'Success',
        'focus-within:outline-blue-700 outline-blue-600': variant === 'Info',
        'focus-within:outline-red-700 outline-red-600': variant === 'Destructive',
        'focus-within:outline-amber-700 outline-amber-600': variant === 'Warning'
      }
    ]"
  >
    <slot name="leadingIcon" />
    <input
      v-model="model"
      :name="name"
      :disabled="disabled"
      :aria-label="ariaLabel"
      :type="type"
      :placeholder="placeholder"
      :maxLength="maxLength"
      :required="required"
      class="border-0 border-none bg-transparent! bg-none! grow text-sm font-normal text-gray-200 placeholder:text-[13px] placeholder:text-gray-300 outline-0 right-0"
    />
    <slot name="trailingIcon" />
  </div>
</template>

<script setup lang="ts">
type InputVariant = 'Success' | 'Destructive' | 'Info' | 'Warning' | 'Normal';

interface InputProps {
  variant?: InputVariant;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  ariaLabel?: string;
  disabled?: boolean;
  inputClass?: string;
  name?: string;
}

withDefaults(defineProps<InputProps>(), {
  variant: 'Normal'
});

const model = defineModel();
</script>
