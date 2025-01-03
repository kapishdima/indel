<template>
  <footer class="footer container">
    <div class="row gy-5">
      <div class="col-lg-4">
        <h4 class="footer-col__title">Адреса</h4>
        <div class="footer-col__list">
          <div class="footer-col__item">ТОВ "Індел"</div>
          <div class="footer-col__item">Вул. М. Грушевського, 39Д</div>
          <div class="footer-col__item">Одеса, 65031, Україна</div>

          <div class="footer-socials">
            <NuxtLink
              to="https://www.instagram.com/indelcosm?igsh=bTVlaTVrYXV6Z2Yx"
              target="_blank"
              class="footer-socials-item"
            >
              <img src="/images/icons/instagram.svg" alt="" />
            </NuxtLink>
            <NuxtLink
              to="https://www.youtube.com/@indel385/videos"
              target="_blank"
              class="footer-socials-item"
            >
              <img src="/images/icons/youtube.svg" alt="" />
            </NuxtLink>
            <NuxtLink
              to="https://www.facebook.com/indelcompany"
              target="_blank"
              class="footer-socials-item"
            >
              <img src="/images/icons/facebook.svg" alt="" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <h4 class="footer-col__title">Контакти</h4>
        <div class="footer-col__list">
          <a href="tel:+380 48 701-33-89" class="footer-col__item"
            >Tel: +380 48 701-33-89</a
          >
          <a href="tel:+380 48 705-46-61" class="footer-col__item"
            >Tel: +380 48 705-46-61</a
          >
          <a href="mailto:info@indel.com.ua" class="footer-col__item"
            >info@indel.com.ua</a
          >
          <a
            href="http://indel.com.ua/"
            target="_blank"
            class="footer-col__item"
            >www.indel.com.ua</a
          >
          <a
            href="https://indelcosm.com.ua"
            target="_blank"
            class="footer-col__item"
            >www.indelcosm.com.ua</a
          >
        </div>
      </div>
      <div class="col-lg-4">
        <!-- <h4 class="footer-col__title">Контакти</h4> -->
        <div class="footer-col__list">
          <NuxtLink
            to="https://indelcosm.com.ua"
            target="_blank"
            class="footer-col__item"
          >
            Косметичні інгредієнти
          </NuxtLink>
          <NuxtLink to="/pharm" class="footer-col__item">
            Фармацевтичні інгредієнти
          </NuxtLink>
          <NuxtLink to="/food" class="footer-col__item">
            Харчові інгредієнти
          </NuxtLink>
          <NuxtLink to="#" class="footer-col__item"> Вакансії </NuxtLink>
          <SearchProducts classes="footer-search" />
        </div>
      </div>
    </div>

    <div class="footer-copyright">
      Indel © Copyright 2023 - Усі права захищено
    </div>
  </footer>
</template>

<script></script>
