<template>
  <ul class="question-page__question-options">
    <li class="question-page__question-option">
      <BaseRadio
        class="question-page__radio"
        v-model="picked"
        :value="1"
      />Persijia
    </li>
    <li class="question-page__question-option">
      <BaseRadio
        class="question-page__radio"
        v-model="picked"
        :value="2"
      />Persib
    </li>
    <li class="question-page__question-option">
      <BaseRadio
        class="question-page__radio"
        v-model="picked"
        :value="3"
      />Inter Milan
    </li>
  </ul>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
