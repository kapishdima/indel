<template>
  <div
    ref="megaMenu"
    class="mega-menu"
    :class="{ 'mega-menu--shown': shown }"
    data-el="menu"
  >
    <div class="arrow"></div>
    <img
      src="/images/logo-icon.svg"
      alt=""
      class="decoration"
      id="bottom-right"
    />
    <div class="container">
      <div class="mega-menu__row">
        <div class="mega-menu__column">
          <div class="mega-menu-sections__list">
            <div class="mega-menu__section-item">
              <NuxtLink :to="$localePath('/pharm')"> {{ $t("Фармацевтичні") }} </NuxtLink>

              <div
                class="mega-menu-categories__button"
                @click="selectSection('pharm')"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.49686 6.69064C9.66771 6.8615 9.66771 7.13851 9.49686 7.30936L5.12186 11.6844C4.95101 11.8552 4.674 11.8552 4.50314 11.6844C4.33229 11.5135 4.33229 11.2365 4.50314 11.0656L8.56878 7L4.50314 2.93436C4.33229 2.7635 4.33229 2.4865 4.50314 2.31564C4.674 2.14479 4.95101 2.14479 5.12186 2.31564L9.49686 6.69064Z"
                    fill="#0F172A"
                  />
                </svg>
              </div>
            </div>
            <div class="mega-menu__section-item">
              <NuxtLink :to="$localePath('/food')"> {{ $t("Харчові") }} </NuxtLink>
              <div
                class="mega-menu-categories__button"
                @click.stop="selectSection('food')"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.49686 6.69064C9.66771 6.8615 9.66771 7.13851 9.49686 7.30936L5.12186 11.6844C4.95101 11.8552 4.674 11.8552 4.50314 11.6844C4.33229 11.5135 4.33229 11.2365 4.50314 11.0656L8.56878 7L4.50314 2.93436C4.33229 2.7635 4.33229 2.4865 4.50314 2.31564C4.674 2.14479 4.95101 2.14479 5.12186 2.31564L9.49686 6.69064Z"
                    fill="#0F172A"
                  />
                </svg>
              </div>
            </div>
            <a
              href="https://indelcosm.com.ua"
              class="mega-menu__section-item"
              target="_blank"
            >
              {{ $t("Косметичні") }}
            </a>
          </div>
        </div>
        <div class="mega-menu__column" v-if="currentSection">
          <div class="mega-menu-categories__list">
            <div
              class="mega-menu-categories__item"
              v-for="category of currentSection"
              :key="category.id"
            >
              <NuxtLink :to="$localePath(`/${category.section}/${category.id}`)">
                {{ category.name }}
              </NuxtLink>

              <div
                class="mega-menu-categories__button"
                @click.stop="selectCategory(category.name)"
                v-if="Boolean(category.children?.length)"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.49686 6.69064C9.66771 6.8615 9.66771 7.13851 9.49686 7.30936L5.12186 11.6844C4.95101 11.8552 4.674 11.8552 4.50314 11.6844C4.33229 11.5135 4.33229 11.2365 4.50314 11.0656L8.56878 7L4.50314 2.93436C4.33229 2.7635 4.33229 2.4865 4.50314 2.31564C4.674 2.14479 4.95101 2.14479 5.12186 2.31564L9.49686 6.69064Z"
                    fill="#0F172A"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="mega-menu__column" v-if="currentCategory">
          <div class="mega-menu-categories__list">
            <NuxtLink
              class="mega-menu-categories__item"
              v-for="subcategory of currentCategory.children"
              :to="$localePath(`/subcategory/${subcategory.id}`)"
              :key="subcategory.id"
            >
              {{ subcategory.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["shown"]);
const emit = defineEmits(["close"]);


const megaMenu = ref(null);
const currentSection = ref(null);
const currentCategory = ref(null);

const { categories: pharm } = await useCategoriesList({ section: "pharm" });
const { categories: food } = await useCategoriesList({ section: "food" });

const selectSection = (section) => {
  currentCategory.value = null;
  currentSection.value = section === "pharm" ? pharm.value : food.value;
};

const selectCategory = (name) => {
  currentCategory.value = currentSection.value.find((c) => c.name === name);
};

const watchClickOutside = (event) => {
  if (megaMenu.value && !megaMenu.value.contains(event.target)) {
    emit("close");
  }
};

watch(
  () => props.shown,
  (isShown) => {
    if (!isShown) {
      setTimeout(() => {
        currentSection.value = null;
        currentCategory.value = null;
      }, 150);
      document.removeEventListener("click", watchClickOutside);
    } else {
      setTimeout(() => {
        document.addEventListener("click", watchClickOutside);
      }, 50);
    }
  },
  { immediate: true }
);
</script>
