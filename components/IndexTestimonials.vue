<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

let currentIndex = ref(0)
let isLoaded = ref(false)

const testimonials = await useTestimonials()

const updateIndex = () => {
  if (testimonials.length > 0) isLoaded.value = true

  if (currentIndex.value <= (testimonials.length - 1)) {
    currentIndex.value = 0
  } else {
    currentIndex.value == currentIndex.value + 1
  }
}


onMounted(async () => {
  let tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 2
  })
  tl.to('.index-testimonials__images__before', {
    opacity: 0,
    x: -100,
    duration: 1,
    onComplete: updateIndex,
  })
  tl.to('.index-testimonials__images__before', {
    opacity: 100,
    x: 0,
    duration: 1,
  })
})
</script>

<template lang="pug">
.index-testimonials
  IndexTestimonialsDecoration
  h2.index-testimonials__title Testimonios
  .index-testimonials__images
    img.index-testimonials__images__before(
      v-if="isLoaded"
      :src="testimonials[currentIndex]?.before_image?.presigned_url" 
    )
    img.index-testimonials__images__after(
      v-if="isLoaded"
      :src="testimonials[currentIndex]?.after_image?.presigned_url" 
    )
</template>

<style scoped lang="scss">
.index-testimonials {
  position: relative;
  &__title { 
    @include mixins.title(); 
    @media screen and (min-width: 480px) {
      @include mixins.title(20rem); 
    }
  }
  &__images {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-around;

    &__before, 
    &__after {
      width: 40%;
      max-width: 600px;
      max-height: 400px;
      border-radius: 15px;
    
    }
  }
}
</style>
