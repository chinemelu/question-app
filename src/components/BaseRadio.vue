<template>
  <input
    type="radio"
    :value="modelValue"
    @change="updateRadioValue"
    v-bind="$attrs"
    :checked="value === modelValue"
  />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [Number, String],
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateRadioValue() {
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.question-page__radio {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
}
</style>
