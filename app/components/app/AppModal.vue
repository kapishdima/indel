<template>
  <Teleport to="body">
    <div class="modal micromodal-slide" :id="id" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`${id}-title`"
        >
          <header class="modal__header">
            <h2 class="modal__title" :id="`${id}-title`">{{ title }}</h2>
            <button
              class="modal__close"
              aria-label="Close modal"
              data-micromodal-close
              v-if="hasCloseButton"
            ></button>
          </header>
          <main class="modal__content" :id="`${id}-content`">
            <slot />
          </main>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import Micromodal from "micromodal";

defineProps({
  id: { type: String },
  title: { type: String },
  hasCloseButton: { type: Boolean, required: false, default: true },
});

onMounted(() => {
  Micromodal.init();
});
</script>
