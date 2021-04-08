<template>
  <div class="question-page">
    <p class="question-page__question-heading">Question {{ pageNumber }}</p>
    <main class="question-page__question-box">
      <p class="question-page__question">
        What is Michael Essien's current club?
      </p>
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
    </main>
    <div>
      <BaseButton :disabled="!picked" class="welcome-page__button"
        >Next</BaseButton
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  data() {
    return {
      count: 0,
      picked: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.question-page {
  color: $primary-white;
  padding: 1rem;
  &__question-heading {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: $primary-black;
  }
  &__question-box {
    background-image: linear-gradient(
      to left bottom,
      $primary-color-dark,
      $secondary-color-dark
    );
  }
  &__question {
    font-size: 1.8rem;
    padding: 1rem;
    letter-spacing: 0.2rem;
    line-height: 3rem;
    width: 100%;
    margin: 0 auto;
  }
  &__question-options {
    list-style: none;
    padding: 1.5rem 5rem;
    border-top: 1px solid $primary-white;
  }
  &__question-option {
    font-size: 1.7rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    &:last-of-type {
      padding-bottom: 2rem;
    }
  }
  &__accept-question-link,
  &__skip-question-link {
    color: $primary-color-dark;
    font-size: 1.6rem;
    margin-top: 1rem;
  }
  &__accept-question-link {
    display: flex;
    margin-right: auto;
  }
}
</style>
