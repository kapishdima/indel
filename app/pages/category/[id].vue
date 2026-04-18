<template>
  <div class="category-page">
    <Head>
      <Title>{{ category?.name }}</Title>
      <Meta name="og:title" :content="`${category?.name}`" />
      <Meta name="og:image" :content="category?.banner" />
    </Head>
    <div class="container">
      <AppPageBanner :title="category?.name" :img="category?.banner" />

      <div class="row products-list gy-5">
        <div
          class="col-12 col-lg-3"
          v-for="product of products"
          :key="product.id"
        >
          <ProductCard
            :id="product.id"
            :name="product.name"
            :category="product.category"
            :image="product.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { category, products } = await useCategoryBySlug(
  String(route.params.id),
  { withSubcategories: false }
);
</script>
