import React from "react";

import colors from "../../styles/colors";
import SecretIcon from "../../assets/secret.svg";

import { Container, TextInput, Icon, SecretIconContainer } from "./styles";

interface InputProps {
  name: string;
  placeholder: string;
  isSecret?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  isSecret = false,
  children,
  ...rest
}) => {
  return (
    <Container>
      <Icon>{children}</Icon>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecret}
        placeholderTextColor={colors.darkGray}
      />
      <SecretIconContainer>{isSecret && <SecretIcon />}</SecretIconContainer>
    </Container>
  );
};

export default Input;
