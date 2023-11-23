// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  googleFonts: {
      families: {
          'Roboto': {
            wght: [400, 500, 700],
            ital: [400, 500, 700]
          },
          'Source Code Pro': {
            wght: [400, 500, 600, 700],
            ital: [400, 500, 600, 700]
          }
      }
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/supabase"
  ],
  pinia: {
    autoImports: [
      'defineStore'
    ]
  },
  supabase: {
    redirect: false
  },
})