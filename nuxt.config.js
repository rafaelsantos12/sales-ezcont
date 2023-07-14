export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "EzCont - A única contabilidade para produtores, afiliados e negócios digitais!",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Contabilidade digital para produtores, afiliados e negócios digitais!",
      },
      { name: "format-detection", content: "telephone=no" },

      { property: "og:site_name", content: "EzCont" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://ezcont.com.br",
      },
      {
        hid: "og:title",
        property: "og:title",
        content:
          "EzCont - A única contabilidade para produtores, afiliados e negócios digitais!",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Contabilidade digital para produtores, afiliados e negócios digitais!",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/images/og.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },

      { name: "twitter:site", content: "@ezcont" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://ezcont.com.br",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content:
          "EzCont - A única contabilidade para produtores, afiliados e negócios digitais!",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Contabilidade digital para produtores, afiliados e negócios digitais!",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/images/og.png",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/images/favicon.svg" },
      { rel: "stylesheet", href: "https://css.gg/css" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/global.css", "@/assets/css/styleGuide.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "@/components",
    {
      path: "@/components/templates/",
      prefix: "template",
      extensions: ["vue"],
    },
    {
      path: "@/components/organisms/",
      prefix: "organism",
      extensions: ["vue"],
    },
    {
      path: "@/components/molecules/",
      prefix: "molecule",
      extensions: ["vue"],
    },
    {
      path: "@/components/atoms/",
      prefix: "atom",
      extensions: ["vue"],
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    "@nuxtjs/svg",
  ],

  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/gtm",
    "@nuxtjs/axios",
    [
      "@nuxt/image",
      {
        dir: "static",
        target: "static",
      },
    ],
  ],

  gtm: {
    id: 'GTM-BG3NHWD',
    pageTracking: true,
    enabled: true,
    debug: false, // Set to true if you want to enable GTM debug mode
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    display: "swap",
    preload: true,
    families: {
      Inter: {
        wght: [400, 500, 600],
      },
      Poppins: {
        wght: [400, 500, 600],
      },
    },
  },
};
