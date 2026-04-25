<template>
  <div class="category-page">
    <Head>
      <Title>{{ $t(sections[section]) }}</Title>
      <Meta name="og:title" :content="$t(sections[section])" />
      <Meta name="og:image" content="/images/banners/ingredients.jpeg" />
    </Head>
    <div class="container">
      <AppPageBanner
        :title="$t(sections[section])"
        img="/images/banners/ingredients.jpeg"
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
                ? `/${section}/${category.id}`
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
const route = useRoute();
const section = String(route.query.section ?? "");

const sections = {
  pharm: "Фармацевтичні інгредієнти",
  food: "Харчові інгредієнти",
};

const { categories } = await useCategoriesList({ section });
</script>
