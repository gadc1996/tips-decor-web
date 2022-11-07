<script lang="ts" setup>
interface Product {
  id: number,
  name: string,
  image: string
}
const products: Product[] = [
    {
      id: 1,
      name: 'Sillas',
      image: '/img/chair.webp',
    },
    {
      id: 2,
      name: 'Camas',
      image: '/img/bed.webp',
    },
    {
      id: 3,
      name: 'Buros',
      image: '/img/bureau.webp',
    },
    {
      id: 4,
      name: 'Escritorios',
      image: '/img/desk.webp',
    },
] 
</script>

<template lang="pug">
.category
  h1.category__title Categoria
  .category__products
    ProductCard(
      v-for="product in products"
      :product="product"
    )
</template>

<style lang="scss" scoped>
.category {
  padding-top: 100px;
  min-height: 80vh;
  &__title {
    width: 80%;
    margin: 3rem auto;
    max-width: 1200px;
  }
  &__products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    max-width: 1200px;
    margin: 1rem auto;
  }
}
</style>