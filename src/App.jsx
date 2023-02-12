import { ProgressBar } from "react-bootstrap";
import * as style from "./styles/app.module.css";

// hooks
import useTimer from "./hooks/useTimer";

// icons
import { FaPlay, FaStop, FaPause } from "react-icons/fa";

// component
import AppLayout from "./component/AppLayout";
import TextInput from "./component/TextInput";
import InputContainer from "./component/InputContainer";
import ButtonContainer from "./component/ButtonContainer";

const App = () => {
  // HOOKS
  const { time, isStarted, progress, onInputChange, onStartStop, onReset } =
    useTimer();

  return (
    <>
      <AppLayout>
        <ProgressBar
          animated
          now={progress}
          variant="danger"
          style={{ height: "5px" }}
        />
        <InputContainer>
          <TextInput
            name="minute"
            type="text"
            value={time.minute}
            indicator="m"
            onChange={onInputChange}
            disabled={isStarted ? true : false}
          />
          <TextInput
            name="seconds"
            type="text"
            value={time.second}
            indicator="s"
            onChange={onInputChange}
            disabled={isStarted ? true : false}
          />
        </InputContainer>

        <ButtonContainer>
          {isStarted ? (
            <FaPause
              size={60}
              color="#9575CD"
              cursor="pointer"
              onClick={onStartStop}
              className={style.iconButton}
            />
          ) : (
            <FaPlay
              size={60}
              color="#9575CD"
              cursor="pointer"
              className={style.iconButton}
              onClick={onStartStop}
            />
          )}
          <FaStop
            size={60}
            color="#E65100"
            cursor="pointer"
            onClick={onReset}
          />
        </ButtonContainer>
      </AppLayout>
    </>
  );
};

export default App;
