<template>
  <div class="category-page">
    <Head>
      <Title>{{ subcategory?.name }}</Title>
      <Meta name="og:title" :content="`${subcategory?.name}`" />
      <Meta name="og:image" :content="subcategory?.banner" />
    </Head>
    <div class="container">
      <AppPageBanner :title="subcategory?.name" :img="subcategory?.banner" />

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
const { subcategory, products } = await useSubcategoryBySlug(
  String(route.params.id)
);
</script>
