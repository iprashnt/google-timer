import React from "react";
import { Stack } from "react-bootstrap";

const ButtonContainer = ({ children }) => {
  return (
    <Stack direction="horizontal" gap={3}>
      {children}
    </Stack>
  );
};

export default ButtonContainer;
