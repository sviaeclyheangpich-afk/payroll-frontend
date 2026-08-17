<template>
    <input :disabled="disabled" autoComplete="additional-name" :aria-label="ariaLabel"
        class="w-full focus:border-green-500 focus:outline-0 focus:ring-0 border text-sm text-gray-200 border-gray-50/10 rounded-xs bg-white/2 py-1.5 pl-10 pr-2.5 placeholder:text-[13px] placeholder:text-gray-300"
        :type="type" :placeholder="placeholder" :maxLength="maxLength" :required="required" />
</template>

<script setup lang="ts">
interface InputProps {
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
    ariaLabel?: string;
    disabled?: boolean;
}
defineProps<InputProps>();
</script>