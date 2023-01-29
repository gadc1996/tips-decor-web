<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

interface Note {
  id: number,
  title: string,
  img: string
}


const notes = await useNotes()
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const reveal = {
    opacity: 100,
  }
  
  const hide = {
    opacity: 0,
    
  }
  ScrollTrigger.batch('.index-notes-item', {
      start: "100px bottom",
      onEnter: batch => {
        gsap.fromTo(batch, hide, reveal);
      },
  })
})
</script>

<template lang="pug">
.index-notes 
  h2.index-notes__title Notas
  .index-notes__items
    IndexNotesItem(v-for="note in notes" :note="note")
</template>

<style scoped lang="scss">
.index-notes {
  margin-bottom: 10rem;
  &__title { @include mixins.title; }
  &__items {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 480px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 100px;
      width: 80%;
      margin: 5rem auto;
    }
  }
}
</style>
