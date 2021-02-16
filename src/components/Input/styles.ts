import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import colors from "../../styles/colors";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 40px;
  border-color: ${colors.darkGray};
  border-bottom-width: 2px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 32px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${colors.red};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.blue};
    `}
`;

export const Icon = styled.View`
  margin-left: 8px;
  padding-right: 16px;
`;

export const SecretIconContainer = styled(TouchableOpacity)`
  padding-right: 8px;
  padding-left: 8px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000000;
  font-size: 16px;
`;
