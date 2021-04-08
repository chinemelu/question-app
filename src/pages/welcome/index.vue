<template>
  <Welcome />
</template>

<script>
import { reactive, toRefs } from "vue";

import Welcome from "@/pages/welcome/welcome.vue";

export default {
  components: {
    Welcome,
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
