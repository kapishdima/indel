<template>
  <div class="career-page">
    <Head>
      <Title>{{ $t("Кар'єра в Indel") }}</Title>
      <Meta name="og:title" :content="$t(`Кар'єра в Indel`)" />
    </Head>
    <div class="container" v-if="careerInfo">
      <AppPageBanner
        :title="careerInfo.banner_text || $t(`Кар'єра`)"
        :img="careerInfo.banner_img"
      />

      <div class="row flex-row-reverse career-item">
        <div class="col-12 col-lg-6 career__image">
          <img :src="careerInfo.section_img" alt="" />
        </div>

        <div class="col-12 col-lg-5 career__info">
          <h3 class="career__title">
            {{ careerInfo.section_title }}
          </h3>
          <p class="career__text" v-html="careerInfo.section_text"></p>
          <a :href="careerInfo.workua_link" class="career__link"
            >{{ $t("Вакансії на Work.ua") }}
          </a>
          <a :href="careerInfo.rabotaua_link" class="career__link"
            >{{ $t("Вакансії на Rabota.ua") }}
          </a>
        </div>
      </div>

      <div class="row form-container">
        <CareerContactForm />
        <div class="col-12 col-lg-6 contact-map">
          <div class="contact-map-label">
            <p class="contact-address">
              <b>{{ $t(`ТОВ "Індел"`) }}</b> <br />
              {{ $t("Вул. М. Грушевського, 39Д") }} <br />
              {{ $t("Одеса, 65031, Україна") }}<br />
              <a href="tel:+380 48 701-33-89">Tel: +380 48 701-33-89</a>
              <a href="tel:+380 48 705-46-61">Tel: +380 48 705-46-61</a>
            </p>
            <p class="contact-email">
              <span class="contact-email__label">{{ $t("EMAIL") }}</span><br />
              <a href="mailto:info@indel.com.ua" class="contact-email__value"
                >info@indel.com.ua</a
              >
            </p>
          </div>

          <div class="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6148.763269866758!2d30.68519790380269!3d46.48250575607405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63137c54e2d99%3A0x67894dd0c04e6317!2z0KHQtdGA0LLRltGB0L3QuNC5INGG0LXQvdGC0YAg0LzQvtGA0YHRjNC60L7Qs9C-INGC0LAg0YDRltGH0LrQvtCy0L7Qs9C-INGC0YDQsNC90YHQv9C-0YDRgtGD!5e0!3m2!1sru!2sua!4v1716382619597!5m2!1sru!2sua"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { careerInfo } = await useCareerInfo();
</script>
