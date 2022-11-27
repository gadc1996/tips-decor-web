<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const reveal = {
    opacity: 100,
  }
  
  const hide = {
    opacity: 0,
    
  }
  ScrollTrigger.batch('.index-catalog-item', {
      start: "400px bottom",
      onEnter: batch => {
        gsap.fromTo(batch, hide, reveal);
      },
  })
})

const categories = await useCategories()
</script>

<template lang="pug">
.index-catalog
  IndexCatalogDecoration
  h2.index-catalog__title Catalogo
  
  .index-catalog__items
    IndexCatalogItem(
      v-for="(category, index) in categories" 
      :category="category" 
      :index="index"
    )
</template>

<style scoped lang="scss">
.index-catalog {
  &__title { @include mixins.title }
  &__items {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
  }

}
</style>
