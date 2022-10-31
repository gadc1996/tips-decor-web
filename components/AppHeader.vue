<script lang="ts" setup>
interface Link {
    text: string,
    route: string
}
const links: Link[] =  [
    {
        text: 'Inicio',
        route: '/',
        
    },
    {
        text: 'Catalogo',
        route: '/catalogo',
        
    },
    {
        text: 'Notas',
        route: '/notas',
        
    },
    {
        text: 'Contacto',
        route: '/contacto',
        
    },
]
</script>

<template lang="pug">
header.header
    img.header__logo(src="/img/logo.webp" alt="Logo")
    nav.header__nav
        NuxtLink.header__nav__link(v-for="link in links" :to="link.route") {{ link.text }}
</template>

<style scoped lang="scss">
.header {
    position: fixed;
    width: 100vw;
    background: #e8efef;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__logo {
        max-height: 80%;
        
    }
    &__nav {
        width: 60%;
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
}
</style>
