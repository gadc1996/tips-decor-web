<script lang="ts" setup>
interface Product {
  id: number,
  name: string,
  image: string
}

defineProps<{
  product: Product
}>()
</script>

<template lang="pug">
.product-card
  img.product-card__img(:src="product.image")
  h2.product-card__title {{ product.name }}
</template>

<style scoped lang="scss">
.product-card {
  text-decoration: none;
  color: black;
  width: 30%;
  transition: all 0.5s linear;
  &:hover {
    transform: scale(1.1);
  }
  &__img{
    width: 100%;
    height: 250px;
  }
}

</style>