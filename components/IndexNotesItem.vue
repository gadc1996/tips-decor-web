<script lang="ts" setup>
interface Note {
  id: number,
  title: string,
  img: string
}

defineProps<{
  note: Note,
}>()
</script>

<template lang="pug">
NuxtLink.index-notes-item(:to="`/note/${note.id}`")
  img.index-notes-item__img(:src="note.image.presigned_url")
  h2.index-notes-item__title {{ note.title }}
</template>

<style scoped lang="scss">
.index-notes-item {
  margin: 0 auto;
  text-decoration: none;
  color: black;
  transition: all 0.5s ease-in;
  opacity: 0;
  width: 80%;
  &:hover {
     transform: scale(1.05);
     transition: all 0.3s linear;
  }
  &__img {
    width: 300px;
    aspect-ratio: 1;
    border-radius: 20px;
  }
}
</style>
