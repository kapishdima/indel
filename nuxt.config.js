// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  future: {
    compatibilityVersion: 4,
  },

  ssr: false,
  runtimeConfig: {
    public: {
      mailTo: process.env.MAIL_TO,
      sendGridApiKey: process.env.SENDGRID_API_KEY,
      strapiUrl: process.env.STRAPI_URL || "http://localhost:1337",
    },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/strapi", "@nuxt/image", "@nuxtjs/sitemap", "@nuxtjs/i18n"],
  plugins: ["~/plugins/click-outside.ts"],
  css: ["~/assets/scss/main.scss"],

  i18n: {
    defaultLocale: "uk-UA",
    locales: [
      { code: "uk-UA", name: "Українська", language: "uk-UA", file: "uk.json" },
      { code: "en", name: "English", language: "en-US", file: "en.json" },
    ],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          crossorigin: "",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
        {
          rel: "mask-icon",
          type: "image/png",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/scss/vars/_colors.scss" as *; @use "@/assets/scss/vars/_fonts.scss" as *;',
        },
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  // @ts-ignore
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v5",
    cookie: {},
    cookieName: "strapi_jwt",
  },
});
