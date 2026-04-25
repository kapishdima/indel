<template>
  <div class="home-page">
    <Head>
      <Title>{{ $t("Indel") }}</Title>
      <Link rel="canonical" href="https://chempha.com" />
      <Meta
        name="google-site-verification"
        content="t5h28M5twka3Ii02_z1gXTKtr-UN0KOGhHbq619dCbQ"
      />
    </Head>
    <BannersMain />
    <BannersAbout :texts="texts" />
    <CareerSection :texts="texts" />
    <HomePosts :texts="texts" />
    <HomeProducts :texts="texts" />
    <HomeVideos :texts="texts" />
  </div>
</template>

<script setup>
const { texts } = useGlobalTexts();
</script>
