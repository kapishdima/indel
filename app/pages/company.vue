<template>
  <div class="company-page">
    <Head>
      <Title>Indel About Company</Title>
      <Meta name="og:title" content="Indel About Company" />
      <Meta
        name="og:description"
        content="Indel OÜ is an international company engaged in distribution of
            special and unique chemicals for production of personal care and
            cosmetics."
      />
      <Meta name="og:image" :content="companyInfo?.main_image" />
    </Head>
    <div class="company-banner" v-if="companyInfo">
      <img :src="companyInfo.main_image" alt="" class="company-banner__image" />
      <h2 class="company-banner__title">{{ companyInfo.title }}</h2>
    </div>

    <div class="container" v-if="companyInfo">
      <div class="row company-content-item">
        <div
          class="col-12 col-lg-6 company-content__image"
          data-aos="fade-right"
        >
          <img :src="companyInfo.first_image" alt="" />
        </div>

        <div class="col-12 col-lg-6 company-content__info" data-aos="fade-left">
          <h3 class="company-content__title">
            {{ companyInfo.first_block_title }}
          </h3>
          <p
            class="company-content__text"
            v-html="companyInfo.first_block_text"
          ></p>
        </div>
      </div>

      <div class="row flex-row-reverse company-content-item">
        <div
          class="col-12 col-lg-6 company-content__image"
          data-aos="fade-left"
        >
          <img :src="companyInfo.second_image" alt="" />
        </div>

        <div
          class="col-12 col-lg-6 company-content__info"
          data-aos="fade-right"
        >
          <h3 class="company-content__title">
            {{ companyInfo.second_block_title }}
          </h3>
          <p
            class="company-content__text"
            v-html="companyInfo.second_block_text"
          ></p>
        </div>
      </div>

      <div class="row company-content-item">
        <div
          class="col-12 col-lg-6 company-content__image"
          data-aos="fade-right"
        >
          <img :src="companyInfo.third_image" alt="" />
        </div>

        <div class="col-12 col-lg-6 company-content__info" data-aos="fade-left">
          <h3 class="company-content__title">
            {{ companyInfo.third_block_title }}
          </h3>
          <p
            class="company-content__text"
            v-html="companyInfo.third_block_text"
          ></p>
        </div>
      </div>
    </div>

    <div class="section-team" v-if="companyInfo">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ companyInfo.our_team_title }}</h2>
        </div>

        <div class="row team-list gy-5">
          <div
            class="col-lg-4 team-item"
            v-for="member of team"
            :key="member.id"
          >
            <div class="team-item__avatar">
              <img :src="member.avatar" alt="" />
            </div>
            <h4 class="team-item__name">{{ member.name }}</h4>
            <h5 class="team-item__post">{{ member.position }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

const { companyInfo, team } = await useCompanyInfo();

onMounted(() => {
  AOS.init({ duration: 1000 });
});
</script>
