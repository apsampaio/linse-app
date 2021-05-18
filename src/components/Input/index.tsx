import React, { useState } from "react";

import colors from "../../styles/colors";

import { FeatherIcon } from "../../interfaces/FeatherIcon";
import { Feather } from "@expo/vector-icons";

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
  icon: FeatherIcon;
}

// TODO - [ ] ADD INPUT MASK
// TODO - [ ] ADD REF

const Input: React.FC<InputProps> = ({
  name,
  icon,
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
        <Feather
          name={icon}
          size={24}
          color={isFocused ? colors.blue : colors.darkGray}
        />
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
          {passwordVisible ? (
            <Feather name="eye" size={24} color={colors.darkGray} />
          ) : (
            <Feather name="eye-off" size={24} color={colors.blue} />
          )}
        </SecretIconContainer>
      )}
    </Container>
  );
};

export default Input;
