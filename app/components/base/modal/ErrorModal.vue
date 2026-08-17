<script setup lang="ts">
interface ErrorModalProps {
  isOpen: boolean;
  statusCode: number;
  title: string;
  description?: string;
  btnLabel?: string;
}

withDefaults(defineProps<ErrorModalProps>(), {
  isOpen: false,
});

defineEmits(["close"]);
</script>

<template>
  <Modal :open="isOpen">
    <div
      class="bg-black min-w-[30dvw] px-6 pb-4 pt-6 rounded-sm border border-white/20"
    >
      <div class="flex items-center gap-2 border-b border-white/15 pb-3">
        <span
          class="text-white text-xs rounded-xs pl-1.5 pr-2.5 py-2 border border-red-700"
          ><span class="px-2 py-1 bg-red-600/40 rounded-xs mr-1 uppercase"
            >Status</span
          >
          <span v-if="statusCode" class="font-bold">{{
            statusCode
          }}</span></span
        >
      </div>

      <div class="mt-4">
        <p v-if="title" class="text-gray-300 font-bold">{{ title }}</p>
        <p v-if="description" class="text-gray-400 text-sm">
          {{ description }}
        </p>
      </div>

      <div class="bg-white/10 w-full flex gap-4 mt-4">
        <button
          @click.stop="$emit('close')"
          class="cursor-pointer py-2 bg-red-700 grow text-sm rounded-xs text-gray-200"
        >
          {{ btnLabel || "Dismiss" }}
        </button>
      </div>
    </div>
  </Modal>
</template>
