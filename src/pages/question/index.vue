<template>
  <transition name="fade" mode="out-in" appear>
    <component
      :is="arrayOfQuestions[0]"
      :questionProps="questions[activeComponentIndex]"
      :pageNumber="activeComponentIndex + 1"
    />
  </transition>
</template>

<script>
import Question from "@/pages/question/Question.vue";
import { markRaw } from "vue";

export default {
  data() {
    return {
      arrayOfQuestions: markRaw([Question]),
    };
  },

  computed: {
    activeComponentIndex() {
      return this.$store.state.activeComponentIndex;
    },
    questions() {
      return this.$store.state.questions.data;
    },
  },
  mounted() {
    this.$store.commit("resetActiveComponentIndex");
    this.$store.commit("backButtonShouldNotShow");
  },
};
</script>

<style lang="scss" scoped></style>
