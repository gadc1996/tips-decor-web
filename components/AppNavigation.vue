<script lang="ts" setup>
interface Link {
  text: string,
  route: string
  icon: string
}

const links: Link[] = [
  {
    text: 'Inicio',
    route: '/',
    icon: '/',
  },
  {
    text: 'Catalogo',
    route: '/categories',
    icon: '/',
  },
  {
    text: 'Notas',
    route: '/notes',
    icon: '/',
  },
]

</script>

<template lang="pug">
nav.app-navigation
  //- AppNavigationBurgerButton
  NuxtLink.app-navigation__link(v-for="link in links" :to="link.route") {{ link.text }}
  NuxtLink.app-navigation__link.pointer(
    @click="useOpenModal()"
    ) Contacto 
</template>

<style lang="scss">
.app-navigation {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: space-between;

  &__link {
    font-size: 26px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);

    &:hover {
      color: rgba(0, 0, 0, 0.5)
    }
  }
}
</style>