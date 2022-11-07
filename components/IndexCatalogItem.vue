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
  .index-catalog-item__base
  img.index-catalog-item__img(:src="category.image")
  .index-catalog-item__name(to="/") {{ category.name }}

</template>

<style scoped lang="scss">
.index-catalog-item {
  position: relative;
  width: 400px;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-self: flex-start;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all 0.5s ease-in;
  &:visited { color: inherit; }
  &:hover { 
    transform: scale(1.05);
  }

  &__base {
    position: absolute;
    bottom: 4rem;
    z-index: -1;
    height: 250px;
    width: 400px;
    border-radius: 20px;
    background: colors.$base;
  }
  
  &__img {
    max-width: 300px;
    align-self: center;
    transform: translateY(-50px);
  }
  
  &__name {
    font-weight: 400;
    font-size: 52px;
    line-height: 61px;
  }
}

.right {
  align-self: flex-end;
}
</style>
