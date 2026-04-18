export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    mounted: function (el, binding) {
      el.onOutsideClick = (event: Event) => {
        if (!el.contains(event.target)) {
          binding.value(event);
        }
      };
      document.body.addEventListener("click", el.onOutsideClick);
    },
    beforeUnmount: function (el) {
      document.body.removeEventListener("click", el.onOutsideClick);
    },
  });
});
