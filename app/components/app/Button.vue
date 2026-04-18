<template>
  <button
    class="button"
    :class="`button--${variant} button--${appearence}`"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps(["variant", "appearence"]);
const emit = defineEmits(["click"]);
</script>
