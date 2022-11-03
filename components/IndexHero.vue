<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
onMounted(() => {
  gsap.from('.index-hero__img', {
    opacity: 0,
    x: 250,
    duration: 2,
    delay: 2,
  })
})
</script>

<template lang="pug">
.index-hero
  IndexHeroMessage
  img.index-hero__img(
    src="/img/hero.webp"
    alt="hero"
  )
</template>

<style scoped lang="scss">
.index-hero {
  padding-top: 100px;
  background-color: colors.$base;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  &__img {
    max-width: 450px;
    max-height: 350px;
  }
}
</style>
