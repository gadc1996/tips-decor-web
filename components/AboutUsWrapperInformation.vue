<script setup lang="ts">
interface Counter {
  text: string,
  value: number
}

const counters: Counter[] = [
  {
    text: 'Lorem ipsum',
    value: 283,
  },
  {
    text: 'Lorem ipsum',
    value: 283,
  },
  {
    text: 'Lorem ipsum',
    value: 283,
  },
]

</script>

<template lang="pug">
.about-us-wrapper-information
  h1.about-us-wrapper-information__title Nosotros
  p.about-us-wrapper-information__text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi urna, interdum ac volutpat non, accumsan nec sapien. Vestibulum lorem enim, congue nec aliquam a, imperdiet ac lacus. Donec tincidunt tempus urna, et cursus neque tincidunt at
  .about-us-wrapper-information__counters
    AboutUsWrapperInformationCounter(
      v-for="counter in counters"
      :counter="counter"

    )
  button.about-us-wrapper-information__action Contactanos
</template>

<style lang="scss" scoped>
.about-us-wrapper-information {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-weight: 400;
    font-size: 70px;
    text-align: center;
  }
  
  &__text {
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    width: 80%;
    margin: 0 auto;
    text-align: justify;
  }
  
  &__counters {
    display: inline-flex;
    width: 80%;
    justify-content: center;
    margin: 2rem 0;
  }
  &__action {
    background: colors.$base;
    padding: 0.5rem;
    border-radius: 5px;
    margin-top: 2rem;
    font-size: 20px;
    line-height: 23px;
  }
}
</style>