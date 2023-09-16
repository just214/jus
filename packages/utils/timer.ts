// countdownTimer.ts
type TimerCallback = (time: number) => void;
type TimerOptions = {
  startTime?: number;
  countUp?: boolean;
};

const createCountdownTimer = (
  duration: number,
  onTick: TimerCallback,
  onCompleted: () => void,
  options?: TimerOptions
) => {
  const { startTime = Date.now(), countUp = false } = options || {};

  const tick = (currentTime: number) => {
    if (countUp) {
      const nextTime = currentTime + 10;
      if (nextTime > duration) {
        onCompleted();
      } else {
        onTick(nextTime);
        setTimeout(() => tick(nextTime), 10);
      }
    } else {
      const nextTime = currentTime - 10;
      if (nextTime < 0) {
        onCompleted();
      } else {
        onTick(nextTime);
        setTimeout(() => tick(nextTime), 10);
      }
    }
  };

  const start = () => {
    tick(countUp ? 0 : duration);
  };

  return {
    start,
  };
};

export default createCountdownTimer;

// no-var, no-unused-vars, capitalized-comments, camelcase

// var hello = "world";
// var unused = "unused";
// let _unused = "_unused";
// let __unused = "__unused";

// // this function does a fun thing
// export function doThing() {
//   console.log(`hello ${hello}`);
//   const b = "some_random_string";
//   console.log(b);
// }
