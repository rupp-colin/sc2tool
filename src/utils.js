import { useEffect, useRef } from "react";
/*
  args:
    callback = the fx you want to happen for each tick of the interval
    delay = the delay in milliseconds for native "setInterval()"
    listener = array to be used at the end of  react's useEffect() to watch for state changes that require re-rendering
*/
export function useInterval(callback, delay, ticks) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function cb() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(cb, delay);
      return () => clearInterval(id);
    }
  }, [delay, ticks]);
}

export const parseSecondsToString = (totalSeconds) => {
  const totalMs = totalSeconds * 1000;
  const result = new Date(totalMs).toISOString().slice(11, 19);

  return result;
};
