import React, { useState } from "react";

import colors from "../../styles/colors";
import SecretIcon from "../../assets/secret.svg";

import {
  Container,
  TextInput,
  IconContainer,
  SecretIconContainer,
} from "./styles";

interface InputProps {
  name: string;
  placeholder: string;
  isSecret?: boolean;
  Icon?: any;
}

// TODO - [ ] ADD INPUT MASK
// TODO - [ ] ADD REF

const Input: React.FC<InputProps> = ({
  name,
  Icon,
  placeholder,
  isSecret = false,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(isSecret);
  const [isFocused, setIsFocused] = useState(false);
  const handleTogglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container isFocused={isFocused} isErrored={false}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        secureTextEntry={passwordVisible}
        placeholderTextColor={colors.darkGray}
      />
      {isSecret && (
        <SecretIconContainer onPress={handleTogglePasswordVisible}>
          <SecretIcon />
        </SecretIconContainer>
      )}
    </Container>
  );
};

export default Input;
