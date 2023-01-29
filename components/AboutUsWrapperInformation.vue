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
  button.about-us-wrapper-information__action(
    @click="useOpenModal()"
  ) Contactanos
</template>

<style lang="scss" scoped>
.about-us-wrapper-information {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 480px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    width: 100%;
    text-align: center;
    @media screen and (min-width: 480px) {
      font-weight: 400;
      font-size: 70px;
      text-align: center;
    }
  }
  
  &__text {
    font-weight: 400;
    font-size: 25px;
    line-height: 42px;
    width: 80%;
    margin: 0 auto;
    text-align: justify;
  }
  
  &__counters {
    display: inline-flex;
    margin: 2rem 0;
    width: 100%;
    @media screen and (min-width: 480px) {
      width: 80%;
      justify-content: center;
      margin: 2rem 0;
    }
  }
  &__action {
    background: colors.$base;
    border-radius: 5px;
    border: 1px solid gray;
    width: 50%;
    height: 40px;
    margin: {
      left: auto;
      right: auto;
      bottom: 15px;
    }

    @media screen and (min-width: 480px) {
      padding: 0.5rem;
      margin-top: 2rem;
      font-size: 20px;
      line-height: 23px;
    }
  }
}
</style>