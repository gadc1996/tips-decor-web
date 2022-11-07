<script lang="ts" setup>
</script>
<template lang="pug">
.categories
  h1.categories__title Categorias
  .categories__cards
    CategoriesCard(
      v-for="category in useCategories()"
      :category="category"
    )
</template>

<style lang="scss" scoped>
.categories {
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