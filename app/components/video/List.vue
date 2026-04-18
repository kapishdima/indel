<template>
  <div :class="full ? 'video-list--full' : 'video-list'">
    <VideoCard
      v-for="video in videos"
      :key="video.id"
      :title="video.title"
      :video="video.video"
    />
  </div>
</template>

<script setup>
const props = defineProps(["full"]);
const { videos } = await useVideosList({
  limit: props.full ? undefined : 3,
});
</script>

<style lang="scss" scoped></style>
