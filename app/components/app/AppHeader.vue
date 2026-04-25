<template>
  <div class="app-header-wrapper">
    <header class="header container">
      <div class="row align-items-center">
        <div class="col-3 d-flex d-lg-none align-items-center">
          <div class="header-mobile__btn" @click="open">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
        <div class="col-6 col-lg-2">
          <NuxtLink @click="close" :to="$localePath('/main')">
            <img src="/images/logo.svg" alt="" class="header-logo" />
          </NuxtLink>
        </div>

        <div class="col-3 d-flex d-lg-none"></div>
        <div class="d-none d-lg-flex col-lg-7 justify-content-end header-menu">
          <AppMenu />
        </div>
        <div class="col-lg-3 d-lg-flex d-none align-items-center">
          <SearchProducts />
          <AppLocale />
        </div>
      </div>
    </header>

    <AppMobileMenu @close="close" :opened="mobileMenuOpened" />
  </div>
</template>

<script setup>
const mobileMenuOpened = ref(false);

const open = () => {
  mobileMenuOpened.value = true;
};
const close = () => {
  mobileMenuOpened.value = false;
};
</script>
