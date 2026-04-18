<template>
  <div
    class="page-banner"
    :class="{ 'with-image': img && !img.includes('undefined') }"
  >
    <img
      v-if="Boolean(img && !img.includes('undefined'))"
      :src="img"
      class="page-banner__img"
    />
    <h3 class="page-banner__title">{{ title }}</h3>
    <h4 class="page-banner__subtitle" v-if="Boolean(subtitle)">
      {{ subtitle }}
    </h4>
  </div>
</template>

<script setup>
defineProps(["title", "img", "subtitle"]);
</script>
