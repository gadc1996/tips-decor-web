<script lang="ts" setup></script>

<template lang="pug">
header.app-header
    img.app-header__logo(src="/img/logo.webp" alt="Logo")
    AppNavigation 
</template>

<style scoped lang="scss">
.app-header {
    width: 100vw;
    background: colors.$base;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__logo {
        height: 50px;
        transform: translate(15px);
    }

}
</style>
