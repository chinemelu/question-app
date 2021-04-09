<template>
  <div class="question-page">
    <p class="question-page__question-heading">Question {{ pageNumber }}</p>
    <main class="question-page__question-box">
      <p class="question-page__question">
        {{ questionProps.question }}
      </p>
      <ul class="question-page__question-options">
        <li
          class="question-page__question-option"
          :key="questionOption.id"
          v-for="(questionOption, index) in questionProps.choices"
        >
          <BaseRadio
            class="question-page__radio"
            v-model="picked"
            :value="index + 1"
          />{{ questionOption.choice }}
        </li>
      </ul>
    </main>
    <div>
      <BaseButton
        @click="goToNextQuestion"
        :disabled="!picked"
        class="welcome-page__button"
        >{{ buttonText }}</BaseButton
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
    questionProps: {
      type: Object,
      required: true,
    },
  },
  computed: {
    buttonText() {
      if (this.pageNumber === this.numberOfQuestions) {
        return "Submit";
      }
      return "Next";
    },
    numberOfQuestions() {
      return this.$store.state.questions.data.length;
    },
  },
  data() {
    return {
      count: 0,
      picked: "",
    };
  },
  methods: {
    goToNextQuestion() {
      // reset the picked options
      this.picked = "";
      this.$store.commit("incrementActiveComponentIndex");
    },
  },
  mounted() {
    this.$store.commit("showTimer");
    this.$store.commit("showBackButton");
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
    line-height: 3rem;
  }
  &__question-options {
    list-style: none;
    padding: 1.5rem 3rem;
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
