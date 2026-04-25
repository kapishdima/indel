<template>
  <div class="category-page">
    <Head>
      <Title>{{ $t("Фармацевтичні інгредієнти") }}</Title>
      <Meta name="og:title" :content="$t('Фармацевтичні інгредієнти')" />
      <Meta name="og:image" content="/images/banners/pharm_cover.png" />
    </Head>
    <div class="container">
      <AppPageBanner
        :title="$t('Фармацевтичні інгредієнти')"
        img="/images/banners/pharm_cover.jpg"
      />

      <div class="row categories-list gy-5">
        <div
          class="col-12 col-lg-4"
          v-for="category of categories"
          :key="category.id"
        >
          <NuxtLink
            class="category-card__link"
            :to="$localePath(
              category.children && category.children.length
                ? `/pharm/${category.id}`
                : `/category/${category.id}`
            )"
          >
            <CategoryCard :name="category.name" :image="category.image" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { categories } = await useCategoriesList({ section: "pharm" });
</script>
