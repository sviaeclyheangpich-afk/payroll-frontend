<script setup lang="ts">
interface ErrorModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  btnCancelLabel?: string;
  btnConfirmLabel?: string;
}

withDefaults(defineProps<ErrorModalProps>(), {
  isOpen: false,
});

defineEmits(["close", "confirm"]);
</script>

<template>
  <Modal :open="isOpen">
    <div
      class="bg-black min-w-[30dvw] max-w-sm px-6 pb-4 pt-8 rounded-sm border border-white/20"
    >
      <div class="space-y-0.5">
        <p
          v-if="title"
          class="text-gray-300 font-bold uppercase text-lg text-center"
        >
          {{ title }}
        </p>
        <p v-if="description" class="text-gray-500 text-sm text-center">
          {{ description }}
        </p>
      </div>

      <div class="w-full flex gap-4 mt-8">
        <button
          @click.stop="$emit('close')"
          class="cursor-pointer py-2 border grow border-green-700 text-sm rounded-xs text-green-600"
        >
          {{ btnCancelLabel || "Cancel" }}
        </button>

        <button
          @click.stop="$emit('confirm')"
          class="cursor-pointer py-2 bg-green-700 grow text-sm rounded-xs text-gray-200"
        >
          {{ btnConfirmLabel || "Confirm" }}
        </button>
      </div>
    </div>
  </Modal>
</template>
