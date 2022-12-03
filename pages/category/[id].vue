<script lang="ts" setup>
const route = useRoute()

const products = await useProducts(route.params.id)
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