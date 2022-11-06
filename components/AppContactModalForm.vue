<script lang="ts" setup>
const formIsSubmiting = useIsSubmiting()
const formIsSubmited = useIsSubmited()

function submit(): void { 
  useIsSubmiting().value = true
  setTimeout(() => {
    useIsSubmiting().value = false
    useIsSubmited().value = true
  }, 2000)
}
</script>

<template lang="pug">
form.app-contact-modal-form(@submit.prevent="submit" v-if="!formIsSubmiting && !formIsSubmited").app-contact-modal__dialog__form
  h2.app-contact-modal-form__title Tienes alguna idea o bucas asesoria, 
    br
    | Nosotros te ayudamos! 
  label.app-contact-modal-form__label(for="name") Nombre
  input.app-contact-modal-form__input(type="text" name="name")
  label.app-contact-modal-form__label(for="contact_info") Telefono o Correo
  input.app-contact-modal-form__input(type="text" name="contact_info")
  label.app-contact-modal-form__label(for="message") Mensaje
  textarea.app-contact-modal-form__textarea(
    name="message"
  )
  .app-contact-modal-form__actions(type="submit")
    button.app-contact-modal-form__actions__submit(type="submit") Enviar
    button.app-contact-modal-form__actions__close(
      @click="useCloseModal()"
    ) Cerrar
</template>

<style scoped lang="scss">
.app-contact-modal-form {
  font-size: 30px;
  &__title {
    width: 500px;
    font-weight: 500;
    font-size: 30px;
  }
  &__label {
    display: block;
    font-size: 30px;
    font-weight: 400;
    margin: 0.5rem 0;
    line-height: 23px; 
  }
  &__input {
    height: 50px;
    width: 500px;
    border-radius: 5px;
    margin-bottom: 2rem;
    font-size: 30px;
  }
  &__textarea {
    height: 200px;
    width: 500px;
    margin-bottom: 2rem;
  }

  &__actions {
    &__submit,
    &__close {
      cursor: pointer;
    }
    &__submit {
      font-size: 30px;
      padding: 10px 20px;
      background: #77937d;
      border-radius: 5px;
    }
    &__close {
      border: none;
      background: transparent;
      padding: 10px 20px;
      font-size: 25px;
      font-weight: 200;

    }
  }
}
</style>
