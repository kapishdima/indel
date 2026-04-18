<template>
  <div class="category-page">
    <div class="container">
      <AppPageBanner title="Всі продукти" />
      <div class="row products-list gy-5">
        <div class="col-12 col-lg-3" v-for="product of products" :key="product.id">
          <ProductCard
            :id="product.id"
            :name="product.name"
            :category="product.category"
            :image="product.image"
          />
        </div>
      </div>
      <AppPagination
        :total="pagination.total"
        :pageSize="pagination.pageSize"
        v-model="page"
      />
    </div>
  </div>
</template>

<script setup>
const page = ref(1);
const { products, pagination } = await useProductsList({ page });
</script>
