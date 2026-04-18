<template>
  <div class="video-card">
    <div class="video-card__iframe" v-html="video"></div>
    <div class="video-card__title" v-html="title"></div>
  </div>
</template>

<script setup>
defineProps(["title", "video"]);
</script>
