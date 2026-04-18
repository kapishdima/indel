<template>
  <AppModal id="success-modal" :hasCloseButton="false">
    <div class="success-modal">
      <div class="success-animation">
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <h2 class="success-modal__title">
        Application successfully sent. Our manager will contact you soon
      </h2>
    </div>
  </AppModal>
</template>

<script setup></script>
