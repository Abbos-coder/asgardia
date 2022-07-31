import colors from "vuetify/es5/util/colors";

export default {
  target: "static",
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Asgardia Team",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/svg", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css",
      },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js",
        body: true,
      },
      {
        src: "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.rings.min.js",
        body: true,
      },
      {
        src: "https://cdn.jsdelivr.net/npm/vanta@0.5.22/dist/vanta.net.min.js",
        body: true,
      },
      { src: "https://code.jquery.com/jquery-3.6.0.min.js" },
      {
        src: "https://kit.fontawesome.com/215ced7b1f.js",
        crossorigin: "anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/fonts/global.css", "~/assets/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/swiper.client.js" },
    { src: "~/plugins/aos.client.js", mode: "client" },
    { src: "~/plugins/v-mask.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "@nuxtjs/toast",
    [
      "@openafg/nuxt-fullpage",
      {
        // activeSection: 0,
        // mouseWheelSensitivity: 120,
        // showIndicators: true
      },
    ],
  ],
  toast: {
    position: "top-right",
    duration: 2000,
  },
  i18n: {
    useCookie: true,
    alwaysRedirect: true,
    detectBrowserLanguage: false,
    strategy: "prefix",
    locales: [
      {
        code: "ru",
        iso: "ru-RU",
        name: "Russian",
        file: "ru/index.js",
      },
      {
        code: "uz",
        iso: "uz-UZ",
        name: "O'zbek",
        file: "uz/index.js",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en/index.js",
      },
    ],
    lazy: true,
    seo: false,
    langDir: "locales/",
    defaultLocale: "ru",
    parsePages: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://backend.asgardia.team",
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    host: "0",
    port: "7777",
    timing: false,
  },
};
