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
]

function openModal() { useIsModalVisible().value = true }
</script>

<template lang="pug">
header.app-header
    img.app-header__logo(src="/img/logo.webp" alt="Logo")
    nav.app-header__nav
        NuxtLink.app-header__nav__link( v-for="link in links" :to="link.route") {{ link.text }}
        NuxtLink.app-header__nav__link.pointer(
            @click="openModal"
        ) Contacto 
</template>

<style scoped lang="scss">
.app-header {
    position: fixed;
    width: 100vw;
    background: colors.$base;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
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
.pointer {
    cursor: pointer;
}
</style>
