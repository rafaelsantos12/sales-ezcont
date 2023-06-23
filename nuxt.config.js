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
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
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
    "@nuxtjs/axios",
    [
      "@nuxt/image",
      {
        dir: "static",
        target: "static",
      },
    ],
  ],

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
