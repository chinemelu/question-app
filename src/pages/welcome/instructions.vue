<template>
  <div class="instructions-page">
    <section class="instructions-page__image">
      <svg id="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,96C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <img
        class="instructions-page__logo"
        src="@/assets/undraw_Question.svg"
        alt="welcome logo"
      />
    </section>
    <section class="instructions-page__instructions">
      <h1 class="instructions-page__heading">Instructions</h1>
      <p class="instructions-page__secondary-text">
        You have 120s (2 minutes) to answer {{ numberOfQuestions }} questions.
      </p>

      <p class="instructions-page__secondary-text">
        Once you click the "Get Started" button, the timer will start and once
        the time elapses, you will be redirected to the test summary page.
      </p>
      <p
        class="instructions-page__secondary-text instructions-page__secondary-text--1"
      >
        Once you move on to another question, you will not be able to review
        your answer.
      </p>
      <BaseButton @click="goToQuestions" class="welcome-page__button"
        >Get Started</BaseButton
      >
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    numberOfQuestions() {
      return this.$store.state.questions.data.length;
    },
  },
  mounted() {
    this.$store.commit("showBackButton");
  },
  methods: {
    goToQuestions() {
      this.$router.push({ name: "question-page" });
    },
  },
};
</script>

<style lang="scss">
@include for-phone-up {
  .instructions-page {
    &__image {
      position: relative;
      background-color: $secondary-color-dark;
      margin-bottom: 1px;
    }
    &__logo {
      width: 100%;
      height: 40vh;
    }
    &__instructions {
      padding: 0 3vw;
      text-align: center;
    }
    &__heading {
      font-size: 2rem;
    }
    &__secondary-text {
      font-size: 1.4rem;
      margin: 3vh auto;
    }
  }
  #curve {
    position: absolute;
    bottom: 0;
  }
}
</style>
