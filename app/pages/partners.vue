<template>
  <div class="partners-page">
    <Head>
      <Title>Partners</Title>
      <Meta name="og:title" content="Indel Partners" />
    </Head>
    <div class="container">
      <AppPageBanner img="/images/banners/partner.jpg" title="Партнери" />

      <div class="section-header">
        <h2 class="section-title">Наші партнери</h2>
      </div>
      <div class="row partners-list gy-5">
        <a
          class="col-12 col-lg-4 partner-item"
          v-for="partner of partners"
          :key="partner.id"
          :href="partner.link"
          target="_blank"
        >
          <img :src="partner.logo" :alt="partner.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { partners } = await usePartnersList();
</script>
