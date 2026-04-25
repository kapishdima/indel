<template>
  <div class="category-page" v-if="info">
    <Head>
      <Title>{{ $t("Інгредієнти") }}</Title>
      <Meta name="og:title" :content="$t('Інгредієнти')" />
      <Meta name="og:image" :content="info.images.banner" />
    </Head>
    <div class="container">
      <AppPageBanner :title="$t('Інгредієнти')" :img="info.images.banner" />

      <div class="row categories-list gy-5">
        <div class="col-12 col-lg-4">
          <NuxtLink class="category-card__link" :to="$localePath('/pharm')">
            <CategoryCard :name="info.pharmTitle" :image="info.images.pharm" />
          </NuxtLink>
        </div>
        <div class="col-12 col-lg-4">
          <NuxtLink class="category-card__link" :to="$localePath('/food')">
            <CategoryCard :name="info.foodTitle" :image="info.images.food" />
          </NuxtLink>
        </div>
        <div class="col-12 col-lg-4">
          <NuxtLink class="category-card__link" to="https://indelcosm.com.ua/">
            <CategoryCard :name="info.cosmTitle" :image="info.images.cosm" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { info } = await useIngredientsInfo();
</script>
