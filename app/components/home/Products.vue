<template>
  <div class="section-products" v-if="products.length">
    <div class="container">
      <div class="section-products__header">
        <h3 class="section-title" v-if="texts">
          {{ texts.third_section_title }}
        </h3>
        <div class="slider-navigation">
          <div class="slider-prev" ref="prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M16.752,23.994,6.879,14.121a3,3,0,0,1,0-4.242L16.746.012,18.16,1.426,8.293,11.293a1,1,0,0,0,0,1.414l9.873,9.873Z"
                />
              </g>
            </svg>
          </div>
          <div class="slider-next" ref="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M7.412,24,6,22.588l9.881-9.881a1,1,0,0,0,0-1.414L6.017,1.431,7.431.017l9.862,9.862a3,3,0,0,1,0,4.242Z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :speed="800"
      class="products-slider"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :breakpoints="{
        1280: { slidesPerView: 4.1 },
        768: { slidesPerView: 3.1 },
      }"
    >
      <SwiperSlide v-for="product of products" :key="product.id">
        <ProductHomeCard
          :name="product.name"
          :image="product.image"
          :link="product.link"
        />
      </SwiperSlide>
    </Swiper>

    <div class="section-products__actions">
      <NuxtLink to="/products" class="link-without-decoration">
        <AppButton variant="black" v-if="texts">
          {{ texts.third_section_button_text }}
        </AppButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

defineProps(["texts"]);

const prev = ref(null);
const next = ref(null);
const modules = [Navigation];

const { products } = await useFeaturedProducts();
</script>
