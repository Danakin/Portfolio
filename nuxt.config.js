export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Brücke - Moderne Homepages",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Ihre Brücke ins Internet: Homepages nach Maß. Schnell, modern, und schön. Auf Deutsch, Englisch und Japanisch"
      },
      { hid: "tags", name: "tags" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios",
    "@nuxt/content",
    "nuxt-i18n",
    "@nuxtjs/google-analytics",
    "@nuxtjs/sitemap"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  axios: {},
  i18n: {
    baseUrl: "https://www.festor.info/",
    vueI18nLoader: true,
    locales: [
      { code: "de", iso: "de-DE" },
      { code: "en", iso: "en-US" },
      { code: "ja", iso: "ja-JP" }
    ],
    defaultLocale: "de",
    detectBrowserLanguage: true,
    vueI18n: {
      fallbackLocale: "en"
    },
    seo: true
  },
  googleAnalytics: {
    id: "UA-169387423-1",
    disabled: () => {
      const getGDPR = window.localStorage.getItem("GDPR:accepted");
      if (typeof getGDPR !== null && getGDPR === "no") {
        return true;
      }
      if (typeof getGDPR !== null && getGDPR === "yes") {
        return false;
      }
      return true;
    },
    //Remove debug before deployment
    debug: {
      enabled: true,
      sendHitTask: true
    }
  },
  sitemap: {
    hostname: "https://www.festor.info",
    i18n: true,
    i18n: {
      locales: ["de", "en", "ja"],
      routesNameSeparator: "___"
    }
  }
};
