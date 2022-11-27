<script lang="ts" setup>
interface Category {
  id: number,
  name: string,
  image: string,
}

defineProps<{
  category: Category
}>()
</script>

<template lang="pug">
NuxtLink.categories-card(:to="`/category/${category.id}`")
  img.categories-card__img(:src="category.image.presigned_url")
  h2.categories-card__title {{ category.name }}
</template>

<style scoped lang="scss">
.categories-card {
  text-decoration: none;
  color: black;
  width: 30%;
  transition: all 0.5s linear;
  margin: 2rem 0;
  &:hover {
    transform: scale(1.1);
  }
  &__img{
    width: 100%;
    height: 250px;
  }
}

</style>
