// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  css: ['@/assets/main.css'],
  supabase: {
    redirectOptions: {
      login: "/",
      callback: "/confirm",
      exclude: ["/", "/faq", "/spaces", "/schedule", "/resources", "/jobs"],
    },
  },
})
