<template>
  <div class="navbar">
    <img
      v-if="showBackButton"
      src="@/assets/back-button.svg"
      alt="back button logo"
      @click="moveToPreviousComponent"
    />
    <TheTimer v-if="showTimer" class="navbar__timer" />
    <svg class="navbar__icon">
      <use xlink:href="../assets/sprite.svg#icon-menu"></use>
    </svg>
  </div>
</template>

<script>
import TheTimer from "@/components/TheTimer.vue";

export default {
  methods: {
    moveToPreviousComponent() {
      this.$store.commit("decreaseActiveComponentIndex");
    },
  },
  props: {
    showBackButton: {
      type: Boolean,
      default: false,
    },
    showTimer: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    TheTimer,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  &__hamburger {
    display: flex;
    align-items: center;
    position: relative;
    padding: 1.25rem;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.25rem;
      width: 1.5rem;
      height: 0.1rem;
      background: black;
      box-shadow: 0 0.25em 0 0 black, 0 0.5em 0 0 black;
    }
  }
  &__icon {
    width: 3.5rem;
    height: 3.5rem;
    fill: $primary-color-dark;
  }
}
</style>
