<script lang="ts" setup></script>

<template lang="pug">
.app-footer
  .app-footer__copyright
    | {{ new Date().getFullYear() }} Made with 	&#128151; By
    | 
    a.app-footer__copyright__link(href="https://www.alexdelgado.com.mx") Alex Delgado
</template>

<style lang="scss" scoped>
.app-footer {
  &__copyright {
    color: white;
    background: black;
    text-align: center;
    font-size: 1rem;
    &__link {
      color: white;
      text-decoration: none;
    }
  }
}
</style>