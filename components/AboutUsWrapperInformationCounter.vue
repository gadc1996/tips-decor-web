<script lang="ts" setup>
import { onMounted, ref } from "vue";
interface Counter {
  text: string,
  value: number
}

const props = defineProps<{
  counter: Counter
}>()

function AddDisplayValue() {
  displayValue.value = 1
}

let displayValue = ref(0)

onMounted(async () => {
  for (let index = 0; index < props.counter.value; index++) {
    await  new Promise(resolve => setTimeout(resolve, 10));
    displayValue.value++
  }
})
</script>

<template lang="pug">
.about-us-wrapper-information
  h2.about-us-wrapper-information__title {{ displayValue }}
  p.about-us-wrapper-information__text {{ counter.text}}
</template>

<style scoped lang="scss">
.about-us-wrapper-information {
  text-align: left;
  padding-left: 10%;
  margin: 1rem 0;
  &__title {
    font-size: 36px;
    margin: 0;
  }
  &__text {
    margin: 0;
    font-size: 22px;
    color: rgba($color: black, $alpha: 0.6);
  }
}
</style>
