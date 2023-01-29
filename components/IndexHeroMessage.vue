<script lang="ts" setup></script>

<template lang="pug">
.index-hero-message
  h1.index-hero-message__title Bienvenido a Tips Decor
  p.index-hero-message__content En TIP's Decor te ayudamos a crear tu interior! Contáctanos para saber más de nuestros servicios y asesoría en decoración.
  NuxtLink(to="/about-us").index-hero-message__cta Conoce Mas 
    IndexHeroMessageArrow
</template>

<style scoped lang="scss">
.index-hero-message {
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 30%;
    height: 350px;
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 49px;
    margin: 0;
  }
  
  &__content {
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 33px;
    line-height: 39px;
    color: rgba(0, 0, 0, 0.6);
  }
  &__cta {
    text-decoration: underline 0.15em rgba(255, 255, 255, 0);
    color: rgba(0, 0, 0, 0.6);
    margin-top: 2rem;
    font-weight: 400;
    font-size: 33px;
    transition: all 1s linear;
    &:hover {
      text-decoration-color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
