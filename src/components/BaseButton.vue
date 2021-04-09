<template>
  <button v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
.welcome-page__button {
  display: block;
  border-radius: 5rem;
  height: 4rem;
  width: 50%;
  color: $primary-white;
  background-color: $secondary-color-dark;
  margin: 4.5vh auto 2.5vh auto;
  cursor: pointer;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  &:disabled {
    background-color: $grey-color-light;
  }
}
</style>
