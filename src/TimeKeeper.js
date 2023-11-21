import { useTimerStore, useGameTimerStore } from "./store/timeStore";
import { useInterval, parseSecondsToString } from "./utils";
import { useState } from "react";

const TimeKeeper = () => {
  // get global state data and actions
  const { timerState, setIsRunning, setDelay, setTime } = useTimerStore(
    (state) => state
  );
  const initialDelay = useTimerStore((state) => state.initialTimerState.delay);
  const { time, delay, isRunning } = timerState;
  const { gameTimerState, setSubTicks, setTicks } = useGameTimerStore(
    (state) => state
  );
  const { ticks, subTicks } = gameTimerState;
  //set local state
  const [updateTicks, setUpdateTicks] = useState(0);

  // Increment the counter.
  useInterval(
    () => {
      setTime(time + 1); // only sets the time for the stopwatch - does not alter "game ticks"
      if (subTicks === 99) {
        setSubTicks(0);
        setTicks(parseInt(ticks + 1));
      } else {
        setSubTicks(subTicks + 1);
      }
    },
    isRunning ? delay : null
  );

  // Method for starting and stopping the timer
  const toggleTimer = (bool) => {
    setIsRunning(bool);
  };
  // Method for resetting the timer
  const resetTimer = () => {
    setTime(0);
    setTicks(0);
    setSubTicks(0);
  };
  const handleFastForward = (int) => {
    console.log("int", int);
    if (ticks + int > 0) setTicks(ticks + int);
  };
  // Hours/minutes/seconds/milliseconds calculation
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const gMilliseconds = subTicks % 100;
  console.log("ticks", ticks);
  return (
    <>
      <p className="stopwatch-gtime">
        {parseSecondsToString(ticks)}:
        {gMilliseconds.toString().padStart(2, "0")}
      </p>
      <p>Game Timer</p>
      <button onClick={() => handleFastForward(-5)}>{"-5"}</button>
      <button onClick={() => handleFastForward(-2)}>{"-2"}</button>
      <button onClick={() => handleFastForward(-1)}>{"-1"}</button>
      <button onClick={() => handleFastForward(1)}>{"+1"}</button>
      <button onClick={() => handleFastForward(2)}>{"+2"}</button>
      <button onClick={() => handleFastForward(5)}>{"+5"}</button>
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <p></p>
      <div>
        <button onClick={() => toggleTimer(true)}>Start</button>
        <button onClick={() => toggleTimer(false)}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <div>speed control</div>
        <button onClick={() => setDelay(200)}>custom</button>
        <button onClick={() => setDelay(70)}>slowest</button>
        <button onClick={() => setDelay(40)}>slower</button>
        <button onClick={() => setDelay(initialDelay)}>normal</button>
      </div>
      <h4>Delay: {delay}</h4>
    </>
  );
};

export default TimeKeeper;
