<template>
  <div class="container">
    <Head>
      <Title>{{ product?.title }}</Title>
      <Meta name="description" :content="product?.seo_descripiton" />
      <Meta name="keywords" :content="product?.seo_keywords" />
      <Meta name="og:title" :content="`${product?.title}`" />
      <Meta name="og:description" :content="product?.seo_descripiton" />
      <Meta name="og:image" :content="product?.image" />
    </Head>
    <div class="product-page" v-if="product">
      <div class="row product-page__header">
        <div class="col-12 col-lg-6 product-page__image">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="col-12 col-lg-6 product-page__info">
          <h2 class="product-page__name" v-html="product.name"></h2>
          <div class="product-page__excert" v-html="product.excert"></div>
          <div class="product-page__actions">
            <AppButton
              variant="black"
              appearence="filled"
              @click="openSubmitModal"
            >
              {{ $t("Замовити взірець") }}
            </AppButton>
          </div>
        </div>
      </div>

      <div class="product-page__content">
        <div class="product-page__tabs">
          <div class="product-page__tab">{{ $t("Опис") }}</div>
        </div>
        <div class="product-page__text" v-html="product.description" />
        <div
          class="product-page__video"
          v-if="product.video"
          v-html="product.video"
        ></div>
      </div>
    </div>

    <ProductSubmitModal />
  </div>
</template>

<script setup>
import Micromodal from "micromodal";

const route = useRoute();
const { product } = await useProductBySlug(String(route.params.id));

const openSubmitModal = () => Micromodal.show("submit-modal");
</script>
