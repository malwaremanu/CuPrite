export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    base_url: process.env.base_url,
    dev_url : process.env.dev_url
  },
  ssr: false,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CuPrite ERP',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css', '@/assets/css/main.css',],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/en.js', '~/plugins/de.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    method: 'post',
    headers: {"Content-Type": "application/json"},
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL : "https://6tv4vea5c9.execute-api.ap-south-1.amazonaws.com/",
    // baseURL: process.env.base_url,
    // browserBaseURL : process.env.base_url,
    // api_url : "https://6tv4vea5c9.execute-api.ap-south-1.amazonaws.com/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  extend (config, { isDev, isClient }) {
    config.node= {
       fs: 'empty'
     }
    // ....
 }
},
}
