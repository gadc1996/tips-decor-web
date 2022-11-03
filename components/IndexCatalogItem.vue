<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

interface Category  {
  name: string,
  image: string
}

defineProps<{
  category: Category,
  index: number
}>()

function isEven(number: number) : boolean {
  return (number + 1) % 2 === 0
}

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  ScrollTrigger.batch('.index-catalog-item', {
      start: "400px bottom",
      onEnter: batch => {
      gsap.fromTo(batch, {
      }, {
        opacity: 100,
        time: 2,
        y: 0
      });
        
      },
  })
})
</script>

<template lang="pug">
NuxtLink(to='/').index-catalog-item(:class="{ right: isEven(index) }")
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
  &:visited { color: inherit; }
  &:hover { 
    transform: scale(2);
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
