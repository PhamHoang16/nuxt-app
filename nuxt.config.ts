// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  srcDir: 'src/',

  build: {
    transpile: ['vuetify'],
  },

  css: ['@mdi/font/css/materialdesignicons.min.css', 'vuetify/styles'],
  plugins: [
    '~/plugins/vuetify.js'
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  compatibilityDate: '2024-09-13',
})