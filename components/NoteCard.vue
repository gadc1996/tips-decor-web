<script lang="ts" setup>
interface Note {
  id: number,
  title: string,
  image: string,
  content: string
}

defineProps<{
  note: Note
}>()
</script>

<template lang="pug">
NuxtLink.note-card(:to="`/note/${note.id}`")
  img.note-card__img(:src="note.image")
  h2.note-card__title {{ note.title }}
</template>

<style scoped lang="scss">
.note-card {
  text-decoration: none;
  color: black;
  width: 30%;
  transition: all 0.5s linear;
  margin: 2rem 0;
  &:hover {
    transform: scale(1.1);
  }
  &__img{
    width: 100%;
    height: 250px;
  }
}

</style>
