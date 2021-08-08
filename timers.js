const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting ... ${p}%`);
};

const timerFinished = () => {
  clearInterval(interval); // Stopping the interval
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Done!`);
};

// To prevent the interval from running infinitly, we need to clear the interval
// and in order to clean the intervel w should have assign a variable for the setInterval
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
