<template>
  <div class="header-locales">
    <NuxtLink :to="$switchLocalePath('uk-UA')" class="header-locales__item">
      <img src="/images/flags/uk.svg" alt="Українська" />
    </NuxtLink>
    <NuxtLink :to="$switchLocalePath('en')" class="header-locales__item">
      <img src="/images/flags/en.svg" alt="English" />
    </NuxtLink>
  </div>
</template>

<script setup></script>
