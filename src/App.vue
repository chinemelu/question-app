<template>
  <TheNavbar :showTimer="showTimer" :showBackButton="showBackButton" />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
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

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.2s ease-in;
}

.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-leave-to {
  opacity: 0;
}
</style>
