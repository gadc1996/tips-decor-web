<template lang="pug">
.about-us
  .about-us__wrapper 
    img.about-us__wrapper__img(
      src="/img/about-us.webp"
    )
    AboutUsWrapperInformation
</template>

<style lang="scss" scoped>
.about-us {
  &__wrapper {
    background: #f3f3f3;
    box-shadow: 0px 0px 25px 20px rgba(0, 0, 0, 0.15);
    width: 80%;
    height: auto;
    margin: {
      top: 2rem;
      left: auto;
      right: auto;
      bottom: 12rem;
    }
    &__img {
      width: 100%;
    }
  }
  @media screen and (min-width: 480px) {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    &__wrapper {
      background: #f3f3f3;
      box-shadow: 0px 0px 25px 20px rgba(0, 0, 0, 0.15);
      width: 80%;
      height: 90vh;
      display: flex;
      &__img {
        width: 50%;
        height: 100%;
      }
    }
  }
}
</style>