const formatTimeInSecondsToMinutes = (time) => {
  let minutes = Math.floor(time / 60);

  let seconds = time % 60;

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${minutes} : ${seconds}`;
};

export default formatTimeInSecondsToMinutes;
