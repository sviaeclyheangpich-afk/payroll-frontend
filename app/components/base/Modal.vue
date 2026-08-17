<script setup lang="ts">
defineProps < { open: boolean; } > ();
</script>

<template>
    <Teleport to="body">
        <Transition name="fade" mode="out-in">
            <div v-if="open" class="animate-bound-out bg-black/50 fixed inset-0 z-999 flex justify-center items-center">
                <slot />
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
