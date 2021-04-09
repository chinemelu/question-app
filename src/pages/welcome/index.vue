<template>
  <component
    :is="componentList[activeComponentIndex]"
    @continue-to-next-section="moveToNextComponent"
  />
</template>

<script>
import Welcome from "@/pages/welcome/welcome.vue";
import Instructions from "@/pages/welcome/instructions.vue";

import { markRaw } from "vue";

export default {
  components: {
    Welcome,
    Instructions,
  },
  data() {
    return {
      componentList: markRaw([Welcome, Instructions]),
    };
  },
  computed: {
    activeComponentIndex() {
      return this.$store.state.activeComponentIndex;
    },
  },
  methods: {
    moveToNextComponent() {
      this.$store.commit("incrementActiveComponentIndex");
    },
  },
};
</script>

<style lang="scss" scoped></style>
