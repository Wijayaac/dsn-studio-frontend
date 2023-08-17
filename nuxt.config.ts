// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Poppins: [400, 500, 700],
    },
  },
  build: {
    transpile: ["@yeger/vue-masonry-wall", "gsap"],
  },
});
