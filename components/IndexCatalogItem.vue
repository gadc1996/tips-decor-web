<script lang="ts" setup>
export interface Category {
  id: number,
  name: string,
  image: string,
}

defineProps<{
  category: Category,
  index: number
}>()

function isEven(number: number) : boolean {
  return (number + 1) % 2 === 0
}

</script>

<template lang="pug">
NuxtLink.index-catalog-item(
  :class="{ right: isEven(index) }"
  :to="`/category/${category.id}`"
)
  img.index-catalog-item__img(:src="category.image?.presigned_url")
  .index-catalog-item__title(:to="`categories/${category.id}`") {{ category.name }}

</template>

<style scoped lang="scss">
.index-catalog-item {
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

.right {
  align-self: flex-end;
}
</style>
