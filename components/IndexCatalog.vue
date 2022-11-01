<script lang="ts" setup>
interface Category  {
  name: string,
  image: string
}

const categories: Category[] = [
  {
    name: 'Sillas',
    image: 'img/chair.webp',
  },
  {
    name: 'Camas',
    image: 'img/bed.webp',
  },
  {
    name: 'Buros',
    image: 'img/bureau.webp',
  },
  {
    name: 'Escritorios',
    image: 'img/desk.webp',
  },
]

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
  &__title {
    margin-top: 5rem;
    margin-left: 9rem;
    display: inline-block;
    font-weight: 400;
    font-size: 42px;
    line-height: 49px;
  }
  &__items {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
  }

}
</style>
