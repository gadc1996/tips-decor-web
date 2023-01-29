<script lang="ts" setup>
const footerLinks = useSocialLinks()
</script>

<template lang="pug">
.app-footer
  .app-footer__logos
    NuxtLink(
      v-for="link in footerLinks"
      :to="link.url"
    )
      img.app-footer__logos__logo(:src="link.logo_white")
  .app-footer__copyright
    | {{ new Date().getFullYear() }} Made with 	&#128151; By
    | 
    a.app-footer__copyright__link(href="https://www.alexdelgado.com.mx") Alex Delgado
</template>

<style lang="scss" scoped>
.app-footer {
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 15px;
  &__logos {
    display: flex;
    justify-content: center;
    &__logo {
      height: 40px;
      margin: 1rem;
      fill: white !important;
    }
  }
  &__copyright {
    color: white;
    text-align: center;
    font-size: 1rem;
    &__link {
      color: white;
      text-decoration: none;
    }
  }
}
</style>