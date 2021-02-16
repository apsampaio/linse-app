import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import colors from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  height: 40px;

  border-bottom-width: 2px;
  border-bottom-color: ${colors.darkGray};

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
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
