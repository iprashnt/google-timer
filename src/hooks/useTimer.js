import { useState, useRef } from "react";

const useTimer = () => {
  //   STATES & REFS
  const [time, setTime] = useState({ minute: 0, second: 0 });
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(100);
  const interVal = useRef(null);

  //   FUNCTIONS
  const resetValues = () => {
    setIsStarted(false);
    setTime({ minute: 0, second: 0 });
    clearInterval(interVal.current);
  };
  const startInterval = () => {
    setIsStarted(true);
    let totalSeconds = time.minute * 60 + time.second;
    const tmpTotalSeconds = totalSeconds;
    interVal.current = setInterval(() => {
      totalSeconds = totalSeconds - 1;
      const completed = parseInt(
        ((tmpTotalSeconds - totalSeconds) / tmpTotalSeconds) * 100
      );
      const remain = progress - completed;
      if (totalSeconds !== 0) {
        const minute = parseInt(totalSeconds / 60);
        const second = parseInt(totalSeconds - minute * 60);
        setTime({ minute, second });
        setProgress(remain);
      } else {
        setProgress(remain);
        resetValues();
      }
    }, 1000);
  };
  const textToNumber = ({ name, value }) => {
    const tmpVal = value.trim();
    if (tmpVal == "") return 0;
    if (!parseInt(tmpVal)) return 0;
    if (tmpVal.length > 2 || parseInt(tmpVal) > 60)
      return name == "minute" ? time.minute : time.second;
    return parseInt(tmpVal);
  };
  const onInputChange = (e) => {
    setProgress(100);
    e.target.name == "minute"
      ? setTime({ ...time, minute: textToNumber(e.target) })
      : setTime({ ...time, second: textToNumber(e.target) });
  };
  const onStartStop = (e) => {
    if (time.minute == 0 && time.second == 0) return;
    if (!isStarted) {
      startInterval();
    } else {
      setIsStarted(false);
      clearInterval(interVal.current);
    }
  };
  const onReset = (e) => {
    if (time.minute == 0 && time.second == 0) return;
    setProgress(100);
    resetValues();
  };

  return { time, isStarted, progress, onInputChange, onStartStop, onReset };
};

export default useTimer;
