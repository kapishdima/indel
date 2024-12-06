<template>
  <NuxtLink to="/company" class="header-menu__link" v-if="menu">
    {{ menu.first_menu_item }}
  </NuxtLink>
  <div class="header-menu__link">
    <NuxtLink
      to="/departments"
      class="header-menu__link-label"
      data-el="popover-trigger"
    >
      {{ menu.second_menu_item }}
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
  <NuxtLink to="/career" class="header-menu__link">
    {{ menu.third_menu_item }}
  </NuxtLink>
  <NuxtLink to="/partners" class="header-menu__link" v-if="menu">
    {{ menu.fourth_menu_item }}
  </NuxtLink>
  <NuxtLink to="/news" class="header-menu__link">
    {{ menu.fifth_menu_item }}
  </NuxtLink>
  <NuxtLink to="/contact-us" class="header-menu__link">
    {{ menu.sixth_menu_item }}
  </NuxtLink>

  <AppMegaMenu :shown="shownMegaMenu" @close="closeMegaMenu" />
</template>

<script>
export default {
  data() {
    return {
      shownMegaMenu: false,
    };
  },
  async setup() {
    try {
      const { find } = useStrapi();
      const menu = await find("menyu");

      return {
        menu: menu.data.attributes,
      };
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    toggleMegaMenu() {
      this.shownMegaMenu = !this.shownMegaMenu;
    },
    closeMegaMenu() {
      this.shownMegaMenu = false;
    },
  },
};
</script>
