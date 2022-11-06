<script lang="ts" setup>
const contactLinks = useSocialLinks()
</script>

<template lang="pug">
.app-contact-modal-thank-you
  h2.app-contact-modal-thank-you__title Mensaje Enviado Con Exito!
  h3.app-contact-modal-thank-you__subtitle Nos pondremos en contacto contigo 
    br
    | Siguenos en nuestras Redes! 
  .app-contact-modal-thank-you__icons
    NuxtLink.app-contact-modal-thank-you__icons__icon(
      v-for="link in contactLinks"
      :to="link.url"
    )
      img(:src="link.logo")
  button.app-contact-modal-thank-you__close(
    @click="useCloseModal()"
  ) Volver
  
  
  
</template>

<style scoped lang="scss">
.app-contact-modal-thank-you {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 33px;
    line-height: 39px;
  }
  &__subtitle {
    font-size: 25px;
    line-height: 29px;
    color: rgba($color: #000000, $alpha: 0.6);
  }
  &__icons {
    display: flex;
    &__icon {
      margin: 3rem 1rem;
    }
  }

  &__close {
    font-size: 30px;
    padding: 10px 20px;
    background: #77937d;
    border-radius: 5px;
  }
  
}
</style>
