let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');

const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const startTime = Date.now();
  const endTime = startTime + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(endTime);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);
    // check for end
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}:${
    remainingSeconds < 10 ? '0' : ''
  }${remainingSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
  console.log({ minutes, remainingSeconds });
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTimeDisplay.textContent = `Timer ends at ${hour % 12}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

// grab element by name
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
