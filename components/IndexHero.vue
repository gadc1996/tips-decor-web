<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
onMounted(() => {
  // gsap.from('.index-hero__img', {
  //   opacity: 0,
  //   x: 250,
  //   duration: 2,
  //   delay: 2,
  // })
})
</script>

<template lang="pug">
.index-hero
  .wrapper
    IndexHeroMessage
    img.index-hero__img(
      src="/img/hero.webp"
      alt="hero"
    )
</template>

<style scoped lang="scss">
.index-hero {
  width: 100%;
  background-color: colors.$base;
  padding-top: 100px;
  @media screen and (min-width: 480px) {
    padding-top: 0px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 480px) {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 70vh;
      width: 100vw;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  .index-hero__img {
    width: 80%;
    max-height: 350px;

    @media screen and (min-width: 480px) {
      max-width: 450px;
      max-height: 350px;
    }
  }
}
</style>
