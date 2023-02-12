// icons
import { FaPlay, FaStop, FaPause } from "react-icons/fa";

// component
import AppLayout from "./component/AppLayout";
import TextInput from "./component/TextInput";
import InputContainer from "./component/InputContainer";
import ButtonContainer from "./component/ButtonContainer";

// hooks
import useTimer from "./hooks/useTimer";

const App = () => {
  // HOOKS
  const { time, isStarted, onInputChange, onStartStop, onReset } = useTimer();

  return (
    <>
      <AppLayout>
        <InputContainer>
          <TextInput
            type="text"
            value={time.minute}
            indicator="m"
            onChange={onInputChange}
          />
          <TextInput
            type="text"
            value={time.second}
            indicator="s"
            onChange={onInputChange}
          />
        </InputContainer>
        <ButtonContainer>
          {isStarted ? (
            <FaPause size={60} onClick={onStartStop} />
          ) : (
            <FaPlay size={60} onClick={onStartStop} />
          )}
          <FaStop size={60} onClick={onReset} />
        </ButtonContainer>
      </AppLayout>
    </>
  );
};

export default App;
