<template>
  <div class="section-portfolio container">
    <div class="section-header">
      <h3 class="section-title" v-if="texts">
        {{ texts.second_section_title }}
      </h3>
      <h4 class="section-subtitle" v-if="texts">
        {{ texts.second_section_subtitle }}
      </h4>
    </div>

    <div class="row g-2 portfolio-list">
      <div class="col-lg-6 portfolio-card">
        <NuxtLink :to="$localePath('/ingredients')">
          <div class="portfolio-card__image-wrapper">
            <img
              src="/images/banners/portfolio/portfolio-1.jpg"
              :alt="$t('Інгредієнти')"
              class="portfolio-card__image"
            />
          </div>

          <div class="portfolio-card__content">
            <h3 class="portfolio-card__title">{{ $t("Інгредієнти") }}</h3>
            <h4 class="portfolio-card__subtitle">
              {{ $t("Категорії") }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <path
                  d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"
                />
              </svg>
            </h4>
          </div>
        </NuxtLink>
      </div>
      <div class="col-lg-6 portfolio-card">
        <NuxtLink :to="$localePath('/applications')">
          <div class="portfolio-card__image-wrapper">
            <img
              src="/images/banners/portfolio/portfolio-2.jpg"
              :alt="$t('Використання')"
              class="portfolio-card__image"
            />
          </div>
          <div class="portfolio-card__content">
            <h3 class="portfolio-card__title">{{ $t("Використання") }}</h3>
            <h4 class="portfolio-card__subtitle">
              {{ $t("Категорії") }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <path
                  d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"
                />
              </svg>
            </h4>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["texts"]);
</script>
