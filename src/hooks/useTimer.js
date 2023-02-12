import { useState, useRef } from "react";

const useTimer = () => {
  //   STATES & REFS
  const [time, setTime] = useState({ minute: 0, second: 0 });
  const [isStarted, setIsStarted] = useState(false);
  const interVal = useRef(null);

  //   FUNCTIONS
  const startInterval = () => {};
  const textToumber = (value) => {};
  const onInputChange = (e) => {};
  const onStartStop = (e) => {};
  const onReset = (e) => {};

  return { time, isStarted, onInputChange, onStartStop, onReset };
};

export default useTimer;
