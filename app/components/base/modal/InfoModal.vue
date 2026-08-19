<script setup lang="ts">
type ActionModalVariant = 'Success' | 'Error' | 'Warning' | 'Info';

interface ErrorModalProps {
  isOpen: boolean;
  variant?: ActionModalVariant;
  title: string;
  description?: string;
  btnLabel?: string;
}

withDefaults(defineProps<ErrorModalProps>(), { isOpen: false, variant: 'Success' });
defineEmits(['click']);
</script>

<template>
  <Modal :open="isOpen">
    <div class="bg-black min-w-125 max-w-sm px-8 pb-6 pt-8 rounded-lg border border-white/10">
      <div class="space-y-0.5">
        <p
          v-if="title"
          class="text-gray-300 font-bold uppercase text-lg text-center"
        >
          {{ title }}
        </p>
        <p
          v-if="description"
          class="text-gray-500 text-sm text-center"
        >
          {{ description }}
        </p>
      </div>

      <div class="w-full flex gap-4 mt-4">
        <Button
          :variant="variant"
          styled="Filled"
          text-class="text-sm!"
          btn-class="rounded-sm! grow"
          :label="btnLabel || 'Cancel'"
          @click="$emit('click')"
        />
      </div>
    </div>
  </Modal>
</template>
