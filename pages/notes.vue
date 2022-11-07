<template lang="pug">
.notes
  h1.notes__title Notes
  .notes__cards
    NoteCard(
      v-for="note in useNotes()"
      :note="note"
    )
</template>

<style lang="scss" scoped>
.notes {
  padding-top: 100px;
  min-height: 80vh;
  &__title {
    width: 80%;
    margin: 3rem auto;
    max-width: 1200px;
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    max-width: 1200px;
    margin: 1rem auto;
  }
}
</style>
