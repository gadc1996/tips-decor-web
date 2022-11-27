<script lang="ts" setup>
const testimonials = useTestimonials()
</script>

<template lang="pug">
.index-testimonials
  //- h2 {{ testimonials }}
  IndexTestimonialsDecoration
  h2.index-testimonials__title Testimonios
</template>

<style scoped lang="scss">
.index-testimonials {
  min-height: 100vh;
  &__title { @include mixins.title(20rem); }
}
</style>
