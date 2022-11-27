// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['gsap']
  },
  nitro: {
     preset: 'node-server'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_mixins.scss"; @use "@/assets/scss/_colors.scss";'
        }
      }
    }
  },
  runtimeConfig: {
    app: {
      baseUrl: process.env.BASE_URL,
      authEmail: process.env.AUTH_EMAIL,
      authPassword: process.env.AUTH_PASSWORD
    }
  }
})
