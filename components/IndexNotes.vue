<script lang="ts" setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

interface Note {
  id: number,
  title: string,
  img: string
}

const notes: Note[] = [
  {
    id: 1,
    title: 'Sed efficitur sed est vitae lao',
    img: '/img/notes1.jpg',
  },
  {
    id: 2,
    title: 'Sed efficitur sed est vitae lao',
    img: '/img/notes2.jpg',
  },
  {
    id: 3,
    title: 'Sed efficitur sed est vitae lao',
    img: '/img/notes3.jpg',
  },
  {
    id: 4,
    title: 'Sed efficitur sed est vitae lao',
    img: '/img/notes4.jpg',
  },
  {
    id: 5,
    title: 'Sed efficitur sed est vitae lao',
    img: '/img/notes5.jpg',
  },
  {
    id: 6,
    title: 'Sed efficitur sed est vitae lao',
    img: '/img/notes6.jpg',
  },
]

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
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 100px;
    width: 80%;
    margin: 5rem auto;
  }
  &__title { @include mixins.title; }
}
</style>
