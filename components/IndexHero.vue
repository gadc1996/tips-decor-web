<script lang="ts" setup></script>

<template lang="pug">
.index-hero
  IndexHeroMessage
  img.hero__img(
    src="/img/hero.webp"
    alt="hero"
  )
</template>

<style scoped lang="scss">
.index-hero {
  padding-top: 100px;
  background-color: #e8efef;
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
