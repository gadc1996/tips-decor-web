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
NuxtLink.index-notes-item(:to="`/notes/${note.id}`")
  img.index-notes-item__img(:src="note.img")
  h2.index-notes-item__title {{ note.title }}

</template>

<style scoped lang="scss">
.index-notes-item {
  text-decoration: none;
  color: black;
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
