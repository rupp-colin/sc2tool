import { create } from "zustand";

const useTimerStore = create((set) => ({
  // timerStore mutable state
  timerState: {
    time: 0,
    delay: 0,
    isRunning: false
  },
  // timerStore initial state
  initialTimerState: {
    time: 0,
    delay: 0,
    isRunning: false
  },
  // timerStore state actions
  setTime: (int) =>
    set((state) => ({ timerState: { ...state.timerState, time: int } })),
  setDelay: (int) =>
    set((state) => ({ timerState: { ...state.timerState, delay: int } })),
  setIsRunning: (bool) =>
    set((state) => ({ timerState: { ...state.timerState, isRunning: bool } }))
}));

const useGameTimerStore = create((set) => ({
  gameTimerState: {
    ticks: 0,
    subTicks: 0
  },
  initialTimerState: {
    ticks: 0,
    subTicks: 0
  },
  // actions
  setTicks: (int) =>
    set((state) => ({
      gameTimerState: { ...state.gameTimerState, ticks: int }
    })),
  setSubTicks: (int) =>
    set((state) => ({
      gameTimerState: { ...state.gameTimerState, subTicks: int }
    }))
}));

export { useTimerStore, useGameTimerStore };
