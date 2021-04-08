<template>
  <Timer />
  <router-view />
</template>

<script>
import Timer from "@/components/TheTimer.vue";
export default {
  components: {
    Timer,
  },
};
</script>

<style></style>
