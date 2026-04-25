<template>
  <div class="category-page">
    <Head>
      <Title>{{ $t("Харчові інгредієнти") }}</Title>
      <Meta name="og:title" :content="$t('Харчові інгредієнти')" />
      <Meta name="og:image" content="/images/banners/food_cover.jpg" />
    </Head>
    <div class="container">
      <AppPageBanner
        :title="$t('Харчові інгредієнти')"
        img="/images/banners/food_cover.jpg"
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
                ? `/food/${category.id}`
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
const { categories } = await useCategoriesList({ section: "food" });
</script>
