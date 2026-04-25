<template>
  <div class="section-posts">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title" v-if="texts">
          {{ texts.fourth_section_title }}
        </h2>
      </div>

      <PostList :limit="2" :home="true" />

      <div class="section-actions">
        <NuxtLink :to="$localePath('/posts')" class="link-without-decoration">
          <AppButton variant="black" v-if="texts">{{
            texts.fourth_section_button_text
          }}</AppButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["texts"]);
</script>
