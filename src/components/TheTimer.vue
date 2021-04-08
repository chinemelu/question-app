<template>
  <div class="the-timer">
    <svg
      class="the-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="the-timer__circle">
        <circle class="the-timer__path-elapsed" cx="50" cy="50" r="45" />
        <path
          stroke-dasharray="0"
          :class="`the-timer__path-remaining${remainingPathColorClass}`"
          d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
        ></path>
      </g>
    </svg>
    <span class="the-timer__time-left"> {{ timeLeft }} </span>
  </div>
</template>

<script>
import formatTimeInSecondsToMinutes from "@/utils/formatTimeInSecondsToMinutes.js";
export default {
  methods: {
    formatTime(time) {
      return formatTimeInSecondsToMinutes(time);
    },
    startTimer() {
      this.timePassed += 1;
      this.timeLeft = this.initialTime - this.timePassed;

      if (!this.timeLeft) {
        clearInterval(this.timerInterval);
      }

      this.timeLeft = this.formatTime(this.timeLeft);
    },
  },
  mounted() {
    this.timerInterval = setInterval(this.startTimer, 1000);
  },
  data() {
    return {
      timeLeft: this.formatTime(120),
      timerInterval: 0,
      timePassed: 0,
      initialTime: 120,
      remainingPathColorClass: "--green",
    };
  },
};
</script>

<style lang="scss" scoped>
/* Sets the containers height and width */
.the-timer {
  position: relative;
  height: 30rem;
  width: 30rem;
  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }
  &__circle {
    fill: none;
    stroke: none;
  }
  &__time-left {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 4.8rem;
    transform: translate(-50%, -50%);
  }
}
</style>
