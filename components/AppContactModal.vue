<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

const isModalVisible: Ref<boolean> = useIsModalVisible()
const modalIsSubmiting = useIsSubmiting()
const modalIsSubmited = useIsSubmited()

</script>

<template lang="pug">
.app-contact-modal(v-if="isModalVisible")
  .app-contact-modal__overlay
  dialog.app-contact-modal__dialog(:open="true")
    AppContactModalForm
    AppContactModalLoader(
      v-if="modalIsSubmiting && !modalIsSubmited"
    )
    AppContactModalThankYou(
      v-if="!modalIsSubmiting && modalIsSubmited"
    )
</template>

<style scoped lang="scss">
.app-contact-modal {
  &__overlay {
    width: 100vw;
    height: 100vh;
    content: '';
    background: rgba($color: #000000, $alpha: 0.4);
    position: fixed;
    z-index: 10;
  }
  &__dialog {
    position: fixed;
    top: 20vh;
    min-width: 800px;
    min-height: 600px;
    background: colors.$base;
    z-index: 10;
    border: 0.5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000000;
    padding: 5rem 0;
    
  }
}

</style>
