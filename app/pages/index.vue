<template>
  <div class="main-page">
    <div class="main-page__header">
      <NuxtLink :to="$localePath('/main')" class="main-page__logo">
        <MainLogo />
      </NuxtLink>
    </div>

    <div class="main-page__departments">
      <div class="container">
        <DepartmentsList :departments="departments" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "outside",
});

const localePath = useLocalePath();

const departments = [
  { name: "Pharma", video: "/videos/pharm.mov", link: localePath("/pharm"), center: false },
  { name: "Food", video: "/videos/food.mp4", link: localePath("/food"), center: false },
  {
    name: "Cosm",
    video: "/videos/cosm.mp4",
    link: "https://indelcosm.com.ua/",
    center: true,
  },
];
</script>
