<template>
  <NuxtLink to="/company" class="header-menu__link" v-if="menu">
    {{ menu.first_menu_item }}
  </NuxtLink>
  <div class="header-menu__link" @click="toggleMegaMenu">
    <div class="header-menu__link-label">
      {{ menu.second_menu_item }}
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
  <NuxtLink to="/partners" class="header-menu__link" v-if="menu">
    {{ menu.third_menu_item }}
  </NuxtLink>
  <NuxtLink to="/news" class="header-menu__link">
    {{ menu.fourth_menu_item }}
  </NuxtLink>
  <NuxtLink to="/contact-us" class="header-menu__link">
    {{ menu.fifth_menu_item }}
  </NuxtLink>

  <AppMegaMenu :shown="shownMegaMenu" />
</template>

<script>
const toView = (collection) => {
  if (!collection) {
    return [];
  }

  return collection.map((collection) => {
    return {
      id: collection.id,
      name: collection.attributes.Name,
      children: !collection.attributes.pod_kategoriyas?.data.length
        ? null
        : collection.attributes.pod_kategoriyas?.data.map((subcategory) => {
            return {
              id: subcategory.id,
              name: subcategory.attributes.name,
            };
          }),
    };
  });
};

export default {
  data() {
    return {
      shownMegaMenu: false,
    };
  },
  async setup() {
    try {
      const { find } = useStrapi();
      const categories = await find("categories", { populate: "*" });
      const menu = await find("menyu");

      const ingredients = categories.data.filter(
        (category) => category.attributes.section === "ingredients"
      );
      const applications = categories.data.filter(
        (category) => category.attributes.section === "application"
      );

      const ingredientsForView = toView(ingredients);
      const applicationsForView = toView(applications);

      return {
        ingredientsForView,
        applicationsForView,
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
  },
};
</script>
