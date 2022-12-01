// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Tips Decor",
      meta: [
        {
          hid: "viewport",
          property: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          property: "description",
          name: "description",
          content:
            "Asesoría en decoración, venta de muebles y accesorios, trabajos de remodelación, persianas, tapices, etc.",
        },
        { hid: "og:type", name: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          name: "og:url",
          content: "https://www.tipsdecor.com.mx/",
        },
        {
          hid: "og:description",
          property: "og:description",
          name: "og:description",
          content:
            "Asesoría en decoración, venta de muebles y accesorios, trabajos de remodelación, persianas, tapices, etc.",
        },
        {
          hid: "og:image",
          property: "og:image",
          name: "og:image",
          content: "https://www.tipsdecor.com.mx/logo.jpg",
        },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: "https://awesome-lib.js" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "stylesheet", href: "https://awesome-lib.css" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
      ],
    },
  },

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
