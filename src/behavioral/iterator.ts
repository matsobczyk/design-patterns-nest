export function iterateWithJump(start: number, end: number, jump = 10) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end && start + jump < end) {
        start = start + jump;
        return { value: start, done: false };
      }
      return { done: true, value: end };
    },
  };
}
