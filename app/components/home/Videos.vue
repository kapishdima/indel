<template>
  <div class="section-posts">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title" v-if="texts">
          {{ texts.fifth_section_title }}
        </h2>
      </div>

      <VideoList />

      <div class="section-actions">
        <NuxtLink :to="$localePath('/videos')" class="link-without-decoration">
          <AppButton variant="black" v-if="texts">{{
            texts.fifth_section_button_text
          }}</AppButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["texts"]);
</script>
