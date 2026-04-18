<template>
  <div class="header-mobile d-block d-lg-none" :class="{ active: opened }">
    <div class="header-mobile__header">
      <NuxtLink @click="emit('close')" to="/">
        <img src="/images/logo.png" alt="" class="header-logo" />
      </NuxtLink>
      <div
        class="header-mobile__btn header-mobile-close"
        @click="emit('close')"
      >
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>

    <div class="header-mobiler__search">
      <SearchProducts @search="emit('close')" />
    </div>

    <div class="header-mobile__menu">
      <NuxtLink
        @click="emit('close')"
        to="/company"
        class="header-menu__link"
        v-if="menu"
      >
        {{ menu.first_menu_item }}
      </NuxtLink>

      <div class="header-menu__link" v-if="menu">
        <div class="header-menu__link-label" @click="toggleCategory('food')">
          Харчові інгредієнти
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path
              d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
            />
          </svg>
        </div>
        <div
          class="header-menu-dropdown header-menu-categories"
          :class="{ active: nameCategoryOpened === 'food' }"
        >
          <div
            class="header-menu__link"
            v-for="category of food"
            :key="category.id"
          >
            <div
              class="header-menu__link-label"
              @click="toggleSubCategory(category.name)"
              v-if="category.children"
            >
              {{ category.name }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <path
                  d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
                />
              </svg>
            </div>

            <NuxtLink
              v-else
              :to="`/category/${category.id}`"
              @click="emit('close')"
            >
              {{ category.name }}
            </NuxtLink>

            <div
              class="header-menu-dropdown header-menu-subcategories"
              :class="{ active: nameSubCategoryOpened === category.name }"
              v-if="category.children"
            >
              <NuxtLink
                v-for="subcategory of category.children"
                :to="`/subcategory/${subcategory.id}`"
                class="header-menu__link"
                @click="emit('close')"
                :key="subcategory.id"
              >
                {{ subcategory.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="header-menu__link" v-if="menu">
        <div class="header-menu__link-label" @click="toggleCategory('pharm')">
          Фармацевтичні інгредієнти
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path
              d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
            />
          </svg>
        </div>
        <div
          class="header-menu-dropdown header-menu-categories"
          :class="{ active: nameCategoryOpened === 'pharm' }"
        >
          <div
            class="header-menu__link"
            v-for="category of pharm"
            :key="category.id"
          >
            <div
              class="header-menu__link-label"
              @click="toggleSubCategory(category.name)"
              v-if="category.children"
            >
              {{ category.name }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <path
                  d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
                />
              </svg>
            </div>

            <NuxtLink
              v-else
              :to="`/category/${category.id}`"
              @click="emit('close')"
            >
              {{ category.name }}
            </NuxtLink>

            <div
              class="header-menu-dropdown header-menu-subcategories"
              :class="{ active: nameSubCategoryOpened === category.name }"
              v-if="category.children"
            >
              <NuxtLink
                v-for="subcategory of category.children"
                :to="`/subcategory/${subcategory.id}`"
                class="header-menu__link"
                @click="emit('close')"
                :key="subcategory.id"
              >
                {{ subcategory.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink
        to="https://indelcosm.com.ua/"
        class="header-menu__link"
        v-if="menu"
      >
        Косметичні інгредієнти
      </NuxtLink>
      <NuxtLink
        @click="emit('close')"
        to="/career"
        class="header-menu__link"
        v-if="menu"
      >
        {{ menu.third_menu_item }}
      </NuxtLink>
      <NuxtLink
        @click="emit('close')"
        to="/partners"
        class="header-menu__link"
        v-if="menu"
      >
        {{ menu.fourth_menu_item }}
      </NuxtLink>
      <NuxtLink
        @click="emit('close')"
        to="/news"
        class="header-menu__link"
        v-if="menu"
      >
        {{ menu.fifth_menu_item }}
      </NuxtLink>
      <NuxtLink
        @click="emit('close')"
        to="/contact-us"
        class="header-menu__link"
        v-if="menu"
      >
        {{ menu.sixth_menu_item }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps(["opened"]);
const emit = defineEmits(["close"]);

const nameCategoryOpened = ref(null);
const nameSubCategoryOpened = ref(null);

const { categories: pharm } = await useCategoriesList({ section: "pharm" });
const { categories: food } = await useCategoriesList({ section: "food" });
const { menu } = await useMenuConfig();

const toggleCategory = (category) => {
  nameCategoryOpened.value = nameCategoryOpened.value ? null : category;
};

const toggleSubCategory = (category) => {
  nameSubCategoryOpened.value = nameSubCategoryOpened.value ? null : category;
};
</script>
