<script lang="ts" setup></script>

<template lang="pug">
.index-testimonials
  IndexTestimonialsDecoration
  h2.index-testimonials__title Testimonios
</template>

<style scoped lang="scss">
.index-testimonials {
  min-height: 100vh;
  &__title { @include mixins.title(20rem); }
}
</style>
