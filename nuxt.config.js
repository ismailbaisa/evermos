export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'imacakes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  generate: {
    dir: 'public'
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~assets/scss/style.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://my-json-server.typicode.com/ismailbaisa/evermos/',
  },

  // Build Configuration (https://go.n  uxtjs.dev/config-build)
  build: {
    publicPath: 'https://cdn.nuxtjs.org'
  }
}
