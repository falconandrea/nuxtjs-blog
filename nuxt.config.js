import { createSEOMeta } from './utils/seo.js'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FalconAndrea.Dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      ...createSEOMeta({
        description: 'Mi chiamo Andrea Falcon e sono uno sviluppatore Web Full-Stack. Ho deciso di creare questo blog per tener traccia delle tecnologie e conoscenze che apprendo durante la mia formazione.'
      })
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/blog/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/plugins/prism.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/prism.js', '~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    // Google Fonts
    ['@nuxtjs/google-fonts', {
      families: {
        Rubik: [400, 500]
      }
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome', {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  server: {
    host: '0' // default: localhost
  },

  // Base route
  router: {
    base: process.env.BASE_PATH
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    proxy: false,
    proxyHeaders: false,
    credentials: false,
    mode: 'no-cors',
    debug: process.env.NODE_ENV !== 'production',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
