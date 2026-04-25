<template>
  <div class="container">
    <div class="about-banner row g-0">
      <div class="col-lg-6">
        <img :src="images?.about" alt="" class="about-banner__image" />
      </div>
      <div class="col-lg-6 about-banner__content">
        <div
          v-if="texts"
          class="about-banner__subtitle"
          v-html="texts.first_section_subtitle"
        ></div>
        <div class="about-banner__actions">
          <NuxtLink :to="$localePath('/company')" class="link-without-decoration">
            <AppButton variant="black" v-if="texts">{{
              texts.first_section_button_text
            }}</AppButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["texts"]);
const { images } = await useHomeImages();
</script>
