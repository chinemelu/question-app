<template>
  <div class="welcome-page">
    <section class="welcome-page__image">
      <svg id="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#09203F"
          fill-opacity="1"
          d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,96C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <img
        class="welcome-page__logo"
        src="@/assets/undraw_Mobile_app.svg"
        alt="welcome logo"
      />
    </section>
    <section class="welcome-section">
      <h1 class="welcome-section__heading">Welcome to Question App</h1>
      <p class="welcome-section__paragraph">
        Please enter your phone number below
      </p>
      <vue-tel-input
        defaultCountry="NG"
        v-model="phone"
        @input="updateValueOfPhone"
        class="welcome-section__telephone-input"
      />
      <BaseButton
        :disabled="buttonIsDisabled"
        @click="handleClick"
        class="welcome-page__button"
        >Continue</BaseButton
      >
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
    };
  },
  computed: {
    buttonIsDisabled() {
      console.log(typeof this.phone);
      let phoneNumberWithoutSpaces = this.phone.split(" ").join("");
      return phoneNumberWithoutSpaces.length !== 11;
    },
  },
  mounted() {
    this.$store.commit("backButtonShouldNotShow");
  },
  methods: {
    handleClick() {
      this.$emit("continue-to-next-section");
    },
    updateValueOfPhone(value) {
      if (typeof value === "string") {
        this.phone = value;
      }
    },
  },
};
</script>

<style lang="scss">
@include for-phone-up {
  .welcome-page {
    &__image {
      position: relative;
    }
    &__logo {
      background-color: $primary-white;
      width: 100%;
      height: 40vh;
    }
  }
  .welcome-section {
    color: $primary-white;
    background-color: $primary-color-dark;
    padding: 1.5vh 1vw 3vh 1vw;
    letter-spacing: 0.2rem;
    min-height: 53vh;
    &__heading {
      font-size: 2.2rem;
      font-weight: 300;
      text-align: center;
    }
    &__paragraph {
      color: $primary-white;
      font-size: 1.5rem;
      width: 100%;
      margin: 3.5vh auto;
      text-align: center;
      font-weight: 100;
    }
    &__telephone-input {
      padding: 1rem 1.5rem;
      color: $secondary-color-dark;
      font-size: 1.6rem;
    }
  }
  #curve {
    position: absolute;
    bottom: 0;
    margin-bottom: -1px;
  }

  .vti__input {
    padding: 1rem 1.5rem;
    font-size: 1.6rem;
  }
}
</style>
