<template>
  <div class="category-card" :class="{ 'without-image': !Boolean(image) }">
    <div class="category-card__image-wrapper" v-if="Boolean(image)">
      <img :src="image" :alt="name" class="name-card__image" />
    </div>
    <h4 class="category-card__name">{{ name }}</h4>
  </div>
</template>

<script setup>
defineProps(["name", "image"]);
</script>
