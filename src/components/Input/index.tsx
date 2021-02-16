import React from "react";
import { Container, TextInput, Icon } from "./styles";

import colors from "../../styles/colors";

const Input: React.FC = ({ children }) => {
  return (
    <Container>
      <Icon>{children}</Icon>
      <TextInput placeholder="CPF" placeholderTextColor={colors.darkGray} />
    </Container>
  );
};

export default Input;
