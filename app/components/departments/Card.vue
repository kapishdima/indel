<template>
  <a :href="link" target="_blank" class="department-card">
    <div class="department-card__image-wrapper">
      <video
        :src="video"
        :class="`${center ? 'center' : ''}`"
        ref="videoRef"
        muted
        autoplay
        loop
        playsinline
      ></video>
      <h4 class="department-card__title">{{ name }}</h4>
      <NuxtLink class="department-card__button">
        <span>Детальніше</span>
      </NuxtLink>
    </div>
  </a>
</template>

<script setup>
defineProps(["name", "video", "link", "center"]);

const videoRef = ref(null);

onMounted(() => {
  videoRef.value?.play();
});
</script>
