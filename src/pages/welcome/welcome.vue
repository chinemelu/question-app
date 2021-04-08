<template>
  This is the welcome page
  <BaseSelect />
  <img src="" />
  <vue-tel-input default-country-code="NG" v-model="yourValue" />
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      yourValue: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
