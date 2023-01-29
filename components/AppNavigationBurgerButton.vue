<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';
let burgerMenuIsOpen: Ref<boolean> = ref(false)

function toggleBurgerMenu(): void {
  burgerMenuIsOpen.value = !burgerMenuIsOpen.value
}
</script>

<template lang="pug">
.app-navigation-burger-button(
  @click="toggleBurgerMenu"
)
  .app-navigation-burger-button__line(
    :class="{ open: burgerMenuIsOpen }"
    )
</template>

<style lang="scss">
$line-color: gray;
$line-width: 50px;
$line-height: 5px;

@mixin app-navigation-burger-button-line {
  content: '';
  width: $line-width;
  height: $line-height;
  background: $line-color;
  position: absolute;
  box-shadow: 0 k2px 5px rgba(0, 0, 0, .2);
  transition: 0.2s;
}

.app-navigation-burger-button {
  width: $line-width;
  transform: translateX(-30px);
  &__line { 
    @include app-navigation-burger-button-line; 

    &:before,
    &:after {
      @include app-navigation-burger-button-line;
    }

    &:before { top: 16px; }

    &:after{ top: -16px; }
  }

  .open {
    background: rgba(0, 0, 0, 0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0);

    &:before,
    &:after {
      top: 0;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(135deg);
    }
  }
}
</style>