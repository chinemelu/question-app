<template>
  <TheNavbar :showTimer="showTimer" :showBackButton="showBackButton" />
  <router-view />
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
  computed: {
    showTimer() {
      return this.$store.state.showTimer;
    },
    showBackButton() {
      return this.$store.state.showBackButton;
    },
  },
};
</script>

<style></style>
