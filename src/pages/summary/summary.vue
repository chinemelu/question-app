<template>
  <div class="summary-page">
    <h1 class="summary-page__heading">Summary</h1>
    <div class="summary-page__item summary-page__item--1">
      <p class="summary-page__item-text">Total Questions Answered</p>
      <p class="summary-page__item-value">
        {{ questionsSummary.numberOfQuestionsAnswered }}
      </p>
    </div>
    <div class="summary-page__item summary-page__item--2">
      <p class="summary-page__item-text">Total Correct Answers</p>
      <p class="summary-page__item-value">
        {{ questionsSummary.numberOfCorrectAnswers }}
      </p>
    </div>
    <div class="summary-page__item summary-page__item--3">
      <p class="summary-page__item-text">Total Incorrect Answers</p>
      <p class="summary-page__item-value">
        {{ questionsSummary.numberOfIncorrectAnswers }}
      </p>
    </div>
    <div class="summary-page__item summary-page__item--4">
      <p class="summary-page__item-text">Total Points Accumulated</p>
      <p class="summary-page__item-value">
        {{ questionsSummary.percentageOfUser }}%
      </p>
    </div>
    <div class="summary-page__btn">
      <BaseButton class="welcome-page__button" @click="goToBeginningOfTest"
        >Re-take Test</BaseButton
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToBeginningOfTest() {
      this.$router.push({ name: "question-page" });
    },
  },
  computed: {
    questionsSummary() {
      return this.$store.state.questionsSummary;
    },
  },
};
</script>

<style lang="scss" scoped>
.summary-page {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  padding: 1rem;
  &__heading {
    grid-column: 1/3;
    grid-row: 1 / 2;
    justify-self: center;
    margin-bottom: 2rem;
  }
  &__item {
    box-shadow: 0 2rem 5rem rgba($primary-black, 0.1);
    text-align: center;
    border-radius: 5px;
    padding: 1rem 1.5rem;
    font-size: 1.7rem;
    color: $primary-white;
  }
  &__item--1 {
    background-image: linear-gradient(
      to right,
      $primary-color-dark,
      $secondary-color-dark
    );
  }
  &__item--2 {
    background-image: linear-gradient(
      to right,
      $green-color-dark,
      $green-color-light
    );
  }
  &__item--3 {
    background-image: linear-gradient(
      to right,
      $orange-color-dark,
      $wine-color-dark
    );
  }
  &__item--4 {
    background-image: linear-gradient(
      to right bottom,
      $blue-color-dark,
      $blue-color-light
    );
  }
  &__item-text {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  &__item-value {
    margin-bottom: 2rem;
  }
  &__btn {
    grid-column: 1/3;
  }
}
</style>
