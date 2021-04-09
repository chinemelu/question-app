<template>
  <Summary />
</template>

<script>
import Summary from "@/pages/summary/summary.vue";
export default {
  components: {
    Summary,
  },
  mounted() {
    this.$store.commit("timerShouldNotShow");
  },
};
</script>

<style lang="scss" scoped></style>
