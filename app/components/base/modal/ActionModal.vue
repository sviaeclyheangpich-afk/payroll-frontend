<script setup lang="ts">
interface ErrorModalProps {
  isOpen: boolean
  title: string
  description?: string
  btnCancelLabel?: string
  btnConfirmLabel?: string
}

withDefaults(defineProps<ErrorModalProps>(), { isOpen: false })
defineEmits(['close', 'confirm'])
</script>

<template>
  <Modal :open="isOpen">
    <div class="bg-black min-w-125 max-w-sm px-8 pb-6 pt-8 rounded-sm border border-white/20">
      <div class="space-y-0.5">
        <p v-if="title" class="text-gray-300 font-bold uppercase text-lg text-center">
          {{ title }}
        </p>
        <p v-if="description" class="text-gray-500 text-sm text-center">
          {{ description }}
        </p>
      </div>

      <div class="w-full flex gap-4 mt-8">
        <button
          class="cursor-pointer py-2 border grow border-green-600 text-sm rounded-sm text-gray-300"
          :class="['hover:bg-green-600/10 duration-150 ease-out hover:text-green-600']"
          @click.stop="$emit('close')"
        >
          {{ btnCancelLabel || 'Cancel' }}
        </button>

        <button
          class="cursor-pointer py-2 bg-green-600 grow text-sm rounded-sm text-gray-200"
          :class="['hover:bg-green-700 duration-150 ease-out']"
          @click.stop="$emit('confirm')"
        >
          {{ btnConfirmLabel || 'Confirm' }}
        </button>
      </div>
    </div>
  </Modal>
</template>
