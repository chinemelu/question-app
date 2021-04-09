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
            :value="index"
          />{{ questionOption.choice }}
        </li>
      </ul>
    </main>
    <div>
      <BaseButton
        @click="handleClick"
        :disabled="picked === ''"
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
    percentageOfUser() {
      let percentage =
        (this.numberOfCorrectAnswers / this.numberOfQuestions) * 100;
      // convert percentage to 1 decimal place, if it is a fraction, for better accuracy
      let formattedPercentage = Math.round(percentage * 10) / 10;
      return formattedPercentage;
    },
    answerIsCorrect() {
      const userChoiceIndex = this.picked;
      const correctChoiceIndex = this.questionProps.choices.findIndex(
        (question) => question.is_correct_choice === 1
      );
      return userChoiceIndex === correctChoiceIndex;
    },
    numberOfIncorrectAnswers() {
      return this.numberOfQuestionsAnswered - this.numberOfCorrectAnswers;
    },
  },
  data() {
    return {
      count: 0,
      picked: "",
      numberOfQuestionsAnswered: 0,
      numberOfCorrectAnswers: 0,
    };
  },
  methods: {
    handleClick() {
      let questionSummary = {
        numberOfQuestionsAnswered: ++this.numberOfQuestionsAnswered,
        numberOfCorrectAnswers: this.answerIsCorrect
          ? ++this.numberOfCorrectAnswers
          : this.numberOfCorrectAnswers,
        percentageOfUser: this.percentageOfUser,
        numberOfIncorrectAnswers: this.numberOfIncorrectAnswers,
      };
      this.$store.commit("updateQuestionSummary", questionSummary);
      // this is the last question
      if (this.pageNumber === this.numberOfQuestions) {
        this.$router.push({ name: "summary-page" });
      } else {
        // reset the picked options
        this.picked = "";
        this.$store.commit("incrementActiveComponentIndex");
      }
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
  padding: 0 1rem;
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
