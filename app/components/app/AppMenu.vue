<template>
  <NuxtLink :to="$localePath('/company')" class="header-menu__link" v-if="menu">
    {{ menu.first_menu_item }}
  </NuxtLink>
  <div class="header-menu__link">
    <NuxtLink
      :to="$localePath('/departments')"
      class="header-menu__link-label"
      data-el="popover-trigger"
    >
      {{ menu?.second_menu_item }}
    </NuxtLink>
    <div class="app-menu-categories__button" @click="toggleMegaMenu">
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
  </div>
  <NuxtLink :to="$localePath('/career')" class="header-menu__link" v-if="menu">
    {{ menu.third_menu_item }}
  </NuxtLink>
  <NuxtLink :to="$localePath('/partners')" class="header-menu__link" v-if="menu">
    {{ menu.fourth_menu_item }}
  </NuxtLink>
  <NuxtLink :to="$localePath('/news')" class="header-menu__link" v-if="menu">
    {{ menu.fifth_menu_item }}
  </NuxtLink>
  <NuxtLink :to="$localePath('/contact-us')" class="header-menu__link" v-if="menu">
    {{ menu.sixth_menu_item }}
  </NuxtLink>

  <AppMegaMenu :shown="shownMegaMenu" @close="closeMegaMenu" />
</template>

<script setup>
const shownMegaMenu = ref(false);
const { menu } = await useMenuConfig();

const toggleMegaMenu = () => {
  shownMegaMenu.value = !shownMegaMenu.value;
};
const closeMegaMenu = () => {
  shownMegaMenu.value = false;
};
</script>
