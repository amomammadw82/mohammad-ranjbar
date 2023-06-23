// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  devtools: { enabled: false },

  app: {
    head: {
      title: "Mohammad Ranjbar",
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@morev/vue-transitions/nuxt"],
});
