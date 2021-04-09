import { createStore } from "vuex";
import questions from "../questions";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      questions,
      showBackButton: false,
      showTimer: false,
      activeComponentIndex: 0,
    };
  },
  mutations: {
    showBackButton(state) {
      state.showBackButton = true;
    },
    backButtonShouldNotShow(state) {
      state.showBackButton = false;
    },
    showTimer(state) {
      state.showTimer = true;
    },
    timerShouldNotShow(state) {
      state.showTimer = false;
    },
    resetActiveComponentIndex(state) {
      state.activeComponentIndex = 0;
    },
    incrementActiveComponentIndex(state) {
      state.activeComponentIndex += 1;
    },
    decreaseActiveComponentIndex(state) {
      state.activeComponentIndex -= 1;
    },
  },
});

export default store;
