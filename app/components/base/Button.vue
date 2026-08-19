<template>
  <button
    :type="type"
    role="button"
    class="group/btn relative flex cursor-pointer justify-center gap-2.5 rounded-sm px-4 py-2.5 duration-300 ease-out"
    :class="[btnClass, baseClasses.other]"
    @click.stop="$emit('click')"
  >
    <slot name="leadingIcon" />
    <span
      v-if="label && !iconOnly"
      class="text-xs duration-300 ease-out"
      :class="[textClass, baseClasses.text]"
    >
      {{ label }}
    </span>
    <slot name="trailingIcon" />
  </button>
</template>

<script setup lang="ts">
type ButtonType = 'button' | 'reset' | 'submit';
type ButtonVaraint = 'Success' | 'Info' | 'Error' | 'Warning';
type ButtonStyle = 'Filled' | 'Outline';

interface ButtonProps {
  type?: ButtonType;
  label: string;
  styled?: ButtonStyle;
  variant?: ButtonVaraint;
  btnClass?: string;
  textClass?: string;
  iconOnly?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  styled: 'Filled',
  iconOnly: false
});

const emit = defineEmits(['click']);

const baseClasses = computed(() => {
  const isFilledStyle = props?.styled === 'Filled';

  switch (props.variant) {
    case 'Error':
      return isFilledStyle
        ? { text: 'text-white', other: 'bg-red-600 hover:bg-red-700' }
        : {
            text: 'text-white group-hover/btn:text-red-500',
            other: 'bg-transparent border border-red-600'
          };

    case 'Info':
      return isFilledStyle
        ? { text: 'text-white', other: 'bg-blue-600 hover:bg-blue-700' }
        : {
            text: 'text-white group-hover/btn:text-blue-500',
            other: 'bg-transparent! border border-blue-600'
          };

    case 'Warning':
      return isFilledStyle
        ? { text: 'text-white', other: 'bg-amber-600 hover:bg-amber-700' }
        : {
            text: 'text-white group-hover/btn:text-amber-500',
            other: 'bg-transparent! border border-amber-600'
          };

    case 'Success':
    default:
      return isFilledStyle
        ? { text: 'text-white', other: 'bg-green-600 hover:bg-green-700' }
        : {
            text: 'text-white group-hover/btn:text-green-600',
            other: 'bg-transparent! border border-green-600'
          };
  }
});
</script>
